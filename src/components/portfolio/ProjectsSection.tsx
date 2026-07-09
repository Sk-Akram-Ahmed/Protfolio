"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const projectsToDisplay = [
    {
      id: "proj-1",
      title: "Multimodal Fake Product Hype Detection System",
      description: "Developed an end-to-end multimodal machine learning pipeline combining TF-IDF, BERT embeddings, anomaly detection, and behavioral modeling to fuse text, temporal, and reviewer signals into an explainable Hype Score for detecting artificially inflated product ratings on Amazon and Yelp datasets. Designed a modular architecture featuring a 9-stage data pipeline, SHAP explainability, and Streamlit dashboard.",
      image: "/hype_detection.png",
      demoUrl: "https://github.com/Sk-Akram-Ahmed/Fake-product-hype-detection",
    },
    {
      id: "proj-2",
      title: "Wanderlust — Travel Listings Application",
      description: "Developed a full-stack travel listings application using Node.js, Express, MongoDB, and Mongoose with complete CRUD functionality and RESTful route architecture. Built server-side rendered views using EJS templating and implemented method-override middleware to support PUT and DELETE requests via HTML forms.",
      image: "/wanderlust.png",
      demoUrl: "https://github.com/Sk-Akram-Ahmed/wonderlust-backend",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;

    // Calculate how much we need to translate the container horizontally
    const getScrollAmount = () => {
      if (!triggerRef.current) return 0;
      return -(triggerRef.current.scrollWidth - window.innerWidth);
    };

    const pin = gsap.fromTo(
      triggerRef.current,
      { x: 0 },
      {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=500", // 500px of page height
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (barRef.current) {
              gsap.to(barRef.current, {
                scaleX: self.progress,
                duration: 0.1,
                ease: "none",
              });
            }
          },
        },
      }
    );

    return () => {
      pin.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div 
      id="projects" 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-[#000000] border-y border-[#412D15]/60 flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="absolute top-[8vh] left-[10vw] z-20 space-y-2">
        <span className="font-mono text-xs text-[#a39b8b] uppercase tracking-widest block">
          PORTFOLIO OVERVIEW
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#E1DCC9]">
          Projects
        </h2>
      </div>

      {/* Horizontal Slider Wrapper */}
      <div 
        ref={triggerRef} 
        className="flex flex-row items-center gap-12 px-[10vw] mt-[8vh] w-max"
      >
        {projectsToDisplay.map((project, idx) => (
          <div 
            key={project.id}
            className="w-[70vw] md:w-[50vw] max-w-[600px] h-[55vh] min-h-[380px] max-h-[500px] rounded-2xl border border-[#412D15] bg-[#1F150C]/90 overflow-hidden flex flex-col justify-between group shadow-neo shrink-0"
          >
            {/* Project screenshot (top 60%) */}
            <div className="h-[60%] w-full relative overflow-hidden bg-[#000000]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C] to-transparent opacity-60" />
            </div>

            {/* Content (bottom 40%) */}
            <div className="h-[40%] p-6 flex flex-col justify-between bg-[#1F150C]/90">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#E1DCC9] group-hover:text-[#E1DCC9]/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#a39b8b] font-sans line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#412D15]/60 flex items-center justify-between">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#E1DCC9] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </a>
                <span className="font-mono text-xs text-[#a39b8b]/60">
                  0{idx + 1} / 03
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Container at bottom */}
      <div className="absolute bottom-[8vh] left-[10vw] right-[10vw] h-[2px] bg-[#412D15]/40 rounded-full overflow-hidden">
        <div 
          ref={barRef}
          className="h-full bg-[#E1DCC9] w-full origin-left transform scale-x-0"
        />
      </div>
    </div>
  );
}

