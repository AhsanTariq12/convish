"use client";

import Link from "next/link";

import { MaterialIcon } from "@/components/app/material-icon";
import { primaryNavItems, secondaryNavItems } from "@/components/app/nav-items";
import { LogoutButton } from "@/components/auth/logout-button";
import { cn } from "@/lib/utils";

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-[280px] bg-[hsl(var(--surface))] border-r border-[hsl(var(--border))] transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3" onClick={onClose}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary-hover))] text-white">
                <MaterialIcon name="dataset" className="text-[20px]" filled />
              </div>
              <div className="leading-tight">
                <div className="font-[var(--font-display)] text-[14px] font-semibold text-[hsl(var(--text-primary))]">
                  Convish
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[hsl(var(--text-secondary))]">
                  Elite CRM
                </div>
              </div>
            </Link>
            <button
              className="rounded-lg p-2 text-[hsl(var(--text-muted))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))]"
              onClick={onClose}
              aria-label="Close menu"
            >
              <MaterialIcon name="close" className="text-[20px]" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1">
            {primaryNavItems.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))]"
              >
                <MaterialIcon name={i.icon} className="text-[20px]" />
                <span>{i.label}</span>
              </Link>
            ))}

            <div className="my-4 border-t border-[hsl(var(--border))]" />

            {secondaryNavItems.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-[hsl(var(--text-secondary))] hover:bg-[hsl(var(--surface-elevated))] hover:text-[hsl(var(--text-primary))]"
              >
                <MaterialIcon name={i.icon} className="text-[20px]" />
                <span>{i.label}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[hsl(var(--border))]">
            <div onClick={onClose}>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

