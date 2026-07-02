"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ParallaxSection } from "./ParallaxSection";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ContactSection() {
  const { siteConfig } = usePortfolioStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:shaikakram4684@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <ParallaxSection id="contact" className="py-32 px-6 sm:px-12 bg-[#000000] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="glow" className="py-1.5 px-4 font-mono text-xs">
            INITIATE COLLABORATION
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-[#E1DCC9]">
            Let's Build Something <span className="gradient-stripe">Architectural</span>
          </h2>
          <p className="text-[#a39b8b] max-w-2xl mx-auto text-base sm:text-lg font-sans">
            Have a system engineering role, contract project, or architectural inquiry? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="glass" className="p-6 border border-[#412D15] space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#412D15]/40 text-[#E1DCC9] border border-[#412D15]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#a39b8b] uppercase">Direct Email</div>
                  <a href={`mailto:shaikakram4684@gmail.com`} className="text-sm font-bold text-[#E1DCC9] hover:underline">
                    shaikakram4684@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6 border border-[#412D15] space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#412D15]/40 text-[#E1DCC9] border border-[#412D15]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#a39b8b] uppercase">Phone Number</div>
                  <a href="tel:6303548192" className="text-sm font-bold text-[#E1DCC9] hover:underline">
                    +91  6303548192
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6 border border-[#412D15] space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#412D15]/40 text-[#E1DCC9] border border-[#412D15]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#a39b8b] uppercase">Location Base</div>
                  <div className="text-sm font-bold text-[#E1DCC9]">Hyderabad</div>
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6 border border-[#412D15] space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#412D15]/40 text-[#E1DCC9] border border-[#412D15]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#a39b8b] uppercase">Response Time</div>
                  <div className="text-sm font-bold text-[#E1DCC9]">Within 24 Hours</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 shadow-glass border border-[#412D15]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold font-heading text-[#E1DCC9]">Transmission Received</h3>
                <p className="text-[#a39b8b] text-sm font-sans">
                  Thank you for reaching out. I will review your message and reply promptly.
                </p>
                <Button variant="stripe" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }} className="mt-4">
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#a39b8b] font-mono">
                      Your Name
                    </label>
                    <Input
                      variant="bronze"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#a39b8b] font-mono">
                      Email Address
                    </label>
                    <Input
                      variant="bronze"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#a39b8b] font-mono">
                    Project Requirements / Inquiry
                  </label>
                  <Textarea
                    variant="bronze"
                    placeholder="Describe your architecture goals, timeline, or position details..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" variant="default" size="xl" className="w-full font-bold tracking-wide shadow-glow" disabled={loading}>
                  {loading ? "Sending..." : (
                    <>
                      <Send className="w-5 h-5 mr-2 text-[#000000]" /> Send Mail
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
