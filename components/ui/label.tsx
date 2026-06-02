import * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-[12px] font-medium uppercase tracking-widest text-[hsl(var(--text-secondary))]",
        className,
      )}
      {...props}
    />
  );
}

export { Label };

