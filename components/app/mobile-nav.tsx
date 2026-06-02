import Link from "next/link";

import { MaterialIcon } from "@/components/app/material-icon";
import { primaryNavItems } from "@/components/app/nav-items";
import { cn } from "@/lib/utils";

export function MobileBottomNav({
  className,
}: {
  className?: string;
}) {
  const items = primaryNavItems.slice(0, 5);
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-dim)/0.85)] backdrop-blur md:hidden",
        className,
      )}
    >
      <div className="mx-auto grid max-w-[520px] grid-cols-5 px-4 py-2">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-[11px] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]"
          >
            <MaterialIcon name={i.icon} className="text-[20px]" />
            <span className="truncate">{i.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

