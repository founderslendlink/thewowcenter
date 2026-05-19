import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";

export function ProgramsGrid() {
  return (
    <section className="py-20 bg-white" aria-labelledby="programs-heading">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              What we do together
            </p>
            <h2 id="programs-heading" className="font-serif text-ink">
              Four programs.{" "}
              <em className="not-italic text-amber">One life,</em>
              <br />
              fully lived.
            </h2>
          </div>
          <Link
            href="/programs"
            className="font-sans font-700 text-sm text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm shrink-0"
          >
            View all programs →
          </Link>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          role="list"
        >
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              role="listitem"
              className={cn(
                "group flex flex-col rounded-2xl p-6 border border-moss-light/20 transition-all duration-200",
                "hover:shadow-md hover:-translate-y-0.5 hover:border-[#FF4FA3]/35",
                "focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                program.color
              )}
            >
              <span className="text-3xl mb-4" aria-hidden="true">
                {program.icon}
              </span>
              <h3 className="font-serif text-lg font-600 text-ink mb-2">
                {program.name}
              </h3>
              <p className="text-sm text-ink-70 leading-relaxed flex-1 mb-4">
                {program.tagline}
              </p>
              <span className="flex items-center gap-1 text-sm font-sans font-700 text-moss group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
