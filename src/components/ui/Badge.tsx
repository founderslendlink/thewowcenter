import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "moss" | "amber" | "plum" | "cream";
  className?: string;
}

const variants = {
  moss:  "bg-moss-50 text-moss border border-moss/25",
  amber: "bg-amber-50 text-amber border border-amber/25",
  plum:  "bg-amber-50 text-amber border border-[#FF4FA3]/30",
  cream: "bg-white text-ink-70 border border-moss-light/25",
};

export function Badge({ children, variant = "moss", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-sans font-700 text-xs uppercase tracking-widest px-3 py-1 rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
