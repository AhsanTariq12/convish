import { AuthCard } from "@/components/auth/auth-card";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-[440px]" />}>
      <AuthCard mode="login" />
    </Suspense>
  );
}

