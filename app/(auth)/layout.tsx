export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1100px] items-center justify-center px-6 py-16">
        {children}
      </div>
    </div>
  );
}

