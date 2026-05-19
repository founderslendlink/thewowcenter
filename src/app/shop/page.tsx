import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/lib/links";
import { ExternalLink, Palette, Shirt, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop | WOW Center Miami",
  description:
    "Shop WOW Center Miami merchandise and member-made goods through the official Shopify store.",
};

const shopHighlights = [
  {
    icon: Palette,
    title: "Member-made goods",
    text: "Explore creative work and art-inspired items connected to WOW Center programs.",
  },
  {
    icon: Shirt,
    title: "WOW merchandise",
    text: "Find apparel and branded items that help spread the WOW Center mission.",
  },
  {
    icon: ShoppingBag,
    title: "Secure Shopify store",
    text: "Purchases are completed through the existing Shopify store, not on this website.",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="shop-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
                Shop
              </p>
              <h1 id="shop-heading" className="font-serif text-ink mb-6">
                Support WOW through the official store.
              </h1>
              <p className="text-ink-70 text-xl leading-relaxed">
                Visit the WOW Shop to browse merchandise and member-inspired goods.
                All purchases are handled through the organization&rsquo;s existing
                Shopify store.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={LINKS.shop} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                  Visit the WOW Shop <ExternalLink size={18} aria-hidden="true" />
                </Button>
                <Button href={LINKS.shop} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                  Shop on Shopify
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/wow-photos/ice-cream-service.png"
                alt="A WOW member smiling behind an ice cream counter."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="shop-support-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-10">
            <h2 id="shop-support-heading" className="font-serif text-2xl text-ink mb-4">
              Every purchase is part of the mission.
            </h2>
            <p className="text-ink-70">
              The official store remains the source of truth for available
              products, inventory, cart, and purchase flow.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {shopHighlights.map((item) => (
              <li
                key={item.title}
                className="bg-cream rounded-2xl p-7 border border-cream-dark"
              >
                <item.icon size={32} className="text-amber mb-5" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-70 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: "/wow-photos/shake-shack-service.png",
                alt: "A WOW member smiling while handing over a Shake Shack bag.",
              },
              {
                src: "/wow-photos/community-treats.png",
                alt: "Two WOW members enjoying smoothies and a treat together.",
              },
              {
                src: "/wow-photos/culinary-dessert.png",
                alt: "A WOW member smiling while preparing dessert in a kitchen.",
              },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href={LINKS.shop} variant="moss" size="lg" target="_blank" rel="noopener noreferrer">
              Support Through the Store <ExternalLink size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
