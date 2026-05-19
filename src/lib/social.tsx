import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement>;

function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 8.2V6.7c0-.7.5-.9 1-.9h1.6V3.1L14.8 3c-2.6 0-4 1.6-4 4.4v.8H8.6v3h2.2V21h3.3v-9.8h2.6l.4-3h-3.6Z" />
    </svg>
  );
}

function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
    </svg>
  );
}

function XIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 10.4 21.4 2h-1.8l-6.4 7.3L8.1 2H2.2l7.8 11.1L2.2 22h1.8l6.8-7.8 5.5 7.8h5.9L14 10.4Zm-2.4 2.7-.8-1.1L4.5 3.3h2.7l5 7 .8 1.1 6.6 9.2h-2.7l-5.3-7.5Z" />
    </svg>
  );
}

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/WOWCenterMiami",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wowcentermiami/",
    icon: InstagramIcon,
  },
  {
    label: "X",
    href: "https://x.com/wowcentermiami",
    icon: XIcon,
  },
];
