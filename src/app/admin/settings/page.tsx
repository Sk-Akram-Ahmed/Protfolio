"use client";

import React, { useState } from "react";
import { Save, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function AdminSettingsPage() {
  const { siteConfig, setSiteConfig } = usePortfolioStore();

  const [name, setName] = useState(siteConfig.name);
  const [title, setTitle] = useState(siteConfig.title);
  const [bio, setBio] = useState(siteConfig.bio);
  const [email, setEmail] = useState(siteConfig.email);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSiteConfig({ name, title, bio, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">A-Z Content & Site Settings</h1>
        <p className="text-muted-foreground">Update hero copy, bio, contact email, and metadata globally.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Profile Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold">Full Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold">Contact Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold">Professional Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold">Bio / Summary</label>
              <Textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={4} required />
            </div>

            <Button type="submit" className="w-full sm:w-auto font-semibold">
              {saved ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Settings Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" /> Save Profile Settings
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
