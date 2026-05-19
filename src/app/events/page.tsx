import type { Metadata } from "next";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Events | WOW Center Miami",
  description:
    "Upcoming events at WOW Center Miami — the annual WOW Experience gala, art exhibits, fundraisers, and community happenings.",
};

const events = [
  {
    title: "The WOW Experience 2026",
    date: "Saturday, September 26, 2026",
    venue: "JW Marriott Marquis Miami",
    address: "255 Biscayne Blvd Way, Miami, FL 33131",
    type: "Annual Gala",
    desc: "Miami's most inclusive night — our signature annual fundraiser celebrating WOW members and the community that makes it all possible. An evening of dinner, dancing, and community.",
    flagship: true,
    ticketHref: "https://secure.qgiv.com/for/wowcenter/event/wowexperience2026/",
    sponsorEmail: "jessie@wowcentermiami.org",
    price: "Tickets from $275",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="events-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
            Events
          </p>
          <h1 id="events-heading" className="font-serif text-ink mb-6">
            What&rsquo;s happening at WOW.
          </h1>
          <p className="text-ink-70 text-xl leading-relaxed">
            Galas, art shows, sports, and community gatherings. Join us.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Upcoming events">
        <div className="container-xl max-w-4xl">
          <ul className="space-y-8" role="list">
            {events.map((event) => (
              <li
                key={event.title}
                className="bg-cream rounded-2xl border border-cream-dark overflow-hidden shadow-sm"
              >
                {event.flagship && (
                  <div className="bg-moss px-7 py-3 flex items-center gap-2">
                    <span className="font-sans font-700 text-xs uppercase tracking-widest text-white/80">
                      Flagship Event
                    </span>
                  </div>
                )}
                <div className="p-7 sm:p-10">
                  <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                    {event.type}
                  </p>
                  <h2 className="font-serif text-3xl text-ink mb-4">{event.title}</h2>
                  <p className="text-ink-70 text-lg leading-relaxed mb-6">{event.desc}</p>

                  <div className="flex flex-col gap-2 text-sm text-ink-70 mb-8">
                    <span className="flex items-center gap-2">
                      <Calendar size={15} className="text-amber shrink-0" aria-hidden="true" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={15} className="text-amber shrink-0" aria-hidden="true" />
                      {event.venue} &mdash; {event.address}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <Button
                      href={event.ticketHref}
                      variant="primary"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Tickets <ExternalLink size={16} aria-hidden="true" />
                    </Button>
                    <a
                      href={`mailto:${event.sponsorEmail}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-moss/40 text-moss font-sans font-700 text-sm hover:bg-moss/8 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
                    >
                      Sponsorship Opportunities
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-ink-40">{event.price} &bull; Sponsorship inquiries: {event.sponsorEmail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
