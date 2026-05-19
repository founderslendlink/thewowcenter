import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | WOW Center Miami",
  description: "WOW Center Miami is committed to digital accessibility. This page describes our WCAG 2.2 AA accessibility foundation and how to reach us with feedback.",
};

export default function AccessibilityPage() {
  return (
    <section className="py-20 bg-white" aria-labelledby="accessibility-heading">
      <div className="container-xl max-w-3xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Accessibility</p>
        <h1 id="accessibility-heading" className="font-serif text-ink mb-6">
          Accessibility Statement
        </h1>
        <p className="text-ink-70 mb-2 text-sm">Last updated: May 2026</p>

        <div className="space-y-8 mt-8">
          <section aria-labelledby="commitment-heading">
            <h2 id="commitment-heading" className="font-serif text-2xl text-ink mb-4">Our commitment</h2>
            <p className="text-ink-70 leading-relaxed">
              WOW Center Miami is committed to ensuring digital accessibility for people
              with disabilities — including the members, families, and supporters we
              serve. We actively work to increase the usability of our website for everyone,
              and to apply the relevant accessibility standards.
            </p>
            <p className="text-ink-70 leading-relaxed mt-4">
              Because WOW Center serves adults with developmental disabilities, an
              inaccessible website is not just a technical failure — it is a mission
              failure. We treat WCAG 2.2 AA conformance as a brand and credibility
              requirement.
            </p>
          </section>

          <section aria-labelledby="conformance-heading">
            <h2 id="conformance-heading" className="font-serif text-2xl text-ink mb-4">Our accessibility foundation</h2>
            <p className="text-ink-70 leading-relaxed">
              This website is built to the{" "}
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-moss underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
              >
                Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
              </a>{" "}
              as its accessibility foundation. These guidelines define requirements to
              make web content more accessible to people with disabilities, including
              visual, auditory, cognitive, and motor disabilities. Accessibility is an
              ongoing practice — we continue to test, audit, and improve.
            </p>
          </section>

          <section aria-labelledby="measures-heading">
            <h2 id="measures-heading" className="font-serif text-2xl text-ink mb-4">Measures we take</h2>
            <ul className="space-y-2 text-ink-70" role="list">
              {[
                "Skip navigation link on every page for keyboard and screen reader users",
                "All images include descriptive alt text; decorative images use alt=\"\"",
                "Color contrast ratios of at least 4.5:1 for normal text, 3:1 for large text",
                "All interactive elements have visible focus indicators",
                "Logical heading hierarchy (H1 → H2 → H3) on every page",
                "All forms have associated <label> elements — not placeholders as labels",
                "Error messages are programmatically associated with their fields",
                "All animations respect prefers-reduced-motion",
                "Mobile tap targets are a minimum of 44x44px",
                "lang=\"en\" set on all English pages; lang=\"es\" on Spanish pages",
                "Videos will include accurate captions (not auto-generated only)",
                "No seizure-risk flashing content",
                "Authentication does not rely on cognitive tests",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-amber mt-1 shrink-0" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="font-serif text-2xl text-ink mb-4">Feedback and contact</h2>
            <p className="text-ink-70 leading-relaxed">
              We welcome feedback on the accessibility of this website. If you
              experience any barriers, please contact us:
            </p>
            <ul className="mt-4 space-y-2 text-ink-70">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:accessibility@wowcentermiami.org" className="text-moss underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                  accessibility@wowcentermiami.org
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+13057261766" className="text-moss underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                  (305) 726-1766
                </a>
              </li>
            </ul>
            <p className="text-ink-70 mt-4">
              We aim to respond to accessibility feedback within 2 business days.
            </p>
          </section>

          <section aria-labelledby="testing-heading">
            <h2 id="testing-heading" className="font-serif text-2xl text-ink mb-4">Testing approach</h2>
            <p className="text-ink-70 leading-relaxed">
              This website is tested using automated tools (axe DevTools), manual
              keyboard navigation testing, and screen reader testing with NVDA
              (Windows/Chrome) and VoiceOver (iOS/Safari). We conduct a full
              accessibility audit annually and after any major site updates.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
