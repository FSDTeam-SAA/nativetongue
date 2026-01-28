import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function SignUpForm() {
    return (
        <div className="flex min-h-screen items-center  justify-center bg-black p-4 font-sans">
            <Card className="w-full max-w-3xl  border-[#FFFFFF1A] border  bg-[#0D0D0D] p-6 text-white shadow-2xl">
                <CardHeader className="flex flex-col items-center space-y-2 pb-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 w-52">
                        <Image src="/logo.png" alt="Logo" width={900} height={900} />
                    </div>

                    {/* Title Section */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] bg-clip-text text-transparent">
                            Create Your Account
                        </h1>
                        <p className="mt-1 text-sm text-gray-400">
                            Start tracking your bets and performance
                        </p>
                    </div>
                </CardHeader>

                <CardContent>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {/* First Name */}
                            <div className="space-y-2">
                                <Label htmlFor="first-name" className="text-xs font-medium text-gray-300">
                                    First Name
                                </Label>
                                <Input
                                    id="first-name"
                                    placeholder="Lorem"
                                    className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                                />
                            </div>
                            {/* Last Name */}
                            <div className="space-y-2">
                                <Label htmlFor="last-name" className="text-xs font-medium text-gray-300">
                                    Last Name
                                </Label>
                                <Input
                                    id="last-name"
                                    placeholder="Ipsum"
                                    className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-medium text-gray-300">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="hello@example.com"
                                className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-xs font-medium text-gray-300">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••••••"
                                className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:bg-[#008f4c]">
                            Sign Up
                        </Button>

                        {/* Footer Link */}
                        <div className="text-center text-sm text-gray-400">
                            Already have an account?{" "}
                            <a href="#" className="text-[#00A859] hover:underline">
                                Sign In
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}