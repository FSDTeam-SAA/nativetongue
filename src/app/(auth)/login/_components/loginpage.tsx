"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

/* ------------------ Schema ------------------ */
const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof formSchema>;

/* ------------------ Component ------------------ */
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  /* -------- Load remembered user -------- */
  useEffect(() => {
    const saved = localStorage.getItem("rememberedUser");
    if (saved) {
      const user = JSON.parse(saved);
      setValue("email", user.email);
      setValue("password", user.password);
      setValue("rememberMe", true);
    }
  }, [setValue]);

  /* -------- Submit -------- */
  async function onSubmit(values: LoginFormValues) {
    try {
      setIsLoading(true);

      if (values.rememberMe) {
        localStorage.setItem(
          "rememberedUser",
          JSON.stringify({
            email: values.email,
            password: values.password,
          })
        );
      } else {
        localStorage.removeItem("rememberedUser");
      }

      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  /* ------------------ UI ------------------ */
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
      <Card className="w-full max-w-3xl border-[#FFFFFF1A] border bg-[#0D0D0D] p-6 text-white shadow-2xl">

        {/* Header */}
        <CardHeader className="flex flex-col items-center space-y-2 pb-8">
          <div className="w-52">
            <Image src="/logo.png" alt="Logo" width={900} height={900} />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Access your account and track your performance
            </p>
          </div>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="hello@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label>Password</Label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="border-white border"
                  id="remember"
                  onCheckedChange={(v) =>
                    setValue("rememberMe", Boolean(v))
                  }
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <a
                href="/reset-password"
                className="text-sm text-[#00A859] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
          <div className="text-center text-sm mt-2 text-gray-400">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-[#00A859] hover:underline">
              Sign Up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
