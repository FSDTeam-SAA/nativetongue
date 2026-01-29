"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function VerifyAccount() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  /* ---------------- TIMER ---------------- */
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  /* ---------------- Verify Mutation ---------------- */
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: { otp: string; email: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Invalid OTP code");
      }

      return res.json();
    },

    onSuccess: () => {
      toast.success("OTP Verified Successfully!", { id: "otp-toast" });

      setTimeout(() => {
        router.push(`/confirm-password?email=${encodeURIComponent(email)}`);
      }, 1500);
    },

    onError: (error) => {
      toast.error(error.message || "Invalid OTP", { id: "otp-toast" });
    },
  });

  /* ---------------- Resend Mutation ---------------- */
  const { mutate: resendOtp, isPending: isResending } = useMutation({
    mutationKey: ["resend-otp"],
    mutationFn: async (email: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      return res.json();
    },

    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Failed to resend OTP.");
        return;
      }

      toast.success(data?.message || "OTP sent successfully!");
    },

    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleResend = () => {
    if (timeLeft > 0) return;

    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(30);
    resendOtp(email);
  };

  /* ---------------- OTP Handlers ---------------- */
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    const newOtp = [...otp];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);
  };

  /* ---------------- Submit ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length < 6) {
      return toast.error("Please enter the full 6-digit code");
    }

    if (!email) {
      return toast.error("Email not found. Please try again.");
    }

    toast.loading("Verifying code...", { id: "otp-toast" });
    mutate({ otp: otpValue, email });
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
      <Card className="w-full max-w-lg border-none bg-[#0D0D0D] p-8 text-white shadow-2xl">

        <CardHeader className="flex flex-col items-center space-y-4 pb-8">
          <div className="flex items-center gap-2 w-52">
            <Image src="/logo.png" alt="Logo" width={900} height={900} />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Verify Your Account
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Enter the 6-digit code sent to your email to continue.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">

          <form onSubmit={handleSubmit}>

            {/* OTP Inputs */}
            <div
              className="flex justify-between gap-2"
              onPaste={handlePaste}
            >
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`flex h-14 w-14 items-center justify-center rounded-md border-2 text-center text-xl font-bold outline-none
                  ${digit
                      ? "border-white bg-transparent"
                      : "border-gray-800 bg-[#161616]"
                    }`}
                />
              ))}
            </div>

            {/* Timer & Resend */}
            <div className="mt-6 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>00:{timeLeft.toString().padStart(2, "0")}</span>
              </div>

              <div className="text-gray-400">
                Didn&apos;t get a code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={timeLeft > 0 || isResending}
                  className="text-[#00A859] hover:underline disabled:opacity-50"
                >
                  Resend
                </button>
              </div>
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="mt-8 w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90"
            >
              {isPending ? "Verifying..." : "Verify"}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
