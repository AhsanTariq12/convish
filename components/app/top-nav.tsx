import { MaterialIcon } from "@/components/app/material-icon";
import Link from "next/link";
import { LogoutButton } from "@/components/auth/logout-button";

export function TopNav({ onOpenMenu }: { onOpenMenu?: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--surface-dim))]">
      <div className="flex h-[64px] items-center gap-4 px-[var(--space-16)] md:px-[var(--space-32)]">
        <button
          className="md:hidden rounded-lg p-2 text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))] transition-colors"
          onClick={onOpenMenu}
          aria-label="Open menu"
          type="button"
        >
          <MaterialIcon name="menu" className="text-[22px]" />
        </button>
        <Link
          href="/"
          className="hidden md:flex items-center gap-2 rounded-lg px-2 py-1 text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--surface-elevated))] transition-colors"
          aria-label="Go to homepage"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary-hover))] text-white">
            <MaterialIcon name="dataset" className="text-[20px]" filled />
          </div>
          <span className="font-[var(--font-display)] text-[14px] font-semibold">
            Convish
          </span>
        </Link>
        <div className="flex-1">
          <div className="relative max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[hsl(var(--text-muted))]">
              <MaterialIcon name="search" className="text-[20px]" />
            </div>
            <input
              placeholder="Search contacts, companies..."
              className="h-10 w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] pl-10 pr-16 text-[14px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] outline-none focus:border-[hsl(var(--ring))] focus:ring-1 focus:ring-[hsl(var(--ring))]"
            />
            <div className="absolute inset-y-0 right-3 hidden items-center gap-1 text-[hsl(var(--text-muted))] opacity-70 sm:flex">
              <kbd className="rounded border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-1.5 py-0.5 font-mono text-[11px]">
                ⌘
              </kbd>
              <kbd className="rounded border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] px-1.5 py-0.5 font-mono text-[11px]">
                K
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LogoutButton />
          </div>
          <button className="relative rounded-lg p-2 text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))] transition-colors">
            <MaterialIcon name="notifications" className="text-[20px]" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[hsl(var(--destructive))]" />
          </button>
          <button className="rounded-lg p-2 text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))] transition-colors">
            <MaterialIcon name="history" className="text-[20px]" />
          </button>
          <div className="mx-1 h-6 w-px bg-[hsl(var(--border))]" />
          <button className="h-9 w-9 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))]" />
        </div>
      </div>
    </header>
  );
}

