import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ArrowRight, Building2, CalendarHeart, ExternalLink, HandHeart, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer | WOW Center Miami",
  description:
    "Volunteer with WOW Center Miami as an individual, corporate team, or community group supporting adults with developmental disabilities.",
};

const volunteerPaths = [
  {
    icon: HandHeart,
    title: "Individual Volunteers",
    text: "Bring your time, warmth, and skills to member activities, events, outings, and special projects.",
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    text: "Create a meaningful service day for your workplace while supporting inclusion across Miami.",
  },
  {
    icon: UsersRound,
    title: "Community Groups",
    text: "Schools, clubs, faith groups, and civic organizations can help with programs, drives, and events.",
  },
];

const steps = [
  "Tell us how you want to help.",
  "WOW matches your interest with a real need.",
  "Show up, connect, and make the day brighter.",
];

export default function VolunteerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-moss-deep text-white" aria-labelledby="volunteer-heading">
        <Image
          src="/wow-photos/volunteer-training.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-deep via-moss-deep/82 to-moss-deep/30" aria-hidden="true" />
        <div className="container-xl relative z-10 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-[#FF8BC3] mb-4">
              Volunteer
            </p>
            <h1 id="volunteer-heading" className="font-serif mb-6 text-white">
              Your time can open a bigger world.
            </h1>
            <p className="text-white/88 text-xl leading-relaxed max-w-2xl">
              Join WOW Center as a volunteer and help Miami adults with
              developmental disabilities learn, work, create, celebrate, and
              belong.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Start Volunteering <ExternalLink size={18} aria-hidden="true" />
              </Button>
              <Button href="#volunteer-options" variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white">
                See Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer-options" className="py-16 bg-cream" aria-labelledby="options-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-10">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Ways to Help
            </p>
            <h2 id="options-heading" className="font-serif text-3xl text-ink mb-4">
              Find the volunteer lane that fits you.
            </h2>
            <p className="text-ink-70 text-lg">
              Whether you have one afternoon or a team ready to serve, WOW can
              connect your energy to something useful and human.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
            {volunteerPaths.map((path) => (
              <li key={path.title} className="rounded-2xl border border-moss-light/35 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF4FA3]/35 hover:shadow-md">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-moss-50 text-moss">
                  <path.icon size={25} aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl text-ink mb-3">{path.title}</h3>
                <p className="text-sm font-600 text-ink-70 leading-relaxed">{path.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="volunteer-flow-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-12 items-center">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                How It Works
              </p>
              <h2 id="volunteer-flow-heading" className="font-serif text-3xl text-ink mb-6">
                Simple to start. Meaningful when you arrive.
              </h2>
              <ol className="space-y-4" role="list">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-cream-dark bg-cream p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF4FA3] font-sans text-sm font-700 text-moss-deep">
                      {index + 1}
                    </span>
                    <p className="font-sans font-700 text-ink">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Button href={LINKS.volunteer} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                  Open Volunteer Form <ExternalLink size={18} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-cream-dark bg-cream shadow-lg">
              <Image
                src="/wow-photos/volunteer-outreach.png"
                alt="WOW Center volunteers and community members gathered around an outdoor activity table."
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-moss-deep text-white" aria-labelledby="volunteer-cta-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#FF8BC3]">
                <CalendarHeart size={26} aria-hidden="true" />
              </div>
              <h2 id="volunteer-cta-heading" className="font-serif text-3xl text-white mb-4">
                Ready to show up for WOW?
              </h2>
              <p className="text-white/80 text-lg">
                Use the current volunteer interest form and the WOW team will
                follow up with next steps.
              </p>
            </div>
            <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Become a Volunteer <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
