import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | WOW Center Miami",
  description: "Join the WOW Center Miami team. Open positions in program support, therapy, administration, and more.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="careers-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Our Team</p>
          <h1 id="careers-heading" className="font-serif text-ink mb-6">Work at WOW.</h1>
          <p className="text-ink-70 text-xl leading-relaxed">
            Meaningful work. Real community. A team that shows up for each other the
            same way they show up for our members.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Open positions">
        <div className="container-xl max-w-3xl">
          <h2 className="font-serif text-2xl text-ink mb-4">Open positions</h2>
          <p className="text-ink-70 mb-8">
            Browse current openings and apply directly through our careers portal.
          </p>
          <a
            href="https://thewowcentermiami.bamboohr.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-moss text-white font-sans font-700 text-sm px-6 py-3 rounded-xl hover:bg-moss/90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
          >
            View all open positions →
          </a>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-label="Why work at WOW">
        <div className="container-xl max-w-3xl">
          <h2 className="font-serif text-2xl text-ink mb-8">Why WOW?</h2>
          <ul className="space-y-5" role="list">
            {[
              { heading: "Mission-driven every day", body: "Our members arrive every morning with joy. You'll feel that." },
              { heading: "A team that stays", body: "Many of our staff have been here for over a decade. We build careers, not just jobs." },
              { heading: "Room to grow", body: "WOW invests in training, certifications, and advancement for every team member." },
              { heading: "Bilingual community", body: "We serve Miami — English and Spanish fluency opens more doors here." },
            ].map((item) => (
              <li key={item.heading} className="bg-white rounded-2xl p-7 border border-cream-dark">
                <h3 className="font-serif text-xl text-ink mb-2">{item.heading}</h3>
                <p className="text-ink-70">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink-70 mt-8">
            Don&rsquo;t see the right fit?{" "}
            <a
              href="https://thewowcentermiami.bamboohr.com/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
            >
              Check back on our portal
            </a>
            {" "}— we&rsquo;re always growing.
          </p>
        </div>
      </section>
    </>
  );
}
