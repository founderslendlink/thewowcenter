import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer | WOW Center Miami",
  description:
    "Volunteer or express partner interest with WOW Center Miami through the organization's existing form.",
};

export default function VolunteerPage() {
  return (
    <section className="py-20 bg-cream min-h-[60vh]" aria-labelledby="volunteer-heading">
      <div className="container-xl max-w-2xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
          Volunteer
        </p>
        <h1 id="volunteer-heading" className="font-serif text-ink mb-6">
          Give your time to WOW.
        </h1>
        <p className="text-ink-70 text-lg leading-relaxed mb-8">
          Individual volunteers, corporate teams, and community groups should
          use WOW Center&rsquo;s existing volunteer and partner interest form. This
          website does not submit volunteer information directly until an
          approved backend is in place.
        </p>
        <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
          Open Volunteer Form <ExternalLink size={18} aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
