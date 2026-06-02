import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PipelineColumn({
  title,
  count,
  tone = "default",
  actions,
  children,
  className,
}: {
  title: string;
  count?: number;
  tone?:
    | "default"
    | "request_sent"
    | "connected"
    | "conversation_started"
    | "warm_lead"
    | "follow_up_needed"
    | "client"
    | "closed";
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const varName = `--stage-${tone.replaceAll("_", "-")}`;
  const headerBorder =
    tone === "default" ? "transparent" : `hsl(var(${varName}))`;

  return (
    <section
      className={cn(
        "flex w-[320px] shrink-0 flex-col overflow-hidden rounded-[var(--radius)] border border-[hsl(var(--border))] bg-[hsl(var(--surface-dim))]",
        className,
      )}
    >
      <div
        className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-3"
        style={{ borderTop: `2px solid ${headerBorder}` }}
      >
        <div className="flex items-center gap-2">
          <div className="text-[12px] font-medium uppercase tracking-widest text-[hsl(var(--text-secondary))]">
            {title}
          </div>
          {typeof count === "number" ? (
            <Badge
              className="font-mono"
              style={
                tone === "default"
                  ? undefined
                  : {
                      borderColor: `hsl(var(${varName}) / 0.25)`,
                      background: `hsl(var(${varName}) / 0.12)`,
                      color: `hsl(var(${varName}))`,
                    }
              }
            >
              {count}
            </Badge>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2">
        {children}
      </div>
    </section>
  );
}

