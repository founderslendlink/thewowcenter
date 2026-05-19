import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

const tiers = [
  { amount: "$25",   impact: "Covers one week of art supplies for a member" },
  { amount: "$50",   impact: "Funds two music therapy sessions" },
  { amount: "$100",  impact: "Provides one month of program supplies" },
  { amount: "$250",  impact: "Sponsors a WOW Workforce coaching session" },
  { amount: "$500",  impact: "Supports one member's full program for a month" },
  { amount: "$1,000", impact: "Funds a WOW Workforce coaching stipend for a quarter" },
];

export function DonateSection() {
  return (
    <section
      className="py-20 bg-cream"
      aria-labelledby="donate-section-heading"
    >
      <div className="container-xl">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-center mb-12">
            <div className="lg:text-left text-center">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Give
            </p>
            <h2 id="donate-section-heading" className="font-serif text-ink mb-4">
              Medicaid covers some of it.{" "}
              <em className="not-italic text-amber">We cover the rest.</em>
            </h2>
            <p className="text-ink-70 text-lg max-w-xl lg:mx-0 mx-auto">
              State services cover $0.80 of every dollar it costs to serve a
              member. Together, we cover the other $0.20.
            </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/wow-photos/shopping-skills.png"
                alt="A WOW member shopping independently in a community store."
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Giving tiers */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-white rounded-2xl p-5 border border-moss-light/20 hover:border-[#FF4FA3]/35 hover:shadow-sm transition-all"
              >
                <p className="font-serif text-2xl font-600 text-amber mb-1">
                  {tier.amount}
                </p>
                <p className="text-sm font-700 text-ink leading-relaxed">{tier.impact}</p>
              </div>
            ))}
          </div>

          {/* CTAs — both route directly to Qgiv giving page */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={LINKS.donateFallback} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Donate Monthly
            </Button>
            <Button href={LINKS.donateFallback} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
              Make a One-Time Gift
            </Button>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-70 font-sans">
            <span>✓ 501(c)(3) nonprofit</span>
            <span>✓ 100% tax-deductible</span>
            <span>✓ Secure giving platform</span>
            <span>✓ Processed through Qgiv/Bloomerang</span>
          </div>
        </div>
      </div>
    </section>
  );
}
