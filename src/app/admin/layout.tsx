"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, Briefcase, Settings, Sun, Moon, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Projects", href: "/admin/projects", icon: FolderKanban },
    { label: "Experience", href: "/admin/experience", icon: Briefcase },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground font-sans">
      {/* Admin Glass Sidebar */}
      <aside className="w-64 glass-panel border-r border-border/60 p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-8">
          <div className="flex items-center space-x-2.5 font-bold text-lg tracking-tight">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-glow">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-heading font-extrabold tracking-wider">CMS STUDIO</span>
          </div>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-white/10 dark:hover:bg-white/5 hover:text-primary"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Dark / Light Mode Switch */}
        <div className="pt-6 border-t border-border/40 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">Appearance</span>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl glass-card hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </aside>

      {/* Admin Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 glass-panel border-b border-border/60 flex items-center justify-between px-8">
          <h2 className="text-base font-bold font-heading text-foreground">Content Control Center</h2>
          <Link href="/">
            <Button variant="glass" size="sm" className="font-mono text-xs">
              View Live Site &rarr;
            </Button>
          </Link>
        </header>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
