import Link from "next/link";

import { MaterialIcon } from "@/components/app/material-icon";
import { primaryNavItems, secondaryNavItems } from "@/components/app/nav-items";

function NavLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  // Layout-only: no active-state routing logic yet.
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))] transition-colors"
    >
      <MaterialIcon name={icon} className="text-[20px]" />
      <span>{label}</span>
    </Link>
  );
}

export function AppSidebar() {
  return (
    <aside className="hidden md:flex w-[240px] shrink-0 border-r border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
      <div className="flex h-full w-full flex-col px-3 py-[var(--space-24)]">
        <div className="mb-[var(--space-24)] flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[hsl(var(--primary-hover))] text-white">
            <MaterialIcon name="dataset" className="text-[20px]" filled />
          </div>
          <div className="leading-tight">
            <div className="font-[var(--font-display)] text-[16px] font-semibold text-[hsl(var(--text-primary))]">
              Convish
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
              Elite CRM
            </div>
          </div>
        </div>

        <div className="mb-[var(--space-24)]">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[hsl(var(--primary-hover))] px-3 py-2 text-[12px] font-medium text-white transition-colors hover:brightness-110 active:scale-[0.99]">
            <MaterialIcon name="add" className="text-[18px]" />
            Add Contact
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}

          <div className="my-[var(--space-16)] border-t border-[hsl(var(--border))]" />

          {secondaryNavItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>

        <div className="mt-[var(--space-24)] rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] p-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[hsl(var(--muted))]" />
            <div className="min-w-0">
              <div className="truncate text-[13px] font-medium text-[hsl(var(--text-primary))]">
                You
              </div>
              <div className="truncate text-[11px] text-[hsl(var(--text-secondary))]">
                Free plan
              </div>
            </div>
            <span className="ml-auto rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2 py-1 text-[11px] text-[hsl(var(--text-secondary))]">
              Free
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

