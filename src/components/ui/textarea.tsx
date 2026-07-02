import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "glass" | "bronze";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "border border-[#412D15] bg-[#1F150C]/60 text-[#E1DCC9] placeholder:text-[#a39b8b]",
      glass: "glass-panel border-[#412D15] text-[#E1DCC9] placeholder:text-[#a39b8b]",
      bronze: "bg-[#1F150C] border border-[#412D15] text-[#E1DCC9] placeholder:text-[#a39b8b] focus-visible:border-[#E1DCC9]",
    };

    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-xl px-4 py-3 text-sm ring-offset-background placeholder:text-[#a39b8b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1DCC9] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
