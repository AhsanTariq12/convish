import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  icon,
  trend,
  className,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  trend?: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "transition-colors hover:bg-[hsl(var(--surface-elevated))] hover:border-[hsl(var(--border))]",
        className,
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[12px] font-medium uppercase tracking-widest text-[hsl(var(--text-secondary))]">
              {label}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="font-[var(--font-display)] text-[28px] font-semibold leading-none text-[hsl(var(--text-primary))]">
                {value}
              </div>
              {trend ? (
                <div className="text-[12px] text-[hsl(var(--text-secondary))]">
                  {trend}
                </div>
              ) : null}
            </div>
          </div>
          {icon ? (
            <div className="text-[hsl(var(--text-muted))]">{icon}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

