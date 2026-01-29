"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ResetPassword() {

  const router = useRouter();
  const [email, setEmail] = useState("");

  /* ---------------- Mutation ---------------- */
  const { mutate, isPending } = useMutation({
    mutationFn: async (emailData: { email: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }

      return res.json();
    },

    onSuccess: () => {
      toast.success("OTP sent to your email!", {
        id: "forgot-password-toast",
      });

      setTimeout(() => {
        router.push(
          `/verify-otp?email=${encodeURIComponent(email)}`
        );
      }, 1500);
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong", {
        id: "forgot-password-toast",
      });
    },
  });

  /* ---------------- Submit ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    toast.loading("Sending OTP...", {
      id: "forgot-password-toast",
    });

    mutate({ email });
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
      <Card className="w-full max-w-3xl border-[#FFFFFF1A] border bg-[#0D0D0D] p-8 text-white shadow-2xl">

        <CardHeader className="flex flex-col items-center space-y-4 pb-8">
          <div className="flex items-center gap-2 w-52">
            <Image src="/logo.png" alt="Logo" width={900} height={900} />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Reset Your Password
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email address and we&apos;ll send you code to reset your
              password.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email Address
              </Label>

              <Input
                id="email"
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
              />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90"
            >
              {isPending ? "Sending..." : "Send Code"}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
