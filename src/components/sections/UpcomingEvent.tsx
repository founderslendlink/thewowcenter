"use client";

import { useState } from "react";
import { X, CalendarDays, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/Button";

function SponsorModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-40 hover:text-ink transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5" aria-hidden="true">
          <Ticket size={26} className="text-amber" />
        </div>

        <h3 className="font-serif text-2xl text-ink mb-2">Sponsorship Opportunities</h3>
        <p className="text-ink-70 mb-6 leading-relaxed">
          Interested in sponsoring the WOW Experience 2026? Reach out directly to our Director of Advancement.
        </p>

        <a
          href="mailto:jessie@wowcentermiami.org"
          className="inline-flex items-center justify-center gap-2 w-full bg-moss text-white font-sans font-700 text-sm px-6 py-3 rounded-xl hover:bg-moss/90 transition-colors"
        >
          jessie@wowcentermiami.org
        </a>

        <p className="mt-4 text-xs text-ink-40">Click the email above to open your mail app.</p>
      </div>
    </div>
  );
}

export function UpcomingEvent() {
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-cream" aria-labelledby="event-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-10 items-center">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Upcoming Event
              </p>
              <h2 id="event-heading" className="font-serif text-ink mb-4">
                WOW Experience 2026
              </h2>
              <p className="text-ink-70 text-xl leading-relaxed mb-6">
                Miami&rsquo;s most inclusive night — our signature annual fundraiser celebrating WOW members and the community that makes it all possible.
              </p>
              <div className="flex flex-col gap-3 text-ink-70 text-sm font-sans mb-8">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-amber shrink-0" aria-hidden="true" />
                  Saturday, September 26, 2026
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber shrink-0" aria-hidden="true" />
                  JW Marriott Marquis Miami &mdash; 255 Biscayne Blvd Way, Miami
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href="https://secure.qgiv.com/for/wowcenter/event/wowexperience2026/"
                  variant="primary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Tickets
                </Button>
                <button
                  onClick={() => setSponsorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-moss/40 text-moss font-sans font-700 text-sm hover:bg-moss/8 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
                >
                  Sponsorship Opportunities
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-cream-dark bg-white shadow-sm p-7 space-y-4">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber">An evening of</p>
              {["Dinner & cocktails", "Dancing & entertainment", "Member celebrations", "Community impact"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" aria-hidden="true" />
                  <span className="text-ink-70">{item}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-cream-dark text-ink-40 text-xs">
                Tickets from $275 &bull; Tables &amp; sponsorships available
              </div>
            </div>
          </div>
        </div>
      </section>

      {sponsorOpen && <SponsorModal onClose={() => setSponsorOpen(false)} />}
    </>
  );
}
