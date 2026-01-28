import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function ResetPassword() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
            <Card className="w-full max-w-3xl border-[#FFFFFF1A] border bg-[#0D0D0D] p-8 text-white shadow-2xl">
                <CardHeader className="flex flex-col items-center space-y-4 pb-8">
                    <div className="flex items-center gap-2 w-52">
                        <Image src="/logo.png" alt="Logo" width={900} height={900} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white">Reset Your Password</h1>
                        <p className="mt-2 text-sm text-gray-400">
                            Enter your email address and we&apos;ll send you code to reset your password.
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="hello@example.com"
                            className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                        />
                    </div>
                    <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90">
                        Send Code
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}