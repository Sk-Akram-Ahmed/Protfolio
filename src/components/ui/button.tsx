import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "linear" | "stripe" | "glass" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variants = {
      default: "bg-[#E1DCC9] text-[#000000] hover:bg-[#c5bba3] shadow-glow font-semibold",
      linear: "bg-gradient-to-r from-[#E1DCC9] via-[#c5bba3] to-[#a39b8b] text-[#000000] shadow-lg hover:brightness-105 font-bold",
      stripe: "bg-[#1F150C] text-[#E1DCC9] hover:bg-[#412D15] border border-[#412D15] shadow-linear",
      glass: "glass-panel text-[#E1DCC9] hover:bg-[#412D15]/40 border border-[#412D15] shadow-glass",
      outline: "border border-[#412D15] bg-transparent text-[#E1DCC9] hover:bg-[#1F150C]",
      ghost: "hover:bg-[#1F150C] text-[#E1DCC9]",
      danger: "bg-rose-950 text-rose-200 border border-rose-800 hover:bg-rose-900 shadow-lg",
      success: "bg-emerald-950 text-emerald-200 border border-emerald-800 hover:bg-emerald-900 shadow-lg",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-lg",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base rounded-2xl",
      xl: "h-14 px-8 text-lg font-semibold rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
