"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function AdminExperiencePage() {
  const { experiences, setExperiences } = usePortfolioStore();
  const [showAddForm, setShowAddForm] = useState(false);

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !company) return;

    const newExp = {
      id: `exp-${Date.now()}`,
      role,
      company,
      location,
      period,
      description: description.split("\n").filter(Boolean),
      technologies: technologies.split(",").map((t) => t.trim()).filter(Boolean),
    };

    setExperiences([newExp, ...experiences]);
    setRole("");
    setCompany("");
    setLocation("");
    setPeriod("");
    setDescription("");
    setTechnologies("");
    setShowAddForm(false);
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience Manager</h1>
          <p className="text-muted-foreground">Add, edit, or manage career trajectory entries.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="w-4 h-4 mr-2" /> {showAddForm ? "Cancel" : "Add Experience"}
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary/40 bg-accent/20">
          <CardHeader>
            <CardTitle>Add Work Experience Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddExperience} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Job Role / Title</label>
                  <Input placeholder="e.g. Lead Full Stack Engineer" value={role} onChange={(e) => setRole(e.target.value)} required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Company Name</label>
                  <Input placeholder="e.g. Apex Tech Solutions" value={company} onChange={(e) => setCompany(e.target.value)} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Location</label>
                  <Input placeholder="San Francisco, CA" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Time Period</label>
                  <Input placeholder="2023 - Present" value={period} onChange={(e) => setPeriod(e.target.value)} />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium">Key Highlights (One per line)</label>
                <Textarea placeholder="Architected core cloud infrastructure...&#10;Mentored junior engineering squad..." value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium">Technologies Used (comma separated)</label>
                <Input placeholder="React, Next.js, TypeScript, Docker" value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
              </div>

              <Button type="submit" className="w-full">
                Add Experience Entry
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card key={exp.id}>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-lg font-bold">{exp.role}</CardTitle>
                <p className="text-sm text-primary font-medium">{exp.company} • <span className="text-muted-foreground">{exp.period}</span></p>
              </div>
              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => handleDeleteExperience(exp.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                {exp.description.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
