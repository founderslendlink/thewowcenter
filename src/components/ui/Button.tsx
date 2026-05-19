"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "moss";
type ButtonSize    = "sm" | "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type AsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type AsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

type Props = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-bold rounded-full transition-all duration-150 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-amber select-none min-h-[44px] min-w-[44px]";

const variants: Record<ButtonVariant, string> = {
  primary:   "bg-[#FF4FA3] text-moss-deep hover:bg-amber hover:text-white active:scale-[0.98] shadow-sm shadow-[#FF4FA3]/20",
  secondary: "bg-moss-light text-moss-deep hover:bg-[#92DDA4] active:scale-[0.98] shadow-sm shadow-moss-light/25",
  ghost:     "bg-transparent text-moss border-2 border-moss hover:bg-moss-50 hover:text-moss-deep active:scale-[0.98]",
  moss:      "bg-moss text-white hover:bg-moss-deep active:scale-[0.98] shadow-sm",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...btnProps } = props as AsButton;
  return (
    <button className={classes} {...btnProps}>
      {children}
    </button>
  );
}
