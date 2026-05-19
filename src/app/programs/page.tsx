import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/programs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs | Developmental Disability Day Programs Miami",
  description:
    "12 programs including art, music therapy, culinary, WOW Workforce, Special Olympics, and more. Miami adults with developmental disabilities, ages 21+.",
};

export default function ProgramsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://wowcentermiami.org" },
              { "@type": "ListItem", position: 2, name: "Programs", item: "https://wowcentermiami.org/programs" },
            ],
          }),
        }}
      />

      <section className="bg-cream py-20" aria-labelledby="programs-hub-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-10 items-center">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Programs
              </p>
              <h1 id="programs-hub-heading" className="font-serif text-ink max-w-2xl mb-6">
                Developmental disability programs in Miami.
              </h1>
              <p className="text-ink-70 text-xl max-w-2xl leading-relaxed">
                Every WOW member participates in a personalized schedule drawing from
                our 12 programs. No two days are the same, and that&rsquo;s the point.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" aria-label="WOW programs in action">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src="/wow-photos/culinary-dessert.png"
                  alt="A WOW member smiling while preparing dessert in a kitchen."
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 230px"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src="/wow-photos/fitness-coaching.png"
                  alt="A WOW member receiving supportive fitness coaching in a gym."
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 230px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="All programs">
        <div className="container-xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link
                  href={`/programs/${program.slug}`}
                  className={cn(
                    "group flex flex-col rounded-2xl p-7 border border-cream-dark h-full",
                    "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 hover:border-moss/20",
                    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                    program.color
                  )}
                >
                  <span className="text-4xl mb-5" aria-hidden="true">{program.icon}</span>
                  <h2 className="font-serif text-xl font-600 text-ink mb-2">{program.name}</h2>
                  <p className="text-sm font-sans font-600 text-amber mb-3 uppercase tracking-wide">
                    {program.tagline}
                  </p>
                  <p className="text-sm text-ink-70 leading-relaxed flex-1 mb-5">
                    {program.description}
                  </p>
                  <span className="flex items-center gap-1.5 text-sm font-sans font-700 text-moss group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-moss-deep text-white" aria-labelledby="programs-admissions-cta">
        <div className="container-xl text-center space-y-6 max-w-2xl mx-auto">
          <h2 id="programs-admissions-cta" className="font-serif text-white">
            Ready to see a program in person?
          </h2>
          <p className="text-white/75">
            Schedule a tour and we&rsquo;ll show you exactly what a day at WOW
            looks like for your family member.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions/tour"
              className="inline-flex items-center gap-2 bg-amber text-white font-sans font-700 px-7 py-3 rounded-full hover:bg-amber-hover transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-white"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 border-2 border-white/45 text-white font-sans font-700 px-7 py-3 rounded-full hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-white"
            >
              Learn About Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
