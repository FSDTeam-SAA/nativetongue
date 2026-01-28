import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function CreateNewPassword() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
            <Card className="w-full max-w-3xl  border-[#FFFFFF1A] border  bg-[#0D0D0D] p-8 text-white shadow-2xl">
                <CardHeader className="flex flex-col items-center space-y-4 pb-8">
                    <div className="flex items-center gap-2 w-52">
                        <Image src="/logo.png" alt="Logo" width={900} height={900} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white">Create a New Password</h1>
                        <p className="mt-2 text-sm text-gray-400">
                            Set a strong password to secure your account.
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* New Password */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-300">New Password</Label>
                        <div className="relative">
                            <Input
                                type="password"
                                placeholder="********"
                                className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                            />
                            <Eye className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    {/* Confirm New Password */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-300">Confirm New Password</Label>
                        <div className="relative">
                            <Input
                                type="password"
                                placeholder="********"
                                className="border-[#FFFFFF80] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                            />
                            <Eye className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90">
                        Save Changes
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}