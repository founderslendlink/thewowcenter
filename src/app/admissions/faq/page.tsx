import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Admissions FAQ | WOW Center Miami",
  description:
    "Answers to the most common questions from families considering WOW Center Miami — eligibility, cost, transportation, Spanish services, and more.",
};

const faqs = [
  {
    q: "What does a typical day at WOW look like?",
    a: "Members arrive between 8:30 and 9 am and follow a personalized daily schedule that draws from our 12 programs. Each day includes structured program time, social time, meals, and community outings. Staff-to-member ratio is 1:4. Members have predictable routines with built-in flexibility.",
  },
  {
    q: "How much does it cost? What does insurance cover?",
    a: "WOW Center accepts APD (Agency for Persons with Disabilities) waivers, which cover most program costs for eligible individuals. Families without a waiver can attend on private pay. Contact our admissions team for current private pay rates and to discuss your options.",
  },
  {
    q: "What is an APD waiver and how do I get one?",
    a: "An APD waiver is a Medicaid-funded program through Florida's Agency for Persons with Disabilities that pays for services like adult day training. If your family member doesn't have one yet, our social services team can help you navigate the application process.",
  },
  {
    q: "Is transportation available?",
    a: "WOW Center does not provide transportation directly, but our social services team can connect you with transportation resources including accessible van services, Medicaid transportation benefits, and Miami-Dade transit options.",
  },
  {
    q: "What happens if my family member has behavioral support needs?",
    a: "We serve members across a wide range of support needs. During the admissions process, our team will work with you to understand your family member's behavioral support plan and ensure we have the right staffing and programming in place before their first day.",
  },
  {
    q: "Are services available in Spanish?",
    a: "Yes. Our admissions team and several program staff members are fluent in Spanish. All intake paperwork is available in Spanish, and we regularly serve families where Spanish is the primary language at home.",
  },
  {
    q: "What is the staff-to-member ratio?",
    a: "Our standard ratio is 1 staff member to 4 members during program time. Some specialized programs and therapy sessions have lower ratios. We maintain these standards to ensure every member gets meaningful individual attention.",
  },
  {
    q: "Can we visit before enrolling?",
    a: "Yes — we encourage it. Schedule a tour and you and your family member can see the programs, meet the staff, and experience the space before making any decisions. Most families find the visit answers questions they didn't know they had.",
  },
  {
    q: "Is there a waiting list?",
    a: "We do occasionally have waitlists for specific programs or time slots. Submit your inquiry as early as possible, and our admissions team will give you a realistic picture of availability and timing.",
  },
  {
    q: "What ages do you serve?",
    a: "We serve adults ages 21 and older. There is no upper age limit — we have members in their 60s and 70s who have been with WOW for decades.",
  },
  {
    q: "Does WOW serve people with physical disabilities in addition to developmental disabilities?",
    a: "Our primary focus is adults with developmental and intellectual disabilities. Many of our members also have physical disabilities, and our facilities are fully accessible. Contact us to discuss your family member's specific situation.",
  },
  {
    q: "How long does the enrollment process take?",
    a: "From your first inquiry to a member's first day typically takes 1–3 weeks, depending on waiver verification and scheduling. Our team will give you a timeline during your admissions call.",
  },
];

export default function AdmissionsFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <section className="bg-cream py-20" aria-labelledby="faq-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
            Admissions FAQ
          </p>
          <h1 id="faq-heading" className="font-serif text-ink mb-6">
            Questions families ask most.
          </h1>
          <p className="text-ink-70 text-xl">
            Still have questions after reading these? Call us at{" "}
            <a href="tel:+13057261766" className="text-moss font-700 underline underline-offset-4">
              (305) 726-1766
            </a>
            . We&rsquo;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Frequently asked questions">
        <div className="container-xl max-w-3xl">
          <dl className="space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-cream-dark pb-8"
              >
                <dt className="font-serif text-xl text-ink mb-3">{faq.q}</dt>
                <dd className="text-ink-70 text-lg leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 bg-cream rounded-2xl p-8 text-center space-y-4">
            <h2 className="font-serif text-2xl text-ink">
              Ready to take the next step?
            </h2>
            <p className="text-ink-70">
              Our admissions team will answer any remaining questions when you submit
              your inquiry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={LINKS.admissions} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
                Submit an Inquiry →
              </Button>
              <Button href="/admissions/tour" variant="secondary" size="md">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
