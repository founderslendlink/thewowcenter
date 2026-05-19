import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Story: ${slug.replaceAll("-", " ")} | WOW Center Miami` };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-white border-b border-cream-dark">
        <div className="container-xl py-3">
          <ol className="flex items-center gap-2 text-sm font-sans text-ink-70">
            <li><Link href="/" className="hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/stories" className="hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">Stories</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink font-600 capitalize">{slug.replaceAll("-", " ")}</li>
          </ol>
        </div>
      </nav>

      <article className="py-16 bg-white" aria-labelledby="story-heading">
        <div className="container-xl max-w-2xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Member Story</p>
          <h1 id="story-heading" className="font-serif text-ink mb-8">
            {slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <div className="h-72 bg-moss-50 rounded-2xl mb-10 flex items-center justify-center" aria-label="Story photo placeholder">
            <span className="text-moss/20 text-8xl font-serif italic">W</span>
          </div>
          <div className="prose prose-lg max-w-none text-ink-70 space-y-5">
            <p>
              This is a placeholder story page. When content is ready, it will be
              populated from Sanity CMS with the full story, member photos (with
              signed releases), and program context.
            </p>
            <p>
              Each story page is structured to meet WCAG 2.2 AA accessibility
              standards — with descriptive alt text, logical heading hierarchy,
              and proper reading order for screen reader users.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-cream-dark flex flex-wrap gap-4">
            <Button href="/stories" variant="secondary" size="md">← All Stories</Button>
            <Button href="/donate" variant="primary" size="md">Support stories like this →</Button>
          </div>
        </div>
      </article>
    </>
  );
}
