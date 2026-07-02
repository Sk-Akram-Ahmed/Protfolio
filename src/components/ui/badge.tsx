import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glow" | "bronze" | "success" | "error";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-[#E1DCC9] text-[#000000] hover:bg-[#c5bba3] font-semibold",
    secondary: "bg-[#1F150C] text-[#E1DCC9] border border-[#412D15]",
    outline: "text-[#E1DCC9] border border-[#412D15] bg-[#000000]/40",
    glow: "border border-[#E1DCC9]/40 bg-[#E1DCC9]/10 text-[#E1DCC9] shadow-glow font-mono",
    bronze: "border border-[#412D15] bg-[#412D15]/20 text-[#E1DCC9] font-mono",
    success: "border border-emerald-700 bg-emerald-950/40 text-emerald-300 font-semibold",
    error: "border border-rose-700 bg-rose-950/40 text-rose-300 font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#E1DCC9]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
