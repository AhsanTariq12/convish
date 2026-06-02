import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center p-10 text-center bg-[hsl(var(--surface))]",
        className,
      )}
    >
      {icon ? (
        <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--text-secondary))]">
          {icon}
        </div>
      ) : null}
      <div className="font-[var(--font-display)] text-[16px] font-semibold text-[hsl(var(--text-primary))]">
        {title}
      </div>
      {description ? (
        <div className="mt-1 max-w-md text-[13px] text-[hsl(var(--text-secondary))]">
          {description}
        </div>
      ) : null}
      {actionLabel && onAction ? (
        <div className="mt-5">
          <Button onClick={onAction}>{actionLabel}</Button>
        </div>
      ) : null}
    </Card>
  );
}

