"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showResumeModal, setShowResumeModal] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "skills", href: "#skills", id: "skills" },
    { name: "certificates", href: "#certificates", id: "certificates" },
    { name: "contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Active Section Observer
    const selector = navLinks.map((link) => `#${link.id}`).join(", ");
    const sections = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 px-4 sm:px-8" : "py-6 px-4 sm:px-8 bg-transparent"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-panel rounded-2xl px-6 py-3 shadow-glass border border-white/10"
              : ""
          }`}
        >
          {/* Logo on Left */}
          <Magnetic strength={0.2}>
            <Link href="/" className="flex items-center tracking-tight group">
              <span className="font-logo text-4xl font-normal tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
                {"</akram>"}
              </span>
            </Link>
          </Magnetic>

          {/* Navigation Links Center (Desktop) with Sliding Pill Indicator */}
          <nav className="hidden md:flex items-center space-x-1 glass-panel rounded-full px-4 py-1.5 border border-white/10 shadow-sm relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors z-10 ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary rounded-full z-[-1] shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Theme Switcher & Resume Button on Right (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <Magnetic strength={0.3}>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl glass-panel hover:bg-white/10 dark:hover:bg-white/5 transition-colors border border-white/10 text-foreground"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo-400" />
                  )}
                </button>
              </Magnetic>
            )}

            <Magnetic strength={0.3}>
              <Button
                variant="linear"
                size="sm"
                onClick={() => setShowResumeModal(true)}
                className="font-mono text-xs font-semibold shadow-glow"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5" /> Resume
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Morph Toggle */}
          <div className="flex items-center space-x-3 md:hidden z-50">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl glass-panel border border-white/10"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-foreground"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <motion.rect
                  animate={isOpen ? { rotate: 45, y: 6, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                  x="3"
                  y="6"
                  width="18"
                  height="2"
                  rx="1"
                />
                <motion.rect
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  x="3"
                  y="11"
                  width="18"
                  height="2"
                  rx="1"
                />
                <motion.rect
                  animate={isOpen ? { rotate: -45, y: -6, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.3 }}
                  x="3"
                  y="16"
                  width="18"
                  height="2"
                  rx="1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/80 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold font-heading text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-6"
              >
                <Button
                  variant="linear"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    setShowResumeModal(true);
                  }}
                  className="w-full font-mono font-semibold shadow-glow"
                >
                  <FileText className="w-4 h-4 mr-2" /> View Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Preview / Action Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-glass space-y-6 relative"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 p-2 rounded-xl glass-card text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading">Curriculum Vitae</h3>
                <p className="text-sm text-muted-foreground">
                  Sk Akram Ahmed — Senior Full Stack Engineer & Software Architect.
                </p>
              </div>

              <div className="border border-border/60 rounded-2xl p-4 bg-card/40 space-y-2 text-xs text-muted-foreground font-mono">
                <div>• 6+ Years Experience</div>
                <div>• Architecture & React Performance Specialist</div>
                <div>• Cloud Distributed Systems</div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="linear" className="flex-1 font-semibold" onClick={() => alert("Downloading Sk_Akram_Ahmed_Resume.pdf...")}>
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
                <Button variant="glass" onClick={() => setShowResumeModal(false)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
