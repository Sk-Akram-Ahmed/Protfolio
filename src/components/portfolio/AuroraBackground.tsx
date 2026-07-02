"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AuroraBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#000000]">
      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(#E1DCC9 1px, transparent 1px), linear-gradient(to right, rgba(65, 45, 21, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(65, 45, 21, 0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Aurora Ambient Glow Orbs in #412D15 and #1F150C palette */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full bg-[#412D15]/40 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#1F150C]/90 blur-[160px]"
      />

      {/* Dynamic Mouse-Follow Glow Orb */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-[#E1DCC9]/5 blur-[100px] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Subtle Floating Dust Particles */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -300 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 rounded-full bg-[#E1DCC9]/40"
          />
        ))}
      </div>
    </div>
  );
}
