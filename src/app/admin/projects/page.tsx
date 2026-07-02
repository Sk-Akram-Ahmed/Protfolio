"use client";

import React, { useState } from "react";
import { Plus, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function AdminProjectsPage() {
  const { projects, addProject, deleteProject } = usePortfolioStore();
  const [showAddForm, setShowAddForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    addProject({
      id: `proj-${Date.now()}`,
      title,
      description,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      image: "/images/placeholder.png",
      demoUrl: demoUrl || undefined,
      githubUrl: githubUrl || undefined,
      featured: true,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
    setTags("");
    setDemoUrl("");
    setGithubUrl("");
    setShowAddForm(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects Manager</h1>
          <p className="text-muted-foreground">Add, manage, or remove showcase portfolio projects.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="w-4 h-4 mr-2" /> {showAddForm ? "Cancel" : "Add Project"}
        </Button>
      </div>

      {/* Form modal/box */}
      {showAddForm && (
        <Card className="border-primary/40 bg-accent/20">
          <CardHeader>
            <CardTitle>Create New Project Showcase</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Project Title</label>
                  <Input
                    placeholder="e.g. Real-Time AI Platform"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Tags (comma separated)</label>
                  <Input
                    placeholder="Next.js, React, TypeScript"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium">Description</label>
                <Textarea
                  placeholder="Summary of tech highlights and key architecture..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Demo URL</label>
                  <Input
                    placeholder="https://example.com"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">GitHub Repo URL</label>
                  <Input
                    placeholder="https://github.com/..."
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Publish Project to Portfolio
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Existing Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Card key={proj.id} className="flex flex-col justify-between">
            <CardHeader className="space-y-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-bold">{proj.title}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => deleteProject(proj.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{proj.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {proj.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
              {proj.demoUrl && (
                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs text-primary hover:underline"
                >
                  <span>{proj.demoUrl}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
