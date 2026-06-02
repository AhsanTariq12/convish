import { AuthCard } from "@/components/auth/auth-card";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-[440px]" />}>
      <AuthCard mode="signup" />
    </Suspense>
  );
}

