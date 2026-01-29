"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CreateNewPassword() {

  const router = useRouter();
  const searchParams = useSearchParams();

  // Get email from URL
  const email = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* ---------------- Mutation ---------------- */
  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: { email: string; newPassword: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to reset password");
      }

      return res.json();
    },

    onSuccess: () => {
      toast.success("Password reset successful!", { id: "reset-toast" });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong", {
        id: "reset-toast",
      });
    },
  });

  /* ---------------- Submit ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Email missing. Please restart the process.");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    toast.loading("Updating password...", { id: "reset-toast" });

    mutate({
      email,
      newPassword: password,
    });
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
              Create a New Password
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Set a strong password to secure your account.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* New Password */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-300">
                New Password
              </Label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-300">
                Confirm New Password
              </Label>

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
