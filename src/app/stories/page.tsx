import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories | WOW Center Miami",
  description: "Member stories, family stories, and community voices from WOW Center Miami. Real people, real outcomes.",
};

const stories = [
  { slug: "marcus-wow-workforce", category: "Workforce", title: "Marcus landed his first real paycheck at 28.", excerpt: "Two years in WOW Workforce. Now a line cook at Shake Shack in Brickell. He bikes to work every morning.", date: "April 2026" },
  { slug: "ceramics-gallery-2026", category: "Art Program", title: "Our ceramics gallery sold out in under an hour.", excerpt: "Twelve WOW members showed work at our spring art exhibit. Every piece sold. Maria's ceramic bowls had a waitlist.", date: "March 2026" },
  { slug: "special-olympics-state", category: "Special Olympics", title: "Six medals at the Special Olympics State Games.", excerpt: "Our athletes brought home 2 gold, 2 silver, 2 bronze from state competition. Coach David called it the best day of his career.", date: "March 2026" },
  { slug: "mariana-family", category: "Family Story", title: "'He has a reason to get up every morning.'", excerpt: "Mariana's brother David has been a WOW member for 8 years. She talks about how the program changed their whole family.", date: "February 2026" },
  { slug: "music-therapy-breakthrough", category: "Music Therapy", title: "After 14 months of music therapy, James spoke his first full sentence.", excerpt: "Board-certified music therapist Rosa walks us through what happened and why rhythm and language are connected in the brain.", date: "January 2026" },
];

export default function StoriesPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="stories-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Stories</p>
          <h1 id="stories-heading" className="font-serif text-ink mb-6">What our community sounds like.</h1>
          <p className="text-ink-70 text-xl">Real people. Real outcomes. Real Miami.</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Story listings">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12" aria-label="Story and news navigation">
            <Link
              href="/stories"
              aria-current="page"
              className="rounded-2xl border-2 border-moss bg-moss-50 p-6 transition-all hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
            >
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Our Stories
              </p>
              <h2 className="font-serif text-2xl text-ink mb-2">
                Member and family stories
              </h2>
              <p className="text-sm text-ink-70">
                Read stories from the people, families, and programs that make
                WOW Center feel like home.
              </p>
            </Link>

            <Link
              href="/news"
              className="rounded-2xl border border-cream-dark bg-cream p-6 transition-all hover:border-moss/30 hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
            >
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                In the News
              </p>
              <h2 className="font-serif text-2xl text-ink mb-2">
                Press and outside articles
              </h2>
              <p className="text-sm text-ink-70">
                See media coverage, community announcements, and articles about
                WOW Center&rsquo;s work across Miami.
              </p>
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-cream-dark bg-cream hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
                >
                  <div className="h-44 bg-moss-50 flex items-center justify-center" aria-hidden="true">
                    <span className="text-moss/30 text-6xl font-serif italic">W</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-sans font-700 text-xs uppercase tracking-widest text-amber">{story.category}</span>
                      <span className="text-xs text-ink-40 font-sans">{story.date}</span>
                    </div>
                    <h2 className="font-serif text-lg font-600 text-ink mb-3 leading-snug">{story.title}</h2>
                    <p className="text-sm text-ink-70 leading-relaxed flex-1">{story.excerpt}</p>
                    <span className="mt-4 font-sans font-700 text-sm text-moss group-hover:underline underline-offset-4">Read story →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
