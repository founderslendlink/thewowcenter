"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-moss-deep"
      style={{ minHeight: "clamp(500px, 72vh, 740px)" }}
      aria-labelledby="hero-heading"
    >
      {/* Hero photo */}
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-top"
        aria-hidden="true"
      />

      {/* Left-to-right gradient — darkens only the left 55% where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,25,35,0.94) 0%, rgba(7,25,35,0.82) 31%, rgba(7,25,35,0.42) 56%, rgba(7,25,35,0.08) 82%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(169, 232, 183, 0.22)" }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/4 bottom-8 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "rgba(255, 79, 163, 0.18)" }}
        aria-hidden="true"
      />

      {/* Text locked to bottom-left, max-w-sm keeps it clear of his face */}
      <div className="absolute inset-0">
        <div className="absolute bottom-14 left-6 max-w-[19rem] sm:bottom-16 sm:left-10 sm:max-w-[22rem] lg:left-16 lg:max-w-[24rem]">
            <p
              className="font-sans font-700 text-sm uppercase tracking-widest mb-4"
              style={{ color: "#A9E8B7" }}
            >
              Miami · Since 1972
            </p>

            <h1
              id="hero-heading"
              className="font-serif leading-tight mb-4"
              style={{ color: "#ffffff", fontStyle: "italic" }}
            >
              Every{" "}
              <em className="not-italic" style={{ color: "#FF8BC3" }}>wow</em>{" "}
              starts with welcome.
            </h1>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Empowering Miami adults with developmental disabilities since
              1972. 200 lives. 12 programs. One community.
            </p>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <ChevronDown
          className="text-white/50 motion-safe:animate-bounce"
          size={24}
          style={{ animationDuration: "2s" }}
        />
      </div>
    </section>
  );
}
