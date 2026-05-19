"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 50,  suffix: "+", label: "Years of impact" },
  { value: 200, suffix: "+", label: "Members served daily" },
  { value: 12,  suffix: "",  label: "Programs offered" },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    // Respect prefers-reduced-motion: skip animation, show final value immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    let start: number | null = null;
    let rafId: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);
  return count;
}

function Stat({ value, suffix, label, active }: StatItem & { active: boolean }) {
  const count = useCountUp(value, 1800, active);
  const isFinished = active && count === value;
  return (
    <div className="text-center px-6 py-4">
      {/* aria-live only on the finished value so screen readers announce once, not on every animation frame */}
      <p
        className="font-serif text-4xl lg:text-5xl font-600 text-moss"
        aria-label={isFinished ? `${value}${suffix} ${label}` : undefined}
      >
        <span aria-hidden="true">{active ? count : 0}</span>
        <span aria-hidden="true">{suffix}</span>
      </p>
      <p className="font-sans text-sm text-ink-70 mt-1 uppercase tracking-wider" aria-hidden="true">{label}</p>
      {/* Accessible final-value announcement — only spoken when count reaches target */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {isFinished ? `${value}${suffix} ${label}` : ""}
      </span>
    </div>
  );
}

export function ImpactBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-cream border-y border-cream-dark"
      aria-label="WOW Center impact statistics"
    >
      <div className="container-xl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-cream-dark">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
