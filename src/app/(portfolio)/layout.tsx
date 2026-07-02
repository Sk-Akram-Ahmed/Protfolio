import React from "react";
import { ScrollProgressBar } from "@/components/navigation/ScrollProgressBar";
import { ScrollToTop } from "@/components/navigation/ScrollToTop";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <ScrollProgressBar />
      <main className="flex-1">{children}</main>
      <ScrollToTop />
    </div>
  );
}
