import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { LINKS } from "@/lib/links";
import { socialLinks } from "@/lib/social";

const footerSections = [
  {
    heading: "Programs",
    links: [
      { label: "Art Program", href: "/programs/art" },
      { label: "Culinary", href: "/programs/culinary" },
      { label: "Music Therapy", href: "/programs/music-therapy" },
      { label: "WOW Workforce", href: "/programs/wow-workforce" },
      { label: "Special Olympics", href: "/programs/special-olympics" },
      { label: "All Programs", href: "/programs" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: LINKS.donate },
      { label: "Events", href: "/events" },
      { label: "Volunteer", href: LINKS.volunteer },
      { label: "Partner With Us", href: LINKS.volunteer },
      { label: "Building on a Dream", href: "/donate/building-on-a-dream" },
      { label: "Shop", href: LINKS.shop },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Impact", href: "/about/impact" },
      { label: "Team & Board", href: "/team/leadership" },
      { label: "News", href: "/news" },
      { label: "Contact", href: LINKS.contact },
    ],
  },
  {
    heading: "Families",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "How to Apply", href: LINKS.admissions },
      { label: "Admissions FAQ", href: "/admissions/faq" },
      { label: "Schedule a Tour", href: "/admissions/tour" },
      { label: "Social Services", href: "/programs/social-services" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-moss-deep text-white" role="contentinfo">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(260px,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block rounded-sm bg-white p-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-4"
              aria-label="WOW Center Miami - home"
            >
              <Image
                src="/logo.svg"
                alt="WOW Center - Empowering people with disabilities"
                width={330}
                height={68}
                className="w-auto"
                style={{ width: "285px", height: "auto" }}
              />
            </Link>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              Empowering Miami adults with developmental disabilities through
              community, creativity, and careers since 1972.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=11450+SW+79+Street+Miami+FL+33173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/75 hover:text-white transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
              >
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                11450 SW 79 Street, Miami, FL 33173
              </a>
              <a
                href="tel:+13057261766"
                className="flex items-center gap-2 text-white/75 hover:text-white transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
              >
                <Phone size={15} aria-hidden="true" />
                (305) 726-1766
              </a>
              <a
                href="mailto:hello@wowcentermiami.org"
                className="flex items-center gap-2 text-white/75 hover:text-white transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
              >
                <Mail size={15} aria-hidden="true" />
                hello@wowcentermiami.org
              </a>
            </div>
            <div className="flex items-center gap-3" aria-label="WOW Center social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WOW Center on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white/80 transition-colors hover:border-white/40 hover:bg-white/14 hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
                >
                  <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <nav
              key={section.heading}
              aria-label={`${section.heading} links`}
              className="border-t border-white/10 pt-5 sm:border-t-0 sm:pt-0"
            >
              <h2
                className="mb-4 uppercase text-white"
                style={{
                  fontFamily: "Manrope, system-ui, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  lineHeight: 1.2,
                  color: "#ffffff",
                }}
              >
                {section.heading}
              </h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={`${section.heading}-${link.label}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>
              © {year} The WOW Center. All rights reserved.{" "}
              <span className="ml-1">501(c)(3) nonprofit organization.</span>
            </p>
            <nav aria-label="Legal and accessibility links">
              <ul className="flex flex-wrap items-center gap-4">
                {[
                  { label: "Privacy Policy", href: LINKS.privacyPolicy },
                  { label: "Refund Policy", href: LINKS.refundPolicy },
                  { label: "Accessibility", href: "/accessibility" },
                  { label: "Contact", href: LINKS.contact },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
