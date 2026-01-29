// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import Image from "next/image";

// export default function SignUpForm() {


//  const { mutate, isPending } = useMutation({
//         mutationKey: ["signup"],
//         mutationFn: (payload: { firstName: string, lastName: string, password: string, email: string }) =>
//             fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             }).then((res) => res.json()),

//         onSuccess: (data) => {
//             if (!data?.success) {
//                 toast.error(data?.message || "Something went wrong");
//                 return;
//             }

//             toast.success(data?.message || " Account created successfully!");
//             onOpenChange(false)
//         },

//         onError: (error) => {
//             toast.error("Something went wrong. Please try again.");
//             console.error("Signup error:", error);
//         },
//     });


//     return (
//         <div className="flex min-h-screen items-center  justify-center bg-black p-4 font-sans">
//             <Card className="w-full max-w-3xl  border-[#FFFFFF1A] border  bg-[#0D0D0D] p-6 text-white shadow-2xl">
//                 <CardHeader className="flex flex-col items-center space-y-2 pb-8">
//                     {/* Logo Section */}
//                     <div className="flex items-center gap-2 w-52">
//                         <Image src="/logo.png" alt="Logo" width={900} height={900} />
//                     </div>

//                     {/* Title Section */}
//                     <div className="text-center">
//                         <h1 className="text-3xl font-bold bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] bg-clip-text text-transparent">
//                             Create Your Account
//                         </h1>
//                         <p className="mt-1 text-sm text-gray-400">
//                             Start tracking your bets and performance
//                         </p>
//                     </div>
//                 </CardHeader>

//                 <CardContent>
//                     <form className="space-y-6">
//                         <div className="grid grid-cols-2 gap-4">
//                             {/* First Name */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="first-name" className="text-xs font-medium text-gray-300">
//                                     First Name
//                                 </Label>
//                                 <Input
//                                     id="first-name"
//                                     placeholder="Lorem"
//                                     className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
//                                 />
//                             </div>
//                             {/* Last Name */}
//                             <div className="space-y-2">
//                                 <Label htmlFor="last-name" className="text-xs font-medium text-gray-300">
//                                     Last Name
//                                 </Label>
//                                 <Input
//                                     id="last-name"
//                                     placeholder="Ipsum"
//                                     className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
//                                 />
//                             </div>
//                         </div>

//                         {/* Email Address */}
//                         <div className="space-y-2">
//                             <Label htmlFor="email" className="text-xs font-medium text-gray-300">
//                                 Email Address
//                             </Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 placeholder="hello@example.com"
//                                 className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
//                             />
//                         </div>

//                         {/* Password */}
//                         <div className="space-y-2">
//                             <Label htmlFor="password" className="text-xs font-medium text-gray-300">
//                                 Password
//                             </Label>
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 placeholder="••••••••••••"
//                                 className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
//                             />
//                         </div>

//                         {/* Submit Button */}
//                         <Button className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:bg-[#008f4c]">
//                             Sign Up
//                         </Button>

//                         {/* Footer Link */}
//                         <div className="text-center text-sm text-gray-400">
//                             Already have an account?{" "}
//                             <a href="#" className="text-[#00A859] hover:underline">
//                                 Sign In
//                             </a>
//                         </div>
//                     </form>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }


"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type SignUpFormValues = z.infer<typeof formSchema>;

export default function SignUpForm() {

  /* ------------ React Hook Form ----------- */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter()

  /* ------------ Mutation ------------ */
  const { mutate, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: (payload: SignUpFormValues) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json()),

    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Something went wrong");
        return;
      }

      toast.success(data?.message || "Account created successfully!");
      router.push("/login")
    },

    onError: (error) => {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
    },
  });

  /* ------------ Submit ------------ */
  const onSubmit = (values: SignUpFormValues) => {
    console.log(values)
    mutate(values);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans">
      <Card className="w-full max-w-3xl border-[#FFFFFF1A] border bg-[#0D0D0D] p-6 text-white shadow-2xl">

        <CardHeader className="flex flex-col items-center space-y-2 pb-8">
          <div className="flex items-center gap-2 w-52">
            <Image src="/logo.png" alt="Logo" width={900} height={900} />
          </div>

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-2 gap-4">

              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-xs font-medium text-gray-300">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  placeholder="Lorem"
                  {...register("firstName")}
                  className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-xs font-medium text-gray-300">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  placeholder="Ipsum"
                  {...register("lastName")}
                  className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName.message}</p>
                )}
              </div>

            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-medium text-gray-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@example.com"
                {...register("email")}
                className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
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
                {...register("password")}
                className="border-[#FFFFFF] bg-[#161616] py-6 text-white placeholder:text-gray-600 focus-visible:ring-[#00A859]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] py-6 text-base font-semibold text-white hover:bg-[#008f4c]"
            >
              {isPending ? "Creating..." : "Sign Up"}
            </Button>

            {/* Footer */}
            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-[#00A859] hover:underline">
                Sign In
              </a>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
