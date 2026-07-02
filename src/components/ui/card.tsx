import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "interactive" | "glow" | "bronze";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "rounded-2xl border border-[#412D15] bg-[#1F150C] text-[#E1DCC9] shadow-sm",
      glass: "rounded-2xl glass-card text-[#E1DCC9] shadow-glass border border-[#412D15]/60",
      interactive: "rounded-2xl glass-card text-[#E1DCC9] hover:border-[#E1DCC9]/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 border border-[#412D15]",
      glow: "rounded-2xl border border-[#E1DCC9]/30 bg-[#1F150C]/90 text-[#E1DCC9] shadow-glow",
      bronze: "rounded-2xl border border-[#412D15] bg-gradient-to-br from-[#1F150C] to-[#000000] text-[#E1DCC9] shadow-accent",
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold font-heading text-[#E1DCC9] leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 text-[#E1DCC9]", className)} {...props} />
));
CardContent.displayName = "CardContent";
