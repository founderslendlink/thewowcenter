import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions Inquiry | WOW Center Miami",
  description:
    "Start an admissions inquiry for WOW Center Miami through the organization's existing admissions form.",
};

export default function AdmissionsApplyPage() {
  return (
    <section className="py-20 bg-cream min-h-[60vh]" aria-labelledby="admissions-apply-heading">
      <div className="container-xl max-w-2xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
          Admissions
        </p>
        <h1 id="admissions-apply-heading" className="font-serif text-ink mb-6">
          Start your admissions inquiry.
        </h1>
        <p className="text-ink-70 text-lg leading-relaxed mb-8">
          WOW Center is currently using its existing admissions form to collect
          family inquiries. This website does not submit admissions information
          directly until an approved backend is in place.
        </p>
        <Button href={LINKS.admissions} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
          Open Admissions Form <ExternalLink size={18} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
