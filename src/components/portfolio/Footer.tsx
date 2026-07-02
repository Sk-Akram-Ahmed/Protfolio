"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function Footer() {
  const { siteConfig } = usePortfolioStore();

  return (
    <footer className="border-t border-[#412D15] bg-[#000000] text-[#E1DCC9] pt-16 pb-12 px-6 sm:px-12 relative">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#412D15]/60">
          {/* Brand & Tagline (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5 font-bold text-xl tracking-tight">
              <div className="p-2 rounded-xl bg-[#1F150C] text-[#E1DCC9] border border-[#412D15] shadow-glow">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold tracking-wider">
                AKRAM<span className="text-[#E1DCC9] opacity-70">.DEV</span>
              </span>
            </div>
            <p className="text-xs text-[#a39b8b] max-w-sm leading-relaxed font-sans">
              Designing resilient full-stack architectures, high-performance distributed systems, and modern digital experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-[#a39b8b]">
              <a href={`mailto:${siteConfig.email}`} className="p-2.5 rounded-xl bg-[#1F150C] border border-[#412D15] hover:text-[#E1DCC9] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-[#E1DCC9] font-bold uppercase tracking-wider text-sm font-heading">Navigation</div>
            <ul className="space-y-2 text-[#a39b8b]">
              <li>
                <a href="#projects" className="hover:text-[#E1DCC9] transition-colors flex items-center">
                  Case Studies <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#E1DCC9] transition-colors flex items-center">
                  Career History <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#E1DCC9] transition-colors flex items-center">
                  Tech Matrix <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#E1DCC9] transition-colors flex items-center">
                  CMS Studio <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Dispatch (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[#E1DCC9] font-bold uppercase tracking-wider text-sm font-heading">Engineering Dispatch</div>
            <p className="text-xs text-[#a39b8b] font-sans">Subscribe for architectural articles and software engineering case studies.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="flex gap-2">
              <Input variant="bronze" type="email" placeholder="dev@example.com" className="text-xs" required />
              <Button type="submit" variant="default" size="sm" className="font-mono text-xs font-bold shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a39b8b]">
          <div>© {new Date().getFullYear()} Sk Akram Ahmed. All Architecture Rights Reserved.</div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
