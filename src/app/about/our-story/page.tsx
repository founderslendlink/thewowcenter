import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ArrowRight, Heart, MapPin, Sparkles, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Adult Day Training Center Miami | WOW Center",
  description:
    "Since 1972, The WOW Center has empowered Miami adults with developmental disabilities through programs rooted in dignity, community, and possibility.",
};

const milestones = [
  { year: "1972", title: "Founded by families", desc: "Miami families came together around a shared question: what happens after school ends?" },
  { year: "1985", title: "A permanent home", desc: "WOW moved into its long-time home on SW 79 Street, giving the growing community a stable place to belong." },
  { year: "1998", title: "Special Olympics partnership", desc: "Members gained more opportunities to train, compete, and represent WOW through Special Olympics Florida." },
  { year: "2008", title: "WOW Workforce launched", desc: "Employment programming expanded pathways to real jobs, real paychecks, and greater independence." },
  { year: "2022", title: "50 years of service", desc: "WOW celebrated five decades as one of Miami-Dade's trusted disability service organizations." },
  { year: "Today", title: "Building the future", desc: "The next chapter is about creating a future-ready home for every ability, every program, and every member." },
];

const values = [
  {
    icon: Heart,
    title: "Dignity",
    desc: "Every person here is seen as whole, capable, and worthy of respect.",
  },
  {
    icon: Sparkles,
    title: "Possibility",
    desc: "WOW is built around what members can do, discover, learn, and become.",
  },
  {
    icon: UsersRound,
    title: "Community",
    desc: "Families, staff, partners, and members build belonging together every day.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-moss-deep text-white py-20 lg:py-24" aria-labelledby="story-heading">
        <Image
          src="/wow-photos/story-family-mural.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-55 lg:opacity-70"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-moss-deep/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-deep via-moss-deep/82 to-moss-deep/18" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Our Story
              </p>
              <h1 id="story-heading" className="font-serif mb-6" style={{ color: "#ffffff" }}>
                A place built by families, for futures.
              </h1>
              <p className="text-white/82 text-xl leading-relaxed">
                Since 1972, WOW Center has helped Miami adults with developmental
                disabilities build fuller lives through creativity, careers,
                community, and care.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/building-on-a-dream" variant="primary" size="lg">
                  See the Future of WOW
                </Button>
                <Button href="/programs" variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white">
                  Explore Programs
                </Button>
              </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="mission-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Mission
              </p>
              <h2 id="mission-heading" className="font-serif text-3xl text-ink mb-4">
                Full lives, not small expectations.
              </h2>
              <p className="text-ink-70">
                WOW empowers adults with developmental disabilities through
                programs that support independence, connection, creativity, and
                real participation in community life.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
              {values.map((value) => (
                <li key={value.title} className="rounded-2xl border border-cream-dark bg-cream p-6">
                  <value.icon size={30} className="text-amber mb-5" aria-hidden="true" />
                  <h3 className="font-serif text-xl text-ink mb-3">{value.title}</h3>
                  <p className="text-sm text-ink-70 leading-relaxed">{value.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16" aria-labelledby="story-photos-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-10 items-center">
            <div>
              <div className="overflow-hidden rounded-2xl border border-cream-dark bg-ink shadow-lg">
                <div className="aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1024520193?dnt=1"
                    title="WOW Center community story video"
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div>
              <MapPin size={34} className="text-amber mb-5" aria-hidden="true" />
              <h2 id="story-photos-heading" className="font-serif text-3xl text-ink mb-4">
                Miami-Dade is home.
              </h2>
              <p className="text-ink-70 text-lg leading-relaxed">
                WOW has grown with the families, neighborhoods, employers, and
                partners who believe adults with disabilities deserve meaningful
                places to learn, work, create, and belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="timeline-heading">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Timeline
              </p>
              <h2 id="timeline-heading" className="font-serif text-3xl text-ink mb-4">
                From one family question to a Miami institution.
              </h2>
            </div>
            <Link
              href="/about/impact"
              className="inline-flex items-center gap-2 font-sans font-700 text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
            >
              View WOW&rsquo;s impact <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" role="list">
            {milestones.map((m) => (
              <li key={m.year} className="rounded-2xl border border-cream-dark bg-white p-6">
                <p className="font-serif text-4xl text-amber mb-4">{m.year}</p>
                <h3 className="font-serif text-xl text-ink mb-3">{m.title}</h3>
                <p className="text-sm text-ink-70 leading-relaxed">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-moss text-white" aria-labelledby="story-cta">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
            <div className="max-w-2xl">
              <h2 id="story-cta" className="font-serif text-3xl mb-4" style={{ color: "#ffffff" }}>
                Help write the next chapter.
              </h2>
              <p className="text-white/80 text-lg">
                Whether you give, volunteer, partner, or apply, there is a place
                for you in WOW&rsquo;s future.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={LINKS.donate} variant="primary" size="md">Donate Today</Button>
              <Button href={LINKS.volunteer} variant="ghost" size="md" className="text-white border-white/45 hover:bg-white/10 hover:text-white" target="_blank" rel="noopener noreferrer">
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
