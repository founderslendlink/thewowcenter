import Link from "next/link";

export function MemberStoryFeature() {
  return (
    <section
      className="relative overflow-hidden bg-moss-deep text-white py-20"
      aria-labelledby="story-feature-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,184,200,0.20),transparent_32%),radial-gradient(circle_at_82%_82%,rgba(255,79,163,0.16),transparent_34%)]" aria-hidden="true" />
      <div className="container-xl">
        <div className="relative max-w-3xl mx-auto text-center space-y-8">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-moss-light">
            Voices
          </p>

          <blockquote>
            <p
              className="font-serif text-3xl lg:text-4xl leading-snug text-white italic"
              id="story-feature-heading"
            >
              &ldquo;WOW gave my brother a life I didn&rsquo;t know was possible.
              He has a job. He has friends. He has a Tuesday ceramics class
              he refuses to miss.&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <p className="font-sans font-700 text-white text-base">Mariana D.</p>
                <p className="font-sans text-white/60 text-sm">
                  Sister of a member · WOW family since 2016
                </p>
              </cite>
            </footer>
          </blockquote>

          <Link
            href="/stories"
            className="inline-flex items-center gap-2 font-sans font-700 text-sm text-[#FF8BC3] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-moss-light rounded-sm"
          >
            Read more community stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
