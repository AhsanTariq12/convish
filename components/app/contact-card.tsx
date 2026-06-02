import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ContactCardStage =
  | "request_sent"
  | "connected"
  | "conversation_started"
  | "warm_lead"
  | "follow_up_needed"
  | "client"
  | "closed";

const stageVar: Record<ContactCardStage, string> = {
  request_sent: "var(--stage-request-sent)",
  connected: "var(--stage-connected)",
  conversation_started: "var(--stage-conversation-started)",
  warm_lead: "var(--stage-warm-lead)",
  follow_up_needed: "var(--stage-follow-up-needed)",
  client: "var(--stage-client)",
  closed: "var(--stage-closed)",
};

export function ContactCard({
  href,
  name,
  company,
  subtitle,
  stage,
  lastInteraction,
  followUp,
  avatar,
  className,
}: {
  href: string;
  name: string;
  company?: string;
  subtitle?: string;
  stage?: ContactCardStage;
  lastInteraction?: string;
  followUp?: { label: string; tone?: "upcoming" | "overdue" };
  avatar?: ReactNode;
  className?: string;
}) {
  const stageColor = stage ? stageVar[stage] : undefined;

  return (
    <Card
      className={cn(
        "p-3 transition-all hover:bg-[hsl(var(--surface-elevated))] hover:border-[hsl(var(--border-strong,var(--border)))]",
        className,
      )}
    >
      <Link href={href} className="block">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">{avatar ?? <div className="size-8 rounded-full bg-[hsl(var(--muted))]" />}</div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-[13px] font-medium text-[hsl(var(--text-primary))]">
                  {name}
                </div>
                <div className="mt-0.5 truncate text-[11px] text-[hsl(var(--text-secondary))]">
                  {company ?? subtitle ?? ""}
                </div>
              </div>

              {stage ? (
                <Badge
                  className="shrink-0"
                  style={{
                    borderColor: `hsl(${stageColor} / 0.25)`,
                    background: `hsl(${stageColor} / 0.12)`,
                    color: `hsl(${stageColor})`,
                  }}
                >
                  {stage.replaceAll("_", " ")}
                </Badge>
              ) : null}
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="min-w-0 truncate text-[11px] text-[hsl(var(--text-muted))]">
                {lastInteraction ?? ""}
              </div>

              {followUp ? (
                <Badge
                  variant={followUp.tone === "overdue" ? "destructive" : "warning"}
                  className="shrink-0"
                >
                  {followUp.label}
                </Badge>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

