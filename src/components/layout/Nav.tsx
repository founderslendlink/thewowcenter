"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { LINKS } from "@/lib/links";

const navLinks = [
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "All Programs", href: "/programs" },
      { label: "Art", href: "/programs/art" },
      { label: "Culinary", href: "/programs/culinary" },
      { label: "Music Therapy", href: "/programs/music-therapy" },
      { label: "WOW Workforce", href: "/programs/wow-workforce" },
      { label: "Special Olympics", href: "/programs/special-olympics" },
      { label: "Speech & OT", href: "/programs/speech-and-occupational-therapy" },
    ],
  },
  {
    label: "About",
    href: "/about/our-story",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Impact", href: "/about/impact" },
      { label: "Building on a Dream", href: "/building-on-a-dream" },
      { label: "Board of Directors", href: "/team/board" },
      { label: "Leadership & Staff", href: "/team/leadership" },
    ],
  },
  { label: "Stories", href: "/stories" },
  {
    label: "Able Together",
    href: "/partners",
    children: [
      { label: "Able Together", href: "/partners" },
      { label: "Volunteer", href: "/partners/volunteer" },
    ],
  },
  { label: "Shop", href: LINKS.shop },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = mobileMenuRef.current?.querySelector<HTMLElement>("a, button");
    el?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveDropdown(null);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
      )}
      role="banner"
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-18 gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber focus-visible:outline-offset-4 rounded-sm"
            aria-label="WOW Center Miami - home"
          >
            <Image
              src="/logo.svg"
              alt="WOW Center - Empowering people with disabilities"
              width={330}
              height={68}
              priority
              className="w-auto"
              style={{ width: "285px", height: "auto" }}
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg font-sans font-600 text-sm transition-colors",
                      "hover:bg-moss-50 hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                      pathname.startsWith(link.href) ? "text-moss" : "text-ink"
                    )}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        activeDropdown === link.label && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-cream-dark pt-4 pb-2 z-50"
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-4 py-2 text-sm font-sans hover:bg-moss-50 hover:text-moss focus-visible:outline-none focus-visible:bg-moss-50 focus-visible:text-moss transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-sans font-600 text-sm transition-colors",
                    "hover:bg-moss-50 hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                    pathname.startsWith(link.href) ? "text-moss" : "text-ink"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href={LINKS.admissions} variant="secondary" size="sm" target="_blank" rel="noopener noreferrer">
              Apply for Admissions
            </Button>
            <Button href={LINKS.donate} variant="primary" size="sm">
              Donate today
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-moss-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-cream-dark"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
        >
          <div className="container-xl py-6 space-y-1">
            <a
              href="tel:+13057261766"
              className="flex items-center gap-2 px-4 py-3 text-moss font-sans font-700 text-base rounded-lg hover:bg-moss-50 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
            >
              <Phone size={16} aria-hidden="true" />
              (305) 726-1766
            </a>

            <hr className="border-cream-dark my-2" />

            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 font-sans font-700 text-base rounded-lg transition-colors hover:bg-moss-50 hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber",
                    pathname.startsWith(link.href) ? "text-moss bg-moss-50" : "text-ink"
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm font-sans text-ink-70 rounded-lg hover:bg-moss-50 hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <hr className="border-cream-dark my-2" />

            <div className="flex flex-col gap-3 pt-2">
              <Button href={LINKS.admissions} variant="secondary" size="md" className="w-full" target="_blank" rel="noopener noreferrer">
                Apply for Admissions
              </Button>
              <Button href={LINKS.donate} variant="primary" size="md" className="w-full">
                Donate today
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
