"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type Mode = "login" | "signup";

export function AuthCard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const search = useSearchParams();

  const nextPath = useMemo(() => search.get("next") || "/dashboard", [search]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onGoogle() {
    setError(null);
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback`;
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (oauthError) setError(oauthError.message);
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      if (mode === "login") {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) {
          setError(signInError.message);
          return;
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (signUpError) {
          setError(signUpError.message);
          return;
        }
      }

      router.push(nextPath);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  const title = mode === "login" ? "Welcome back" : "Create your account";
  const subtitle =
    mode === "login"
      ? "Sign in to your Convish workspace."
      : "Start organizing your outreach in minutes.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-[440px]"
    >
      <Card className="p-6">
        <div className="font-[var(--font-display)] text-[22px] font-semibold text-[hsl(var(--text-primary))]">
          {title}
        </div>
        <div className="mt-1 text-[14px] text-[hsl(var(--text-secondary))]">
          {subtitle}
        </div>

        <div className="mt-6 grid gap-3">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="button"
              variant="outline"
              className="h-10 bg-[hsl(var(--surface)/0.6)]"
              onClick={onGoogle}
              disabled={loading}
            >
              <GoogleMark />
              Continue with Google
            </Button>
          </motion.div>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[hsl(var(--border))]" />
          <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--text-muted))]">
            or
          </div>
          <div className="h-px flex-1 bg-[hsl(var(--border))]" />
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error ? (
            <div className="rounded-lg border border-[hsl(var(--destructive)/0.25)] bg-[hsl(var(--destructive)/0.08)] px-3 py-2 text-[13px] text-[hsl(var(--destructive))]">
              {error}
            </div>
          ) : null}

          <Button className="h-10" disabled={loading}>
            {mode === "login" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <div className="mt-5 text-[13px] text-[hsl(var(--text-secondary))]">
          {mode === "login" ? (
            <>
              New here?{" "}
              <Link href="/signup" className="text-[hsl(var(--primary))] hover:underline">
                Create an account
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-[hsl(var(--primary))] hover:underline">
                Sign in
              </Link>
            </>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

function GoogleMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className="mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.5 20H24v8.5h11.8C34.7 33.6 30 36.7 24 36.7c-7 0-12.7-5.7-12.7-12.7S17 11.3 24 11.3c3.4 0 6.5 1.3 8.8 3.5l6-6C35.2 5.3 29.9 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c11.5 0 20.5-8 20.5-21 0-1.3-.1-2.3-.3-4z"
        fill="#FFC107"
      />
      <path
        d="M6.3 14.7l7 5.1C15 16.2 19.1 13.3 24 13.3c3.4 0 6.5 1.3 8.8 3.5l6-6C35.2 5.3 29.9 3 24 3 15.8 3 8.7 7.7 6.3 14.7z"
        fill="#FF3D00"
      />
      <path
        d="M24 45c5.7 0 10.9-2.2 14.8-5.8l-6.8-5.6c-2 1.4-4.6 2.2-8 2.2-6 0-10.7-3.8-12.4-9.1l-7.1 5.4C6.8 39.2 14.8 45 24 45z"
        fill="#4CAF50"
      />
      <path
        d="M44.5 20H24v8.5h11.8c-0.8 2.7-2.6 5-5.1 6.6l6.8 5.6C41.4 37.1 44.5 31.9 44.5 24c0-1.3-.1-2.3-.3-4z"
        fill="#1976D2"
      />
    </svg>
  );
}

