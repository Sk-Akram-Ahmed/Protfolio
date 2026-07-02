"use client";

import React from "react";
import { ExternalLink, Github, Sparkles, Image as ImageIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  colSpan?: string;
  isFeatured?: boolean;
}

export function ProjectCard({ project, colSpan = "col-span-1", isFeatured = false }: ProjectCardProps) {
  return (
    <Card
      variant="interactive"
      className={`flex flex-col justify-between overflow-hidden group border border-[#412D15] bg-[#1F150C]/90 ${colSpan}`}
    >
      <div className="space-y-4">
        {/* Replaceable Media Placeholder with sleek glass overlay & glow */}
        <div
          className={`w-full ${
            isFeatured ? "h-64 sm:h-80" : "h-48"
          } bg-gradient-to-br from-[#1F150C] via-[#412D15]/40 to-[#000000] flex items-center justify-center relative overflow-hidden`}
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#E1DCC9_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Media Icon & Placeholder text */}
          <div className="flex flex-col items-center justify-center space-y-2 text-[#a39b8b] z-10 group-hover:scale-105 transition-transform duration-500">
            <div className="p-3 rounded-2xl bg-[#000000]/60 border border-[#412D15] text-[#E1DCC9] shadow-glow">
              <ImageIcon className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono tracking-wider uppercase opacity-80">Media Preview / Mockup</span>
          </div>

          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            {project.featured && (
              <Badge variant="glow" className="text-[10px] bg-[#000000]/80">
                FEATURED WORK
              </Badge>
            )}
          </div>
        </div>

        <CardHeader className="space-y-3 p-6 pb-2">
          <CardTitle className="text-xl sm:text-2xl font-extrabold font-heading text-[#E1DCC9] group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-sm text-[#a39b8b] line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>
        </CardHeader>
      </div>

      <CardContent className="p-6 pt-4 space-y-5">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[11px] font-mono border-[#412D15] text-[#E1DCC9]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Live Action Links */}
        <div className="flex items-center space-x-5 pt-3 text-xs font-medium text-[#a39b8b] border-t border-[#412D15]/60">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-[#E1DCC9] hover:underline transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#E1DCC9]" />
              <span>Live Deployment</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#E1DCC9] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
