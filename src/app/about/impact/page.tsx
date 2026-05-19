import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ArrowRight, BriefcaseBusiness, Medal, Music, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact | WOW Center Miami",
  description:
    "Impact, outcomes, and program reach from WOW Center Miami, serving adults with developmental disabilities across Miami-Dade.",
};

const metrics = [
  { value: "200+", label: "Members served daily", detail: "A vibrant community of adults building skills, friendships, and independence." },
  { value: "12", label: "Programs offered", detail: "Creative, therapeutic, employment, wellness, and community-based programs." },
  { value: "50+", label: "Years of service", detail: "Decades of trusted support for Miami-Dade families." },
  { value: "1:4", label: "Staff-to-member ratio", detail: "Small-group support that helps members participate meaningfully." },
];

const impactAreas = [
  {
    icon: Palette,
    title: "Creative expression",
    text: "Art, ceramics, music, and performance help members communicate, grow confidence, and share their voice.",
    image: "/wow-photos/classroom-support.png",
    alt: "A WOW staff member supporting smiling members in an art classroom.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Workforce pathways",
    text: "WOW Workforce supports job readiness, coaching, and employment connections across Miami.",
    image: "/wow-photos/shake-shack-service.png",
    alt: "A WOW member smiling while handing over a Shake Shack bag.",
  },
  {
    icon: Medal,
    title: "Athletics and wellness",
    text: "Special Olympics, fitness, and movement programs support health, teamwork, and pride.",
    image: "/wow-photos/fitness-coaching.png",
    alt: "A WOW member smiling during a supported gym workout.",
  },
  {
    icon: Music,
    title: "Therapy and support",
    text: "Speech, occupational, music therapy, and social services help members and families move forward.",
    image: "/wow-photos/members-together.png",
    alt: "WOW members enjoying time together in a program room.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-moss-deep text-white py-20" aria-labelledby="impact-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Impact
              </p>
              <h1 id="impact-heading" className="font-serif mb-6" style={{ color: "#ffffff" }}>
                What belonging makes possible.
              </h1>
              <p className="text-white/82 text-xl leading-relaxed">
                WOW&rsquo;s impact shows up in daily routines, first paychecks, new
                friendships, creative breakthroughs, athletic pride, and families
                who know their loved one has a place to grow.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/8 shadow-xl">
              <Image
                src="/wow-photos/members-together.png"
                alt="Three WOW members smiling together in a program room."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="metrics-heading">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                By the numbers
              </p>
              <h2 id="metrics-heading" className="font-serif text-3xl text-ink mb-4">
                A daily community with long-term reach.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-700 text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
            >
              Request current impact data <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {metrics.map((m) => (
              <li key={m.label} className="rounded-2xl border border-cream-dark bg-cream p-6">
                <p className="font-serif text-5xl text-amber mb-3">{m.value}</p>
                <h3 className="font-sans font-700 text-sm uppercase tracking-wide text-ink mb-3">{m.label}</h3>
                <p className="text-sm text-ink-70 leading-relaxed">{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="areas-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-10">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Programs in action
            </p>
            <h2 id="areas-heading" className="font-serif text-3xl text-ink mb-4">
              Impact is not one thing. It is a full life.
            </h2>
            <p className="text-ink-70 text-lg">
              WOW members participate across programs that support creativity,
              employment, therapy, wellness, independence, and community life.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {impactAreas.map((area) => (
              <li key={area.title} className="overflow-hidden rounded-2xl border border-cream-dark bg-white">
                <div className="relative aspect-[16/10] bg-cream">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <area.icon size={34} className="text-amber mb-5" aria-hidden="true" />
                  <h3 className="font-serif text-xl text-ink mb-3">{area.title}</h3>
                  <p className="text-ink-70 leading-relaxed">{area.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-moss text-white" aria-labelledby="impact-cta">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
            <div className="max-w-2xl">
              <h2 id="impact-cta" className="font-serif text-3xl mb-4" style={{ color: "#ffffff" }}>
                Keep the impact growing.
              </h2>
              <p className="text-white/80 text-lg">
                Your support helps WOW sustain the programs, people, and spaces
                that make daily progress possible.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={LINKS.donate} variant="primary" size="md">Donate Today</Button>
              <Button href="/building-on-a-dream" variant="ghost" size="md" className="text-white border-white/45 hover:bg-white/10 hover:text-white">
                See the Future of WOW
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
