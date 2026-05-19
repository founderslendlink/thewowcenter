import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy | WOW Center Miami",
  description: "Privacy policy placeholder for WOW Center Miami.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white" aria-labelledby="privacy-heading">
      <div className="container-xl max-w-3xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
          Legal
        </p>
        <h1 id="privacy-heading" className="font-serif text-ink mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-5 text-ink-70 text-lg leading-relaxed">
          <p>
            Final privacy policy copy should be reviewed and approved by WOW
            Center before public launch.
          </p>
          <p>
            This website should not collect donation payment credentials
            directly. Donations are processed through the organization&rsquo;s
            existing secure donation platform.
          </p>
          <p>
            Forms and external services may have their own privacy practices.
            Confirm the organization&rsquo;s approved policies before connecting or
            publishing final forms.
          </p>
          <p>
            Questions can be sent through the{" "}
            <Link
              href={LINKS.contact}
              className="text-moss font-700 underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
            >
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
