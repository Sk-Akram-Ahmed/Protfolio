"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Award, FileText, ShieldCheck, Cloud, Languages, Trophy } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certificates = [
  {
    id: "cert-1",
    title: "24 Hour Hackathon Drill",
    description:
      "Certificate of Participation for 24 Hour Hackathon Drill organised by TechIn Community in collaboration with Connect Club (VMEG) and Eduknox Technologies.",
    image: "/certificates/hackdrill.jpeg",
    issuer: "TechIn Community",
    icon: Trophy,
  },
  {
    id: "cert-2",
    title: "AWS Cloud Foundations",
    description:
      "AWS Academy Graduate – Cloud Foundations Training Badge. Comprehensive training covering core AWS services, cloud architecture, security, and pricing models.",
    image: "/certificates/Aws cloud foundation.png",
    issuer: "AWS Academy",
    icon: Cloud,
  },
  {
    id: "cert-3",
    title: "AWS Data Engineering",
    description:
      "AWS Academy Graduate – Data Engineering Training Badge. Hands-on expertise with AWS data pipeline services, analytics, and data lake architectures.",
    image: "/certificates/Aws Data engineering.png",
    issuer: "AWS Academy",
    icon: Cloud,
  },
  {
    id: "cert-4",
    title: "Cyber Security",
    description:
      "Professional certification in Cyber Security covering threat analysis, network security, vulnerability assessment, and security best practices.",
    image: "/certificates/cybersecurity.png",
    issuer: "Certified Authority",
    icon: ShieldCheck,
  },
  {
    id: "cert-5",
    title: "Linguaskill Certificate",
    description:
      "Linguaskill language proficiency certification demonstrating advanced communication and comprehension skills for professional and academic contexts.",
    image: null,
    issuer: "Cambridge Assessment",
    icon: Languages,
  },
  {
    id: "cert-6",
    title: "MassMutual – Case Study on Phishing",
    description:
      "Certificate of Appreciation for successful completion of Case Study on Phishing, awarded by MassMutual India (AIDEA – AI, Data Engineering, Automation).",
    image: "/certificates/massmutual.jpeg",
    issuer: "MassMutual India",
    icon: ShieldCheck,
  },
];

export function CertificatesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;

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
          end: "+=800",
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

  const totalCerts = certificates.length;

  return (
    <div
      id="certificates"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#000000] border-y border-[#412D15]/60 flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="absolute top-[8vh] left-[10vw] z-20 space-y-2">
        <span className="font-mono text-xs text-[#a39b8b] uppercase tracking-widest block">
          CREDENTIALS &amp; ACHIEVEMENTS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#E1DCC9]">
          Certificates
        </h2>
      </div>

      {/* Horizontal Slider Wrapper */}
      <div
        ref={triggerRef}
        className="flex flex-row items-center gap-12 px-[10vw] mt-[8vh] w-max"
      >
        {certificates.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <div
              key={cert.id}
              className="w-[70vw] md:w-[50vw] max-w-[600px] h-[55vh] min-h-[380px] max-h-[500px] rounded-2xl border border-[#412D15] bg-[#1F150C]/90 overflow-hidden flex flex-col justify-between group shadow-neo shrink-0"
            >
              {/* Certificate Image / Placeholder (top 60%) */}
              <div className="h-[60%] w-full relative overflow-hidden bg-[#000000]">
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C] to-transparent opacity-60" />
                  </>
                ) : (
                  <>
                    {/* Stylish placeholder for PDF certificates */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F150C] via-[#412D15]/30 to-[#000000]" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E1DCC9_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
                      <div className="p-4 rounded-2xl bg-[#000000]/60 border border-[#412D15] text-[#E1DCC9] shadow-glow group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-10 h-10" />
                      </div>
                      <span className="text-xs font-mono tracking-wider uppercase text-[#a39b8b]/80">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F150C] to-transparent opacity-50" />
                  </>
                )}

                {/* Issuer badge overlay */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000]/70 border border-[#412D15] text-[10px] font-mono uppercase tracking-wider text-[#E1DCC9]">
                    <Award className="w-3 h-3" />
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Content (bottom 40%) */}
              <div className="h-[40%] p-6 flex flex-col justify-between bg-[#1F150C]/90">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#E1DCC9] group-hover:text-[#E1DCC9]/80 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#a39b8b] font-sans line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#412D15]/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#E1DCC9]">
                    <Award className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="font-mono text-xs text-[#a39b8b]/60">
                    0{idx + 1} / 0{totalCerts}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
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
