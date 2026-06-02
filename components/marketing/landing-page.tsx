"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useRef } from "react";
import {
  ArrowRight,
  Check,
  Download,
  FileText,
  Sparkles,
  Target,
  Timer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
  return { ref, inView };
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function Shell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1100px] px-6", className)}>
      {children}
    </div>
  );
}

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary-hover)/0.16)] blur-3xl" />
      <div className="absolute -bottom-64 right-[-10%] h-[520px] w-[520px] rounded-full bg-[hsl(var(--info)/0.12)] blur-3xl" />
      <div className="absolute -bottom-64 left-[-10%] h-[520px] w-[520px] rounded-full bg-[hsl(var(--success)/0.10)] blur-3xl" />
    </div>
  );
}

function ParallaxGlow({
  x,
  y,
}: {
  x: any;
  y: any;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary-hover)/0.16)] blur-3xl"
        style={{ x, y }}
      />
      <motion.div
        className="absolute -bottom-64 right-[-10%] h-[520px] w-[520px] rounded-full bg-[hsl(var(--info)/0.12)] blur-3xl"
        style={{
          x: useTransform(x, (v: number) => v * -0.7),
          y: useTransform(y, (v: number) => v * 0.6),
        }}
      />
      <motion.div
        className="absolute -bottom-64 left-[-10%] h-[520px] w-[520px] rounded-full bg-[hsl(var(--success)/0.10)] blur-3xl"
        style={{
          x: useTransform(x, (v: number) => v * 0.6),
          y: useTransform(y, (v: number) => v * -0.5),
        }}
      />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface-dim)/0.85)] backdrop-blur">
      <Shell className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary-hover))] text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-[var(--font-display)] text-[14px] font-semibold text-[hsl(var(--text-primary))]">
              Convish
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
              LinkedIn CRM
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-[hsl(var(--text-secondary))] md:flex">
          <a className="hover:text-[hsl(var(--text-primary))]" href="#features">
            Features
          </a>
          <a className="hover:text-[hsl(var(--text-primary))]" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-[hsl(var(--text-primary))]" href="#pricing">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button size="sm" asChild className="group">
            <Link href="/signup">
              Get started{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </Shell>
    </header>
  );
}

function Hero() {
  // Stronger + more "attached" cursor parallax (glow drift + spotlight)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 26, mass: 0.25 });
  const sy = useSpring(my, { stiffness: 260, damping: 26, mass: 0.25 });

  // Pixel drift for the background blobs
  const gx = useTransform(sx, [-0.5, 0.5], [-34, 34]);
  const gy = useTransform(sy, [-0.5, 0.5], [-26, 26]);

  // Spotlight follows cursor (in pixels inside section)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spx = useSpring(mouseX, { stiffness: 280, damping: 24, mass: 0.2 });
  const spy = useSpring(mouseY, { stiffness: 280, damping: 24, mass: 0.2 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(nx);
      my.set(ny);

      // Spotlight coordinates in px
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      // clamp slightly inside bounds
      const clampedX = Math.max(0, Math.min(rect.width, cx));
      const clampedY = Math.max(0, Math.min(rect.height, cy));
      mouseX.set(clampedX);
      mouseY.set(clampedY);
    },
    [mx, my, mouseX, mouseY],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
    mouseX.set(0);
    mouseY.set(0);
  }, [mx, my, mouseX, mouseY]);

  return (
    <section className="relative overflow-hidden" onMouseMove={onMove} onMouseLeave={onLeave}>
      <ParallaxGlow x={gx} y={gy} />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [spx, spy],
            ([x, y]) =>
              `radial-gradient(520px circle at ${x}px ${y}px, hsl(var(--primary-hover)/0.18), transparent 55%)`,
          ),
        }}
      />
      <Shell className="relative py-16 sm:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
          transition={{ staggerChildren: 0.06 }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.7)] px-3 py-1 text-[12px] text-[hsl(var(--text-secondary))]"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--success))]" />
            Built for relationship-first outreach
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-[820px] text-balance text-[40px] leading-[1.06] text-[hsl(var(--text-primary))] sm:text-[56px]"
          >
            The lightweight CRM that helps you{" "}
            <span className="text-[hsl(var(--primary))]">never lose</span> a
            LinkedIn relationship.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[720px] text-pretty text-[16px] leading-relaxed text-[hsl(var(--text-secondary))] sm:text-[18px]"
          >
            Convish is a fast, minimal outreach OS for professionals who do
            serious networking—track connections, run a clean pipeline, log the
            moments that matter, and get reminders that actually bring you back
            at the right time.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 group">
              <Link href="/signup">
                Start with your first contact{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 bg-[hsl(var(--surface)/0.6)] hover:bg-[hsl(var(--surface-elevated))]"
            >
              <a href="#workflow">
                See the workflow <Target className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 gap-3 text-[13px] text-[hsl(var(--text-secondary))] sm:grid-cols-3"
          >
            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.65)] p-4">
              <div className="flex items-center gap-2 text-[hsl(var(--text-primary))]">
                <Timer className="h-4 w-4 text-[hsl(var(--primary))]" />
                Fast by default
              </div>
              <div className="mt-1">No CRM bloat. Just what you need daily.</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.65)] p-4">
              <div className="flex items-center gap-2 text-[hsl(var(--text-primary))]">
                <Check className="h-4 w-4 text-[hsl(var(--success))]" />
                Built on follow-ups
              </div>
              <div className="mt-1">Due today, overdue, upcoming—always visible.</div>
            </div>
            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.65)] p-4">
              <div className="flex items-center gap-2 text-[hsl(var(--text-primary))]">
                <Sparkles className="h-4 w-4 text-[hsl(var(--info))]" />
                AI when it matters
              </div>
              <div className="mt-1">Contextual drafts, not spam automation.</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-14"
        >
          <PreviewPanel />
        </motion.div>
      </Shell>
    </section>
  );
}

function PreviewPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[linear-gradient(180deg,hsl(var(--surface)),hsl(var(--surface-elevated)))]">
      <div className="absolute -top-16 right-[-12%] h-56 w-56 rounded-full bg-[hsl(var(--primary-hover)/0.18)] blur-3xl" />
      <div className="absolute -bottom-20 left-[-10%] h-56 w-56 rounded-full bg-[hsl(var(--info)/0.12)] blur-3xl" />
      <div className="relative grid gap-0 p-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-[12px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
            What you see daily
          </div>
          <div className="mt-2 font-[var(--font-display)] text-[20px] font-semibold text-[hsl(var(--text-primary))]">
            A dashboard that answers: “What needs my attention today?”
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--text-secondary))]">
            Quick stats, follow-ups due today, pipeline health, and recent
            activity—so you always know what to do next.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.6)] px-2 py-1 text-[12px] text-[hsl(var(--text-secondary))]">
              Kanban pipeline
            </span>
            <span className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.6)] px-2 py-1 text-[12px] text-[hsl(var(--text-secondary))]">
              Reminders first
            </span>
            <span className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.6)] px-2 py-1 text-[12px] text-[hsl(var(--text-secondary))]">
              Activity timeline
            </span>
          </div>
        </div>

        <div className="mt-6 md:col-span-7 md:mt-0 md:pl-6">
          <div className="grid grid-cols-2 gap-3">
            <MiniMetric label="Total contacts" value="1,492" tone="success" />
            <MiniMetric label="Follow-ups due" value="12" tone="warning" />
            <MiniMetric label="Active conversations" value="84" tone="info" />
            <MiniMetric label="Conversion rate" value="24.8%" tone="success" />
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <MiniCard title="Follow-ups due today" lines={3} />
            <MiniCard title="Recent activity" lines={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "success" | "warning" | "info";
}) {
  const color =
    tone === "success"
      ? "hsl(var(--success))"
      : tone === "warning"
        ? "hsl(var(--warning))"
        : "hsl(var(--info))";

  return (
    <Card className="p-4">
      <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
        {label}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="font-[var(--font-display)] text-[24px] font-semibold text-[hsl(var(--text-primary))]">
          {value}
        </div>
        <div className="h-2 w-2 rounded-full" style={{ background: color }} />
      </div>
    </Card>
  );
}

function MiniCard({ title, lines }: { title: string; lines: number }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="font-[var(--font-display)] text-[14px] font-semibold text-[hsl(var(--text-primary))]">
          {title}
        </div>
        <div className="h-6 w-6 rounded-md bg-[hsl(var(--surface-elevated))]" />
      </div>
      <div className="mt-3 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="h-3 w-full rounded bg-[hsl(var(--surface-elevated))]"
            style={{ width: `${92 - i * 10}%` }}
          />
        ))}
      </div>
    </Card>
  );
}

function Features() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 sm:py-20">
      <Shell>
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: {} }}
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-[12px] uppercase tracking-widest text-[hsl(var(--text-secondary))]"
            >
              Built for clarity
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-[32px] leading-tight text-[hsl(var(--text-primary))] sm:text-[38px]"
            >
              Everything you need to manage relationships—nothing you don’t.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[720px] text-[15px] leading-relaxed text-[hsl(var(--text-secondary))]"
            >
              Convish stays lightweight on purpose. It’s not a sales platform.
              It’s an operational tool that helps you follow through.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              <FeatureCard
                icon={<Target className="h-4 w-4" />}
                title="Pipeline that stays honest"
                body="Move contacts through real conversation stages—request sent, connected, warm lead, client."
              />
              <FeatureCard
                icon={<Timer className="h-4 w-4" />}
                title="Reminders that pull you back"
                body="Due today, overdue, and upcoming—so you never forget the next touchpoint."
              />
              <FeatureCard
                icon={<Sparkles className="h-4 w-4" />}
                title="AI drafts with context"
                body="Generate warm follow-ups from your notes, headline, and relationship context—without sounding robotic."
              />
            </motion.div>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Card className="p-5 transition-colors hover:bg-[hsl(var(--surface-elevated))]">
      <div className="flex items-center gap-2 text-[hsl(var(--text-primary))]">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--primary))]">
          {icon}
        </div>
        <div className="font-[var(--font-display)] text-[16px] font-semibold">
          {title}
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--text-secondary))]">
        {body}
      </p>
      </Card>
    </motion.div>
  );
}

function Workflow() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="workflow" className="py-16 sm:py-20">
      <Shell>
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: {} }}
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.div variants={fadeUp} className="flex items-end justify-between gap-6">
              <div>
                <div className="text-[12px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
                  Workflow
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[28px] font-semibold text-[hsl(var(--text-primary))]">
                  From “connected” to “closed”—without losing context.
                </div>
              </div>
              <Button variant="outline" asChild className="hidden sm:inline-flex">
                <a href="#pricing">See pricing</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-3">
              <Step
                icon={<Download className="h-4 w-4" />}
                title="Add a contact"
                body="Manual entry in seconds. PDF import when you want depth."
              />
              <Step
                icon={<FileText className="h-4 w-4" />}
                title="Log what matters"
                body="Messages, calls, meetings—keep a clean timeline you can scan."
              />
              <Step
                icon={<Timer className="h-4 w-4" />}
                title="Set a follow-up"
                body="Convish keeps your next touchpoint visible and actionable."
              />
            </motion.div>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

function Step({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Card className="p-5">
      <div className="flex items-center gap-2 text-[hsl(var(--text-primary))]">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--info))]">
          {icon}
        </div>
        <div className="font-[var(--font-display)] text-[16px] font-semibold">
          {title}
        </div>
      </div>
      <div className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--text-secondary))]">
        {body}
      </div>
      </Card>
    </motion.div>
  );
}

function Pricing() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <Shell>
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: {} }}
            transition={{ staggerChildren: 0.07 }}
          >
            <motion.div variants={fadeUp} className="text-center">
              <div className="text-[12px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
                Pricing
              </div>
              <div className="mt-2 font-[var(--font-display)] text-[34px] font-semibold text-[hsl(var(--text-primary))]">
                Simple tiers. Clear value.
              </div>
              <p className="mx-auto mt-3 max-w-[720px] text-[15px] leading-relaxed text-[hsl(var(--text-secondary))]">
                Start free, upgrade when you want deeper automation, analytics,
                and AI assistance.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-2">
              <PriceCard
                title="Free"
                price="$0"
                subtitle="For getting organized."
                bullets={[
                  "Up to 50 contacts",
                  "Pipeline stages + tracking",
                  "Manual reminders",
                  "Basic activity logging",
                ]}
                cta="Get started"
                href="/signup"
                tone="default"
              />
              <PriceCard
                title="Pro"
                price="$9"
                subtitle="For serious outreach."
                bullets={[
                  "Unlimited contacts",
                  "AI message drafts",
                  "Email reminders",
                  "Full analytics + exports",
                  "PDF import (AI extraction)",
                ]}
                cta="Upgrade to Pro"
                href="/signup"
                tone="featured"
              />
            </motion.div>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

function PriceCard({
  title,
  price,
  subtitle,
  bullets,
  cta,
  href,
  tone,
}: {
  title: string;
  price: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  href: string;
  tone: "default" | "featured";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      <Card
        className={cn(
          "relative p-6 h-full flex flex-col",
          tone === "featured" &&
            "border-[hsl(var(--primary-hover)/0.45)] bg-[linear-gradient(180deg,hsl(var(--surface)),hsl(var(--surface-elevated)))]",
        )}
      >
      {tone === "featured" ? (
        <div className="absolute right-5 top-5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface)/0.6)] px-2.5 py-1 text-[11px] uppercase tracking-widest text-[hsl(var(--primary))]">
          Most popular
        </div>
      ) : null}
      <div className="font-[var(--font-display)] text-[18px] font-semibold text-[hsl(var(--text-primary))]">
        {title}
      </div>
      <div className="mt-2 flex items-end gap-2">
        <div className="font-[var(--font-display)] text-[40px] font-semibold leading-none text-[hsl(var(--text-primary))]">
          {price}
        </div>
        <div className="pb-1 text-[13px] text-[hsl(var(--text-secondary))]">
          / mo
        </div>
      </div>
      <div className="mt-2 text-[14px] text-[hsl(var(--text-secondary))]">
        {subtitle}
      </div>
      <div className="mt-5 space-y-2 text-[14px] text-[hsl(var(--text-secondary))]">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]">
              <Check className="h-3 w-3" />
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <Button
          asChild
          className={cn("w-full", tone === "featured" && "bg-[hsl(var(--primary-hover))]")}
        >
          <Link href={href} className="group">
            {cta}{" "}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
      </Card>
    </motion.div>
  );
}

function FinalCTA() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section className="py-16 sm:py-20">
      <Shell>
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[linear-gradient(180deg,hsl(var(--surface)),hsl(var(--surface-elevated)))] p-8"
          >
            <div className="absolute -top-20 right-[-10%] h-56 w-56 rounded-full bg-[hsl(var(--primary-hover)/0.18)] blur-3xl" />
            <div className="relative">
              <div className="font-[var(--font-display)] text-[28px] font-semibold text-[hsl(var(--text-primary))]">
                Turn connections into real opportunities.
              </div>
              <div className="mt-2 max-w-[740px] text-[15px] leading-relaxed text-[hsl(var(--text-secondary))]">
                Start with a simple pipeline, log your interactions, and let
                reminders do the heavy lifting. Convish keeps you consistent.
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11">
                  <Link href="/signup">
                    Get started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 bg-[hsl(var(--surface)/0.6)]"
                >
                  <a href="#features">Explore features</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-10">
      <Shell className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="text-[13px] text-[hsl(var(--text-secondary))]">
          <div className="font-[var(--font-display)] text-[14px] font-semibold text-[hsl(var(--text-primary))]">
            Convish
          </div>
          <div className="mt-1">Relationship-first CRM for LinkedIn outreach.</div>
        </div>
        <div className="flex items-center gap-5 text-[13px] text-[hsl(var(--text-secondary))]">
          <a className="hover:text-[hsl(var(--text-primary))]" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-[hsl(var(--text-primary))]" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-[hsl(var(--text-primary))]" href="#features">
            Features
          </a>
        </div>
      </Shell>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <TopBar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

