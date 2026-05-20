import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, UsersRound } from "lucide-react";
import { programs, getProgramBySlug } from "@/lib/programs";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/links";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.name} | WOW Center Miami`,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== slug).slice(0, 3);

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
              { "@type": "ListItem", position: 3, name: program.name, item: `https://wowcentermiami.org/programs/${program.slug}` },
            ],
          }),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-cream-dark">
        <div className="container-xl py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-sans text-ink-70">
            <li>
              <Link href="/" className="hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/programs" className="hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                Programs
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink font-600">{program.name}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-moss-deep text-white py-20" aria-labelledby="program-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                {program.tagline}
              </p>
              <h1 id="program-heading" className="font-serif mb-6" style={{ color: "#ffffff" }}>
                {program.name}
              </h1>
              <p className="text-white/82 text-xl leading-relaxed max-w-2xl">
                {program.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={LINKS.admissions} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                  Start Admissions Inquiry
                </Button>
                <Button href="/admissions/tour" variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white">
                  Schedule a Tour
                </Button>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/12 text-5xl" aria-hidden="true">
                {program.icon}
              </div>
              <dl className="space-y-5">
                <div>
                  <dt className="font-sans text-xs font-700 uppercase tracking-widest text-white/55">Best fit</dt>
                  <dd className="mt-1 text-white">{program.whoFor}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-white/12 pt-5">
                  <div>
                    <dt className="flex items-center gap-2 font-sans text-xs font-700 uppercase tracking-widest text-white/55">
                      <UsersRound size={14} aria-hidden="true" />
                      Format
                    </dt>
                    <dd className="mt-1 text-white">Small-group support</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 font-sans text-xs font-700 uppercase tracking-widest text-white/55">
                      <Clock size={14} aria-hidden="true" />
                      Schedule
                    </dt>
                    <dd className="mt-1 text-white">Part of each member plan</dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-18 bg-white" aria-labelledby="outcomes-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Program outcomes
              </p>
              <h2 id="outcomes-heading" className="font-serif text-3xl text-ink mb-4">
                What members build here
              </h2>
              <p className="text-ink-70">
                Each program is designed around practical progress, confidence,
                connection, and meaningful participation.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
              {program.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-xl border border-cream-dark bg-cream p-5"
                >
                  <CheckCircle size={20} className="text-amber mb-3" aria-hidden="true" />
                  <p className="text-ink-70 leading-relaxed">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {program.vimeoId && (
        <section className="relative overflow-hidden py-20 bg-moss-deep text-white" aria-labelledby="program-video-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(169,232,183,0.18),transparent_30%),radial-gradient(circle_at_82%_100%,rgba(255,79,163,0.16),transparent_34%)]" aria-hidden="true" />
          <div className="container-xl relative z-10">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-moss-light mb-3">
                See it in action
              </p>
              <h2 id="program-video-heading" className="font-serif text-3xl text-white mb-4">
                {program.name} at WOW Center
              </h2>
              <p className="text-white/78 text-lg leading-relaxed">
                Watch how members experience {program.name.toLowerCase()} in a
                real WOW day.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="rounded-[28px] border border-white/15 bg-white/8 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <div className="overflow-hidden rounded-[20px] bg-black ring-1 ring-white/10">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://player.vimeo.com/video/${program.vimeoId}?dnt=1&title=0&byline=0&portrait=0&badge=0&autopause=0`}
                      title={`${program.name} at WOW Center video`}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-white/62">
                Embedded from Vimeo. Use the player controls to watch full
                screen or adjust playback.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-cream" aria-labelledby="experience-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="lg:col-span-2 rounded-2xl bg-white border border-cream-dark p-8 shadow-sm">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Daily experience
              </p>
              <h2 id="experience-heading" className="font-serif text-2xl text-ink mb-5">
                A supportive rhythm, not a one-size-fits-all day.
              </h2>
              <div className="space-y-4 text-ink-70 text-lg leading-relaxed">
                <p>
                  Members join their group, settle into the day, and participate
                  in focused program blocks with support from WOW staff. Activities
                  are adapted so each person can participate with dignity and
                  confidence.
                </p>
                <p>
                  The goal is not just to stay busy. It is to help members grow
                  skills, practice independence, build friendships, and feel proud
                  of what they can do.
                </p>
              </div>
            </article>

            <aside className="rounded-2xl bg-moss text-white p-8">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                For families
              </p>
              <h2 className="font-serif text-2xl text-white mb-4">
                Want to know if this is a fit?
              </h2>
              <p className="text-white/80 mb-6">
                Admissions can talk through support needs, schedule, eligibility,
                and whether this program belongs in your family member&rsquo;s plan.
              </p>
              <Button href={LINKS.admissions} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
                Start Your Inquiry
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="related-programs-heading">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Explore more
              </p>
              <h2 id="related-programs-heading" className="font-serif text-2xl text-ink">
                Related programs
              </h2>
            </div>
            <Link
              href="/programs"
              className="font-sans font-700 text-sm text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
            >
              View all programs
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5" role="list">
            {related.map((rel) => (
              <li key={rel.slug}>
                <Link
                  href={`/programs/${rel.slug}`}
                  className={cn(
                    "group flex min-h-48 flex-col rounded-2xl p-6 border border-cream-dark",
                    "hover:shadow-md hover:-translate-y-0.5 hover:border-moss/20 transition-all",
                    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                    rel.color
                  )}
                >
                  <span className="text-3xl mb-4" aria-hidden="true">{rel.icon}</span>
                  <h3 className="font-serif text-lg font-600 text-ink mb-2">{rel.name}</h3>
                  <p className="text-sm text-ink-70 flex-1">{rel.tagline}</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-sans font-700 text-moss group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
