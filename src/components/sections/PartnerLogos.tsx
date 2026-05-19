import Image from "next/image";
import Link from "next/link";

export const communityPartners = [
  { name: "Publix", logo: "/partners/publix.png" },
  { name: "Shake Shack", logo: "/partners/shake-shack.jpg" },
  { name: "Sprouts Farmers Market", logo: "/partners/sprouts-farmers-market.png" },
  { name: "The Ritz-Carlton Key Biscayne", logo: "/partners/ritz-carlton-key-biscayne.png" },
  { name: "Biltmore Hotel", logo: "/partners/biltmore-hotel.jpg" },
  { name: "Azucar Ice Cream", logo: "/partners/azucar-ice-cream.png" },
  { name: "Empower Farms", logo: "/partners/empower-farms.png" },
  { name: "Los Ranchos Steakhouse", logo: "/partners/los-ranchos-steakhouse.png" },
  { name: "Casaplanta Garden Center", logo: "/partners/casaplanta-garden-center.png" },
  { name: "CMO Real Estate Law", logo: "/partners/cmo-real-estate-law.png" },
  { name: "Miami-Dade Commissioner District 6", logo: "/partners/miami-dade-commissioner-d6-1.png" },
  { name: "Miami-Dade Commissioner District 6", logo: "/partners/miami-dade-commissioner-d6-2.png" },
];

export function PartnerLogos() {
  return (
    <section className="py-16 bg-white border-y border-cream-dark" aria-labelledby="partners-heading">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 id="partners-heading" className="font-sans font-700 text-xs uppercase tracking-widest text-ink-70">
            Our Community Partners
          </h2>
          <Link
            href="/partners"
            className="font-sans font-700 text-sm text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm shrink-0"
          >
            Become a partner →
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {communityPartners.map((partner) => (
            <div
              key={partner.name + partner.logo}
              className="flex items-center justify-center p-3 rounded-xl bg-cream border border-cream-dark h-20"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
