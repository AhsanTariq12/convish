import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--text-primary))]",
        secondary:
          "border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-[hsl(var(--text-secondary))]",
        outline:
          "border-[hsl(var(--border))] bg-transparent text-[hsl(var(--text-secondary))]",
        success:
          "border-[hsl(var(--success)/0.25)] bg-[hsl(var(--success)/0.12)] text-[hsl(var(--success))]",
        warning:
          "border-[hsl(var(--warning)/0.25)] bg-[hsl(var(--warning)/0.12)] text-[hsl(var(--warning))]",
        destructive:
          "border-[hsl(var(--destructive)/0.25)] bg-[hsl(var(--destructive)/0.12)] text-[hsl(var(--destructive))]",
        info:
          "border-[hsl(var(--info)/0.25)] bg-[hsl(var(--info)/0.12)] text-[hsl(var(--info))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

