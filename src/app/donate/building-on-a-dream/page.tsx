import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ArrowRight, Building2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Building on a Dream | The Future of WOW | WOW Center Miami",
  description:
    "Building on a Dream is WOW Center Miami's future-focused campaign to create the next chapter for adults with developmental disabilities.",
};

const priorities = [
  {
    icon: Building2,
    title: "A future-ready home",
    text: "A place designed around accessibility, dignity, safety, and the full range of WOW programs.",
  },
  {
    icon: Sparkles,
    title: "Room for possibility",
    text: "More space for creativity, therapy, workforce development, community life, and daily connection.",
  },
  {
    icon: HeartHandshake,
    title: "A stronger WOW community",
    text: "A campaign for families, donors, partners, and neighbors who believe every person deserves a place to belong.",
  },
];

const givingPaths = [
  "Capital campaign gifts",
  "Pledges",
  "Major gifts",
  "Naming opportunities",
  "Corporate and community support",
];

export default function BuildingOnADreamPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-moss-deep text-white py-20"
        aria-labelledby="bod-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.82]"
          style={{ backgroundImage: "url('/wow-photos/future-wow-building.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-moss-deep/35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-deep/90 via-moss-deep/58 to-moss-deep/20" aria-hidden="true" />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                The future of WOW
              </p>
              <h1 id="bod-heading" className="font-serif mb-6" style={{ color: "#ffffff" }}>
                Building on a Dream.
              </h1>
              <p className="text-white/82 text-xl leading-relaxed">
                For 50 years, WOW Center has been a place where Miami adults
                with developmental disabilities can learn, work, create, and
                belong. Building on a Dream is the next chapter: a future-ready
                home for the people and programs that make WOW possible.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={LINKS.pledge} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                  Make a Pledge <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button href={LINKS.donateFallback} variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Donate to the Campaign
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/65">
                Secure giving is processed through WOW Center&rsquo;s existing
                donation platform.
              </p>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
              <ShieldCheck size={34} className="text-amber mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl mb-4" style={{ color: "#ffffff" }}>
                Campaign giving stays secure.
              </h2>
              <p className="text-white/75 mb-6">
                Pledges, donations, and major gift conversations should route
                through WOW Center&rsquo;s current giving process. This website does
                not collect payment information directly.
              </p>
              <Button href={LINKS.pledge} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
                Pledge Through Qgiv
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="campaign-video-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-8">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Watch the campaign story
            </p>
            <h2 id="campaign-video-heading" className="font-serif text-3xl text-ink mb-4">
              See the dream taking shape.
            </h2>
            <p className="text-ink-70 text-lg">
              This video is embedded from the current Building on a Dream
              campaign site so visitors can experience the campaign story
              directly on WOW Center&rsquo;s website.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cream-dark bg-ink shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/768217554?h=2befa02afc&dnt=1"
                title="Building on a Dream campaign video"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="campaign-priorities-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-10">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Why it matters
            </p>
            <h2 id="campaign-priorities-heading" className="font-serif text-3xl text-ink mb-4">
              Building for every ability, every program, and every member.
            </h2>
            <p className="text-ink-70 text-lg">
              WOW&rsquo;s future needs space that matches the ambition, creativity,
              and dignity of the community it serves.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {priorities.map((item) => (
              <li key={item.title} className="rounded-2xl border border-cream-dark bg-white p-7">
                <item.icon size={34} className="text-amber mb-5" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-70 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="pledge-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Give to the future
              </p>
              <h2 id="pledge-heading" className="font-serif text-3xl text-ink mb-5">
                Make a pledge or campaign gift.
              </h2>
              <p className="text-ink-70 text-lg leading-relaxed mb-7">
                Building on a Dream is where capital campaign support, pledges,
                naming opportunities, and major gifts belong. Every pledge button
                on this page routes to WOW Center&rsquo;s secure Qgiv giving page.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={LINKS.pledge} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                  Make a Pledge
                </Button>
                <Button href={LINKS.donateFallback} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                  Donate Securely
                </Button>
              </div>
            </div>

            <aside className="rounded-2xl bg-cream border border-cream-dark p-7">
              <h3 className="font-serif text-xl text-ink mb-5">Campaign giving may include</h3>
              <ul className="space-y-3" role="list">
                {givingPaths.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-70">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
