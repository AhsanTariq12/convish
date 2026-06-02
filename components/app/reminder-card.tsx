import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ReminderCard({
  href,
  name,
  company,
  dueLabel,
  priority = "medium",
  action,
  avatar,
  className,
}: {
  href: string;
  name: string;
  company?: string;
  dueLabel: string;
  priority?: "low" | "medium" | "high" | "urgent";
  action?: ReactNode;
  avatar?: ReactNode;
  className?: string;
}) {
  const priorityVariant =
    priority === "urgent" || priority === "high"
      ? "destructive"
      : priority === "medium"
        ? "warning"
        : "secondary";

  return (
    <Card
      className={cn(
        "p-3 transition-colors hover:bg-[hsl(var(--surface-elevated))]",
        className,
      )}
    >
      <Link href={href} className="block">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="shrink-0">
              {avatar ?? <div className="size-10 rounded-full bg-[hsl(var(--muted))]" />}
            </div>
            <div className="min-w-0">
              <div className="truncate text-[13px] font-medium text-[hsl(var(--text-primary))]">
                {name}
              </div>
              <div className="truncate text-[11px] text-[hsl(var(--text-secondary))]">
                {company ?? ""}
              </div>
              <div className="mt-1 text-[11px] text-[hsl(var(--text-muted))]">
                {dueLabel}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Badge variant={priorityVariant as any}>{priority.toUpperCase()}</Badge>
            {action ? <div className="ml-1">{action}</div> : null}
          </div>
        </div>
      </Link>
    </Card>
  );
}

