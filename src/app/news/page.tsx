import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Press | WOW Center Miami",
  description: "Latest news, press coverage, and announcements from WOW Center Miami.",
};

const outsideArticles = [
  {
    outlet: "CBS Miami",
    title: "Miami's WOW Center helps adults with disabilities find purpose, employment",
    url: "https://www.cbsnews.com/miami/news/miamis-wow-center-helps-adults-with-disabilities-find-purpose-employment/",
  },
  {
    outlet: "CBS Miami (Video)",
    title: "Miami's WOW Center helps adults with disabilities improve the quality of their life",
    url: "https://www.cbsnews.com/miami/video/miamis-wow-center-helps-adults-with-disabilities-improve-the-quality-of-their-life/",
  },
  {
    outlet: "FIU Caplin News",
    title: "A cause to WOW about: Wow Center expansion helps create community for disabled adults of Miami",
    url: "https://caplinnews.fiu.edu/wow-center-community-habilitation-center-barbara-valdes/",
  },
  {
    outlet: "Local 10 News (WPLG)",
    title: "Chick-fil-A helps people with disabilities achieve success, tap artistic talents",
    url: "https://www.local10.com/news/local/2023/06/08/chick-fil-a-helps-people-with-disabilities-achieve-success-tap-artistic-talents/",
  },
  {
    outlet: "Kendall Gazette / Miami Community Newspapers",
    title: "Miami-Dade County School Board recognizes WOW Center in Kendall",
    url: "https://communitynewspapers.com/kendallgazette/miami-dade-county-school-board-recognizes-wow-center-in-kendall/",
  },
  {
    outlet: "Republica Havas",
    title: "WOW Center gives life skills training for those with disabilities",
    url: "https://republicahavas.com/wow-center-gives-life-skills-training-for-those-with-disabilities/",
  },
  {
    outlet: "Give Miami Day",
    title: "The WOW Center - Give Miami Day Fundraising Profile",
    url: "https://www.givemiamiday.org/p/stories/wowcenter",
  },
  {
    outlet: "GuideStar / Candid",
    title: "THE WOW CENTER INC - Nonprofit Transparency Profile",
    url: "https://www.guidestar.org/profile/23-7171039",
  },
  {
    outlet: "WSVN 7News",
    title: "WOW Center Miami, Angels Watching Over Me host empowering event at Soho Beach House",
    url: "https://wsvn.com/news/local/wow-center-miami-angels-watching-over-me-host-empowering-event-at-soho-beach-house/",
  },
  {
    outlet: "ProPublica - Nonprofit Explorer",
    title: "The Wow Center Inc - Nonprofit Tax Filing Explorer",
    url: "https://projects.propublica.org/nonprofits/organizations/237171039",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="news-page-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
            News & Press
          </p>
          <h1 id="news-page-heading" className="font-serif text-ink mb-6">
            WOW in the world.
          </h1>
          <p className="text-ink-70 text-xl">
            Announcements, press coverage, and updates from WOW Center Miami.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="outside-articles-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12" aria-label="Story and news navigation">
            <Link
              href="/stories"
              className="rounded-2xl border border-cream-dark bg-cream p-6 transition-all hover:border-moss/30 hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
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
              aria-current="page"
              className="rounded-2xl border-2 border-moss bg-moss-50 p-6 transition-all hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
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

          <div className="max-w-3xl mb-10">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              Press & Outside Articles
            </p>
            <h2 id="outside-articles-heading" className="font-serif text-3xl text-ink mb-4">
              Community coverage and public profiles.
            </h2>
            <p className="text-ink-70 text-lg">
              Explore outside reporting, video coverage, and nonprofit profiles
              featuring WOW Center&rsquo;s work across Miami.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5" role="list">
            {outsideArticles.map((article) => (
              <li key={article.url}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-moss-light/35 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF4FA3]/35 hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
                >
                  <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                    {article.outlet}
                  </p>
                  <h3 className="font-serif text-xl text-ink leading-snug mb-5">
                    {article.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm font-700 text-moss group-hover:underline underline-offset-4">
                    Open link
                    <ExternalLink size={15} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-ink-40 mt-8">
            Media inquiries:{" "}
            <a href="mailto:press@wowcentermiami.org" className="text-moss underline underline-offset-4">
              press@wowcentermiami.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
