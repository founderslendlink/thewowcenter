import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin } from "lucide-react";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "The WOW Experience | Annual Gala | WOW Center Miami",
  description: "Join us for The WOW Experience — WOW Center Miami's annual celebration of ability, community, and possibility.",
};

const sponsors = [
  { level: "Presenting Sponsor", amount: "$25,000", perks: "Naming rights, 10 tickets, full-page program ad, social media feature, stage recognition" },
  { level: "Gold Sponsor", amount: "$10,000", perks: "8 tickets, half-page program ad, table signage, social media mention" },
  { level: "Silver Sponsor", amount: "$5,000", perks: "6 tickets, quarter-page program ad, table signage" },
  { level: "Community Sponsor", amount: "$2,500", perks: "4 tickets, name in program" },
];

export default function WowExperiencePage() {
  return (
    <>
      <section className="bg-moss-deep text-white py-24" aria-labelledby="event-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Annual Gala</p>
          <h1 id="event-heading" className="font-serif text-white mb-4">The WOW Experience</h1>
          <p className="font-serif text-xl text-white/80 italic mb-8">WOW Center&rsquo;s annual celebration of ability, community, and possibility.</p>
          <div className="flex flex-wrap gap-5 text-white/80 text-sm mb-8">
            <span className="flex items-center gap-2"><Calendar size={16} aria-hidden="true" />Date &amp; time to be announced</span>
            <span className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" />Venue to be announced</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href={LINKS.contact} variant="primary" size="lg">Ask About Tickets →</Button>
            <Button href="#sponsorship" variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white">Become a Sponsor</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="expect-heading">
        <div className="container-xl max-w-3xl">
          <h2 id="expect-heading" className="font-serif text-2xl text-ink mb-8">What to expect</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {["Live performances by WOW members", "Art exhibition and sale", "Silent auction", "Culinary showcases from WOW's culinary program", "Award presentations", "Community networking"].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-cream rounded-xl p-4 border border-cream-dark text-sm font-sans text-ink-70">
                <span className="text-amber" aria-hidden="true">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" id="sponsorship" aria-labelledby="sponsors-heading">
        <div className="container-xl max-w-3xl">
          <h2 id="sponsors-heading" className="font-serif text-2xl text-ink mb-8">Sponsorship packages</h2>
          <ul className="space-y-4" role="list">
            {sponsors.map((s) => (
              <li key={s.level} className="bg-white rounded-2xl p-6 border border-cream-dark grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                <div>
                  <p className="font-serif text-lg text-ink">{s.level}</p>
                  <p className="font-sans font-700 text-amber text-xl">{s.amount}</p>
                </div>
                <p className="text-sm text-ink-70 sm:col-span-2">{s.perks}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={LINKS.sponsorship} variant="primary" size="md">Ask About Sponsorship →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
