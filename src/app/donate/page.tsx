import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { CheckCircle, ExternalLink, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | WOW Center Miami",
  description:
    "Give securely to WOW Center Miami through the organization's existing donation platform.",
};

const impactCards = [
  {
    amount: "$25",
    title: "Creative supplies",
    text: "Helps provide art, ceramics, and classroom materials for member programs.",
  },
  {
    amount: "$50",
    title: "Therapy support",
    text: "Supports music, speech, occupational therapy, and wellness activities.",
  },
  {
    amount: "$100",
    title: "Program essentials",
    text: "Helps sustain daily programming, community outings, and member support.",
  },
  {
    amount: "$250",
    title: "Workforce coaching",
    text: "Supports job readiness, coaching, and employment pathways for WOW members.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-moss-deep text-white py-20" aria-labelledby="donate-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
            Give
          </p>
          <h1 id="donate-heading" className="font-serif text-white mb-6">
            Help WOW members keep learning, creating, working, and belonging.
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Your gift helps sustain the programs, people, and spaces that make
            WOW Center a trusted community for adults with developmental
            disabilities across Miami-Dade.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="impact-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-10">
            <h2 id="impact-heading" className="font-serif text-2xl text-ink mb-4">
              Your gift has practical impact.
            </h2>
            <p className="text-ink-70 text-lg">
              Every contribution helps WOW Center provide inclusive programs,
              life skills, therapies, community experiences, and employment
              support. Choose a secure giving option below through the
              organization&rsquo;s existing donation platform.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
            {impactCards.map((card) => (
              <li
                key={card.amount}
                className="bg-cream rounded-2xl p-6 border border-cream-dark"
              >
                <p className="font-serif text-3xl text-amber mb-2">{card.amount}</p>
                <h3 className="font-serif text-lg text-ink mb-2">{card.title}</h3>
                <p className="text-sm text-ink-70 leading-relaxed">{card.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="give-now-heading">
        <div className="container-xl max-w-3xl">
          <div className="bg-white rounded-2xl border border-cream-dark p-8 sm:p-12 shadow-sm text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-amber/10 p-4 mb-6" aria-hidden="true">
              <Heart size={32} className="text-amber" />
            </div>
            <h2 id="give-now-heading" className="font-serif text-3xl text-ink mb-4">
              Ready to make a difference?
            </h2>
            <p className="text-ink-70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Your gift goes directly to the programs, people, and spaces that
              make WOW Center possible. Giving is secure and takes less than two
              minutes through our trusted donation platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button href={LINKS.donateFallback} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Donate Securely <ExternalLink size={18} aria-hidden="true" />
              </Button>
              <p className="text-sm text-ink-70">
                Opens WOW Center&rsquo;s secure giving page.
              </p>
            </div>

            <div className="pt-8 border-t border-cream-dark">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-ink-70 text-left" role="list">
                {[
                  "501(c)(3) nonprofit — your gift is tax-deductible",
                  "Secure payment handled by our trusted giving platform",
                  "No credit card data collected on this website",
                  "Privacy and refund policy available below",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-amber shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <Link
                  href={LINKS.privacyPolicy}
                  className="text-moss font-700 underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={LINKS.refundPolicy}
                  className="text-moss font-700 underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
