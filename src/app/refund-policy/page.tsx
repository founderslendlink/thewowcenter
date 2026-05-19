import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Refund Policy | WOW Center Miami",
  description: "Refund policy placeholder for WOW Center Miami.",
};

export default function RefundPolicyPage() {
  return (
    <section className="py-20 bg-white" aria-labelledby="refund-heading">
      <div className="container-xl max-w-3xl">
        <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
          Legal
        </p>
        <h1 id="refund-heading" className="font-serif text-ink mb-6">
          Refund Policy
        </h1>
        <div className="space-y-5 text-ink-70 text-lg leading-relaxed">
          <p>
            Final refund policy copy should be reviewed and approved by WOW
            Center before public launch.
          </p>
          <p>
            Donations and eligible refunds should be handled through the
            organization&rsquo;s existing donation platform or the appropriate
            external store/event system.
          </p>
          <p>
            This website does not process donation, store, event, pledge, or
            sponsorship payments directly.
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
