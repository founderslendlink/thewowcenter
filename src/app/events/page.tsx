import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Events | WOW Center Miami",
  description: "Upcoming events at WOW Center Miami — the annual WOW Experience gala, art exhibits, fundraisers, and community happenings.",
};

const events = [
  {
    slug: "wow-experience-2026",
    title: "The WOW Experience 2026",
    date: "November 8, 2026",
    venue: "JW Marriott Marquis Miami",
    type: "Annual Gala",
    desc: "Miami's celebration of ability, community, and possibility. Live performances by WOW members, art exhibition, silent auction, and culinary showcases.",
    flagship: true,
  },
  {
    slug: "art-exhibit-spring-2026",
    title: "Spring Art Exhibition",
    date: "May 22, 2026",
    venue: "WOW Center Miami",
    type: "Art Event",
    desc: "Annual showcase of work by WOW's Art Program members. All pieces available for purchase. 100% of proceeds support the Art Program.",
    flagship: false,
  },
  {
    slug: "special-olympics-local-2026",
    title: "Special Olympics Miami Area Games",
    date: "September 13, 2026",
    venue: "Tropical Park, Miami",
    type: "Sports",
    desc: "Our Special Olympics athletes compete in swimming, bocce, and athletics. Come cheer them on!",
    flagship: false,
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="events-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Events</p>
          <h1 id="events-heading" className="font-serif text-ink mb-6">What&rsquo;s happening at WOW.</h1>
          <p className="text-ink-70 text-xl">Galas, art shows, sports, and community gatherings. Join us.</p>
        </div>
      </section>
      <section className="py-16 bg-white" aria-label="Upcoming events">
        <div className="container-xl">
          <ul className="space-y-6" role="list">
            {events.map((event) => (
              <li key={event.slug}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 bg-cream rounded-2xl p-7 border border-cream-dark hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
                >
                  {event.flagship && (
                    <div className="sm:w-40 bg-moss rounded-xl flex items-center justify-center text-white font-serif text-4xl italic shrink-0 min-h-[100px]" aria-hidden="true">W</div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-sans font-700 text-xs uppercase tracking-widest text-amber">{event.type}</span>
                      {event.flagship && <span className="bg-amber/10 text-amber font-sans font-700 text-xs px-3 py-1 rounded-full border border-amber/20">Flagship event</span>}
                    </div>
                    <h2 className="font-serif text-2xl text-ink mb-3">{event.title}</h2>
                    <p className="text-ink-70 mb-4">{event.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-ink-70">
                      <span className="flex items-center gap-1.5"><Calendar size={14} aria-hidden="true" />{event.date}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{event.venue}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
