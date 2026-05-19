import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Admissions | Join WOW Center Miami's Adult Day Programs",
  description:
    "Learn how adults ages 21+ with developmental disabilities can enroll in WOW Center Miami's programs. We accept APD waivers and work with Miami-Dade County families.",
};

const steps = [
  {
    number: "01",
    title: "Submit an inquiry",
    desc: "Takes about 5 minutes. Tell us about your family member and the programs you're interested in.",
    time: "5 min",
  },
  {
    number: "02",
    title: "Speak with our team",
    desc: "One of our admissions staff will call you within 2 business days — in English or Spanish.",
    time: "2 bus. days",
  },
  {
    number: "03",
    title: "Schedule a tour",
    desc: "Come see WOW in person. Meet staff, see the programs, and let your family member experience the space.",
    time: "Your schedule",
  },
  {
    number: "04",
    title: "Complete enrollment",
    desc: "We'll guide you through paperwork, waiver verification, and scheduling. Then your first day.",
    time: "1–2 weeks",
  },
];

const eligibility = [
  "Ages 21 and older",
  "Miami-Dade County residents",
  "Diagnosis of developmental or intellectual disability",
  "APD waiver recipients or private pay accepted",
  "Able to participate in a group program environment",
];

export default function AdmissionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://wowcentermiami.org" },
              { "@type": "ListItem", position: 2, name: "Admissions", item: "https://wowcentermiami.org/admissions" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-cream py-20" aria-labelledby="admissions-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-10 items-center">
            <div className="max-w-2xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Admissions
              </p>
              <h1 id="admissions-heading" className="font-serif text-ink mb-6">
                Is WOW the right fit for your family?
              </h1>
              <p className="text-ink-70 text-xl leading-relaxed">
                We serve Miami-Dade adults ages 21 and older with developmental
                disabilities. Here&rsquo;s everything you need to know.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/wow-photos/classroom-support.png"
                alt="A WOW staff member warmly supporting members in a classroom."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white" aria-labelledby="eligibility-heading">
        <div className="container-xl">
          <div className="max-w-3xl">
            <h2 id="eligibility-heading" className="font-serif text-2xl text-ink mb-8">
              Who qualifies
            </h2>
            <ul className="space-y-4" role="list">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-amber shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-ink-70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-70">
              Not sure if your family member qualifies?{" "}
              <Link
                href="/contact"
                className="text-moss font-700 underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
              >
                Call or email us
              </Link>{" "}
              and we&rsquo;ll talk it through — no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-cream" aria-labelledby="how-it-works-heading">
        <div className="container-xl">
          <h2 id="how-it-works-heading" className="font-serif text-2xl text-ink mb-10">
            How enrollment works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-cream-dark"
              >
                <p className="font-sans font-700 text-3xl text-amber/30 mb-3" aria-hidden="true">
                  {step.number}
                </p>
                <h3 className="font-serif text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-70 leading-relaxed mb-4">{step.desc}</p>
                <span className="font-sans font-700 text-xs text-moss uppercase tracking-wider">
                  {step.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={LINKS.admissions} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Start Your Inquiry →
            </Button>
            <Button href="/admissions/tour" variant="secondary" size="lg">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white" aria-labelledby="admissions-contact-heading">
        <div className="container-xl">
          <div className="max-w-xl">
            <h2 id="admissions-contact-heading" className="font-serif text-2xl text-ink mb-6">
              Prefer to talk first?
            </h2>
            <p className="text-ink-70 mb-6">
              Our admissions team speaks English and Spanish. Call us Monday–Friday,
              8 am – 4 pm.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+13057261766"
                className="flex items-center gap-3 text-moss font-700 text-lg hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm w-fit"
              >
                <Phone size={20} aria-hidden="true" />
                (305) 726-1766
              </a>
              <a
                href="mailto:admissions@wowcentermiami.org"
                className="flex items-center gap-3 text-moss font-700 hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm w-fit"
              >
                <Mail size={20} aria-hidden="true" />
                admissions@wowcentermiami.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ link */}
      <section className="py-12 bg-cream-dark" aria-labelledby="admissions-faq-cta">
        <div className="container-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 id="admissions-faq-cta" className="font-serif text-xl text-ink">
              Have more questions?
            </h2>
            <p className="text-ink-70 mt-1">
              We&rsquo;ve answered the most common ones from families like yours.
            </p>
          </div>
          <Link
            href="/admissions/faq"
            className="flex items-center gap-2 font-sans font-700 text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm shrink-0"
          >
            Read the Admissions FAQ <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
