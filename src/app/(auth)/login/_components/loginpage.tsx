import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
            <Card className="w-full max-w-3xl  border-[#FFFFFF1A] border bg-[#0D0D0D] p-6 text-white shadow-2xl">
                <CardHeader className="flex flex-col items-center space-y-2 pb-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 w-52">
                        <Image src="/logo.png" alt="Logo" width={900} height={900} />
                    </div>

                    {/* Title Section */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] bg-clip-text text-transparent">
                            Welcome
                        </h1>
                        <p className="mt-1 text-sm text-gray-400">
                            Access your account and track your performance
                        </p>
                    </div>
                </CardHeader>

                <CardContent>
                    <form className="space-y-6">
                        {/* Email Address */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="hello@example.com"
                                className="border-[#FFFFFF80] bg-[#0D0D0D] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-gray-300">
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    className="border-[#FFFFFF80] bg-[#0D0D0D] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                >
                                    <Eye className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" className="border-gray-600 data-[state=checked]:bg-[#00A859] data-[state=checked]:border-[#00A859]" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm font-medium text-[#00A859] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Log In Button */}
                        <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90">
                            Log In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}