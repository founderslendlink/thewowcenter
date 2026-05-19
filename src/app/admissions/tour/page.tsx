import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ExternalLink, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule a Tour | WOW Center Miami",
  description:
    "Contact WOW Center Miami admissions to schedule a tour or start an inquiry.",
};

export default function AdmissionsTourPage() {
  return (
    <section className="py-20 bg-cream min-h-[60vh]" aria-labelledby="tour-heading">
      <div className="container-xl max-w-2xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
          Admissions
        </p>
        <h1 id="tour-heading" className="font-serif text-ink mb-6">
          Schedule a visit with the admissions team.
        </h1>
        <p className="text-ink-70 text-lg leading-relaxed mb-8">
          Until a site backend is approved, tour requests should go through the
          existing admissions inquiry form or by phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href={LINKS.admissions} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
            Open Admissions Form <ExternalLink size={18} aria-hidden="true" />
          </Button>
          <a
            href="tel:+13057261766"
            className="inline-flex items-center justify-center gap-2 font-sans font-bold rounded-full bg-moss-light text-moss-deep hover:bg-[#92DDA4] px-9 py-4 text-lg min-h-[44px] shadow-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-amber"
          >
            <Phone size={18} aria-hidden="true" />
            Call Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
