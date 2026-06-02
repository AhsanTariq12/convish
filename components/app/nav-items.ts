export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const primaryNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Contacts", href: "/contacts", icon: "group" },
  { label: "Pipeline", href: "/pipeline", icon: "account_tree" },
  { label: "Reminders", href: "/reminders", icon: "notifications" },
  { label: "Analytics", href: "/analytics", icon: "analytics" },
  { label: "AI Assistant", href: "/ai", icon: "smart_toy" },
];

export const secondaryNavItems: NavItem[] = [
  { label: "Billing", href: "/billing", icon: "credit_card" },
  { label: "Settings", href: "/settings", icon: "settings" },
];

