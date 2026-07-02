"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ParallaxSection } from "./ParallaxSection";

export function ExperienceSection() {
  const experiencesToDisplay = [
    {
      id: "exp-1",
      role: "Mass mutual trainee",
      company: "Mass Mutual",
      location: "Hyderabad",
      period: "2025",
      description: [
        "Performed practical phishing investigations by analyzing email headers, authentication protocols (SPF, DKIM, DMARC), malicious URLs, encoded content, and threat intelligence data. Utilized CyberChef, VirusTotal, MXToolbox, WHOIS, and AbuseIPDB to identify Indicators of Compromise (IOCs), validate email authenticity, investigate phishing scenarios, and recommend security controls to enhance organizational email security.",
      ],
      technologies: ["CyberChef", "VirusTotal", "MXToolbox", "WHOIS Lookup", "AbuseIPDB"],
    },
  ];

  return (
    <ParallaxSection id="experience" className="py-32 px-6 sm:px-12 bg-[#000000]">
      <div className="container mx-auto max-w-4xl space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="py-1.5 px-4 font-mono text-xs">
            CAREER TRAJECTORY
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#E1DCC9]">
            Experience
          </h2>
          <p className="text-[#a39b8b] max-w-2xl mx-auto text-base sm:text-lg font-sans">
            Track record of security operations, threat analysis, and digital forensics.
          </p>
        </div>

        {/* Parallax Vertical Timeline */}
        <div className="relative border-l border-[#412D15] ml-4 md:ml-32 space-y-12">
          {experiencesToDisplay.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10 group">
              {/* Glowing Bullet */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 border-[#E1DCC9] bg-[#1F150C] flex items-center justify-center text-[#E1DCC9] shadow-glow group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <Card variant="glass" className="p-6 sm:p-8 space-y-5 border border-[#412D15] hover:border-[#E1DCC9]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#E1DCC9]">{exp.role}</h3>
                  <div className="flex items-center text-xs font-mono text-[#E1DCC9] space-x-1 bg-[#412D15]/40 px-3 py-1 rounded-full border border-[#412D15]">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-[#E1DCC9]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm font-medium">
                  <span className="text-[#E1DCC9] font-bold">{exp.company}</span>
                  <span className="text-[#a39b8b]">•</span>
                  <div className="flex items-center text-[#a39b8b] text-xs space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E1DCC9]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-[#a39b8b] leading-relaxed font-sans">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E1DCC9] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#412D15]/60">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] font-mono border-[#412D15] text-[#E1DCC9]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
