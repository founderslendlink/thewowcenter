import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";
import { LINKS } from "@/lib/links";

const qualifications = [
  "Ages 21 and older",
  "Miami-Dade County residents",
  "Diagnosis of developmental or intellectual disability",
  "APD waiver recipients or private pay",
];

export function AdmissionsCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 bg-moss-deep text-white"
      aria-labelledby="admissions-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(169,232,183,0.22),transparent_32%),radial-gradient(circle_at_80%_100%,rgba(255,79,163,0.16),transparent_34%)]" aria-hidden="true" />
      <div className="container-xl">
        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-moss-light">
            Admissions
          </p>
          <h2 id="admissions-cta-heading" className="font-serif text-white">
            Is WOW the right fit for your family?
          </h2>
          <p className="text-white/80 text-lg">
            We serve Miami-Dade adults ages 21+ with developmental disabilities.
            Here&rsquo;s who qualifies:
          </p>

          <ul className="space-y-3 text-left max-w-sm mx-auto" role="list">
            {qualifications.map((q) => (
              <li key={q} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-[#FF8BC3] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/90">{q}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href={LINKS.admissions}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Inquiry
            </Button>
            <Button
              href="/admissions/tour"
              variant="ghost"
              size="lg"
              className="text-white border-white/45 hover:bg-white/10 hover:text-white"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
