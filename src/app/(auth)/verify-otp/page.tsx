import React, { Suspense } from "react";
import VerifyAccount from "./_components/verify-otp";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyAccount />
    </Suspense>
  );
}
