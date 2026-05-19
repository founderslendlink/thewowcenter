import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ImpactBar } from "@/components/sections/ImpactBar";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { DonateSection } from "@/components/sections/DonateSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { UpcomingEvent } from "@/components/sections/UpcomingEvent";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "WOW Center Miami | Adult Day Programs for Developmental Disabilities Since 1972",
  description:
    "For 50 years, The WOW Center has empowered Miami adults with developmental disabilities through art, workforce training, therapy, and community.",
};

function OriginStory() {
  return (
    <section className="py-20 bg-cream-dark" aria-labelledby="origin-heading">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 items-center">
          <div className="max-w-3xl">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
              Our story
            </p>
            <h2 id="origin-heading" className="font-serif text-ink mb-6">
              We were started around a kitchen table. We&rsquo;re still that close.
            </h2>
            <div className="space-y-4 text-ink-70 text-lg leading-relaxed">
              <p>
                In 1972, a group of Miami families came together with a single
                question: <em>what happens to our children after school ends?</em>{" "}
                What they built became The WOW Center, one of Miami-Dade&rsquo;s
                oldest and most trusted adult day training programs.
              </p>
              <p>
                Today, 200 members arrive every morning to a place that was built
                for them, with them. They work, create, compete, and belong here.
                Not because they have to. Because this is their community.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about/our-story" variant="secondary" size="md">
                Read our full story
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" aria-label="WOW members and staff together">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream shadow-sm">
              <Image
                src="/wow-photos/wow-community-group.png"
                alt="WOW members and staff smiling together outdoors."
                fill
                sizes="(max-width: 1024px) 45vw, 210px"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl bg-cream shadow-sm">
              <Image
                src="/wow-photos/classroom-support.png"
                alt="A WOW staff member supporting smiling members in a classroom."
                fill
                sizes="(max-width: 1024px) 45vw, 210px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "The WOW Center",
            alternateName: "WOW Center Miami",
            url: "https://wowcentermiami.org",
            logo: "https://wowcentermiami.org/logo.svg",
            description:
              "Adult day training nonprofit empowering Miami adults with developmental disabilities since 1972.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11450 SW 79 Street",
              addressLocality: "Miami",
              addressRegion: "FL",
              postalCode: "33173",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.6884,
              longitude: -80.3641,
            },
            telephone: "+13057261766",
            email: "hello@wowcentermiami.org",
            foundingDate: "1972",
            nonprofitStatus: "Nonprofit501c3",
            areaServed: "Miami-Dade County, FL",
          }),
        }}
      />

      <Hero />
      <ImpactBar />
      <ProgramsGrid />
      <OriginStory />
      <DonateSection />
      <PartnerLogos />
      <UpcomingEvent />
      <AdmissionsCTA />
    </>
  );
}
