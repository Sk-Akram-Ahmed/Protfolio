"use client";

import React from "react";
import { Layout, Server, Wrench, Code, Database, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParallaxSection } from "./ParallaxSection";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "EJS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Redis"],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Transformer", "LSTM", "BERT"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "MySQL Workbench",
      ],
    },
  ];

  return (
    <ParallaxSection id="skills" className="py-32 px-6 sm:px-12 bg-[#000000] border-y border-[#412D15]/60">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="py-1.5 px-4 font-mono text-xs">
            TECHNICAL MATRIX
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#E1DCC9]">
            Skills & <span className="gradient-stripe">Expertise</span>
          </h2>
          <p className="text-[#a39b8b] max-w-2xl mx-auto text-base sm:text-lg font-sans">
            Comprehensive framework proficiency, programming language depth, and toolbelt control.
          </p>
        </div>

        {/* Bento Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} variant="interactive" className="border border-[#412D15] bg-[#1F150C]/90 p-2">
                <CardHeader className="flex flex-row items-center space-x-3.5 pb-4">
                  <div className="p-3 rounded-2xl bg-[#000000] text-[#E1DCC9] border border-[#412D15] shadow-glow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#E1DCC9]">{category.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="px-3 py-1.5 text-xs font-mono border-[#412D15] text-[#E1DCC9] bg-[#000000]/40 hover:bg-[#E1DCC9]/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </ParallaxSection>
  );
}
