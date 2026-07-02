"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, Sparkles, X, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/navigation/Magnetic";
import { AuroraBackground } from "./AuroraBackground";
import { TypewriterTitle } from "./TypewriterTitle";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function HeroSection() {
  const { siteConfig } = usePortfolioStore();
  const [showResumeModal, setShowResumeModal] = useState(false);

  const developerTitles = [
    "Full Stack Developer",
    "Backend Developer",
    "Cybersecurity Enthusiast",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-[#000000]">
      <AuroraBackground />

      <div className="container mx-auto max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Name, Title, Intro, CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Availability Badge */}
          {siteConfig.availableForHire && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="glow" className="py-2 px-4 space-x-2.5 text-xs tracking-wider border-[#412D15] bg-[#1F150C]/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1DCC9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1DCC9]"></span>
                </span>
                <span className="font-mono text-[#E1DCC9]">AVAILABLE FOR ELITE ENGINEERING ROLES</span>
              </Badge>
            </motion.div>
          )}

          {/* Name & Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#E1DCC9] leading-tight"
            >
              Hi, I'm <span className="gradient-stripe">{siteConfig.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-mono text-[#a39b8b] flex items-center min-h-[40px]"
            >
              <span className="mr-2 text-[#412D15] font-bold">&gt;</span>
              <TypewriterTitle titles={developerTitles} />
            </motion.div>
          </div>

          {/* Short Introduction */}
          <div className="space-y-4 max-w-xl text-base sm:text-lg text-[#a39b8b] leading-relaxed font-sans">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a passionate Full Stack Developer with a strong interest in building modern, scalable, and high-performance web applications. My expertise lies in developing robust backend systems, designing RESTful APIs, managing databases, and creating responsive, user-friendly applications using modern web technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              With a strong foundation in software development, I enjoy solving complex problems, writing clean and maintainable code, and continuously improving my technical skills. Alongside web development, I have a keen interest in cybersecurity and enjoy expanding my knowledge of secure software practices and emerging technologies.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Magnetic strength={0.25}>
              <a href="#projects" className="w-full sm:w-auto block">
                <Button variant="default" size="xl" className="w-full font-bold tracking-wide shadow-glow">
                  <Sparkles className="w-5 h-5 mr-2 text-[#000000]" /> View Projects
                </Button>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <Button
                variant="stripe"
                size="xl"
                onClick={() => setShowResumeModal(true)}
                className="w-full sm:w-auto font-semibold font-mono border border-[#412D15]"
              >
                <FileText className="w-5 h-5 mr-2 text-[#E1DCC9]" /> Download Resume
              </Button>
            </Magnetic>
          </motion.div>

          {/* Social Links below CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center space-x-4 pt-2"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-[#a39b8b]/60 mr-2">Connect:</span>
            
            <Magnetic strength={0.25}>
              <a
                href="https://github.com/Sk-Akram-Ahmed"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button
                  variant="stripe"
                  size="xl"
                  className="w-14 p-0 border border-[#412D15]"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-[#E1DCC9]" />
                </Button>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="https://www.linkedin.com/in/sk-akram-ahmed-169a44298/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button
                  variant="stripe"
                  size="xl"
                  className="w-14 p-0 border border-[#412D15]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#E1DCC9]" />
                </Button>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Modern Developer Illustration + User Picture Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Framed Picture Card showcasing Sk Akram Ahmed */}
          <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl p-3 glass-card border border-[#412D15] shadow-glass group overflow-hidden">
            {/* Inner Glow Border & Image Container */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1F150C] to-[#000000] border border-[#412D15]/60 flex flex-col items-center justify-between p-4 relative overflow-hidden text-center">
              {/* Profile Image with subtle zoom hover */}
              <div className="absolute inset-0 z-0 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
                <img
                  src="/profile.jpg"
                  alt="Sk Akram Ahmed"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/20 to-transparent z-10" />
              </div>

              {/* Top Status Tag */}
              <div className="z-20 w-full flex justify-end">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-[#E1DCC9]/90 bg-[#1F150C]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#412D15]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>


            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-[#a39b8b]"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-[#E1DCC9]" />
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#000000]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel rounded-3xl p-8 max-w-md w-full border border-[#412D15] shadow-glass space-y-6 relative"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 p-2 rounded-xl glass-card text-[#a39b8b] hover:text-[#E1DCC9]"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-[#412D15]/40 text-[#E1DCC9] border border-[#412D15]">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#E1DCC9]">Official Resume CV</h3>
                <p className="text-sm text-[#a39b8b]">
                  Sk Akram Ahmed — Senior Full Stack Engineer & Distributed Architect.
                </p>
              </div>

              <div className="border border-[#412D15] rounded-2xl p-4 bg-[#1F150C] space-y-2 text-xs text-[#a39b8b] font-mono">
                <div>• 6+ Years Software Engineering Leadership</div>
                <div>• Next.js App Router & WebGL Specialist</div>
                <div>• Cloud SaaS & High-Throughput Microservices</div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="default" className="flex-1 font-semibold" onClick={() => alert("Downloading Sk_Akram_Ahmed_Resume.pdf...")}>
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
                <Button variant="stripe" onClick={() => setShowResumeModal(false)}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
