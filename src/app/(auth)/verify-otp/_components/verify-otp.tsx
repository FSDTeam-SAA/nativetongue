
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Image from "next/image";

export default function VerifyAccount() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
            <Card className="w-full max-w-lg border-none bg-[#0D0D0D] p-8 text-white shadow-2xl">
                <CardHeader className="flex flex-col items-center space-y-4 pb-8">
                    <div className="flex items-center gap-2 w-52">
                        <Image src="/logo.png" alt="Logo" width={900} height={900} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white">Verify Your Account</h1>
                        <p className="mt-2 text-sm text-gray-400">
                            Enter the 6-digit code sent to your email to continue.
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* OTP Input Group */}
                    <div className="flex justify-between gap-2">
                        {[1, 2, 3, "", "", ""].map((val, i) => (
                            <div key={i} className={`flex h-14 w-14 items-center justify-center rounded-md border-2 text-xl font-bold ${val ? 'border-white bg-transparent' : 'border-gray-800 bg-[#161616]'}`}>
                                {val}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="h-4 w-4" />
                            <span>00:30</span>
                        </div>
                        <div className="text-gray-400">
                            Didn&apos;t get a code? <button className="text-[#00A859] hover:underline">Resend</button>
                        </div>
                    </div>

                    <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:opacity-90">
                        Verify
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}