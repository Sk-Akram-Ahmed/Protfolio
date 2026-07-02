"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTitleProps {
  titles: string[];
}

export function TypewriterTitle({ titles }: TypewriterTitleProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < fullText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 70);
    } else if (!isDeleting && currentText.length === fullText.length) {
      // Pause at end of title
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting back
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length - 1));
      }, 35);
    } else if (isDeleting && currentText.length === 0) {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  return (
    <span className="inline-flex items-center font-mono font-bold text-[#E1DCC9]">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-2.5 h-6 ml-1 bg-[#E1DCC9] rounded-sm shadow-glow"
      />
    </span>
  );
}
