import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ActivityItem({
  icon,
  title,
  subtitle,
  timestamp,
  children,
  className,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  timestamp?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative flex gap-4", className)}>
      <div className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--text-secondary))]">
        {icon}
      </div>

      <Card className="flex-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate font-[var(--font-display)] text-[16px] font-semibold text-[hsl(var(--text-primary))]">
              {title}
            </div>
            {subtitle ? (
              <div className="mt-0.5 text-[13px] text-[hsl(var(--text-secondary))]">
                {subtitle}
              </div>
            ) : null}
          </div>

          {timestamp ? (
            <div className="shrink-0 font-mono text-[11px] text-[hsl(var(--text-muted))]">
              {timestamp}
            </div>
          ) : null}
        </div>

        {children ? (
          <div className="mt-3 text-[14px] leading-relaxed text-[hsl(var(--text-primary))]">
            {children}
          </div>
        ) : null}
      </Card>
    </div>
  );
}

