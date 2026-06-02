"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";

import { AppSidebar } from "@/components/app/sidebar";
import { MobileDrawer } from "@/components/app/mobile-drawer";
import { MobileBottomNav } from "@/components/app/mobile-nav";
import { TopNav } from "@/components/app/top-nav";

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopNav onOpenMenu={openMenu} />
          <main className="min-w-0 flex-1 px-[var(--space-16)] md:px-[var(--space-32)] py-[var(--space-24)] pb-24 md:pb-[var(--space-24)]">
            {children}
          </main>
        </div>
      </div>
      <MobileBottomNav />
      <MobileDrawer open={menuOpen} onClose={closeMenu} />
    </div>
  );
}

