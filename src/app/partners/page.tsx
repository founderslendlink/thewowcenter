import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BriefcaseBusiness, CheckCircle, GraduationCap, Handshake, Quote, UsersRound } from "lucide-react";
import { LINKS } from "@/lib/links";
import { communityPartners } from "@/components/sections/PartnerLogos";

export const metadata: Metadata = {
  title: "Able Together | Partner With WOW Center Miami",
  description:
    "Able Together invites Miami industry leaders to partner with The WOW Center and foster a more inclusive community for individuals with developmental disabilities.",
};

const initiatives = [
  {
    number: "01",
    icon: UsersRound,
    title: "Equip Your Team",
    text: "Host a disability sensitivity training for your staff or incorporate disability sensitivity material into your onboarding process.",
    cta: "Learn About Training",
    href: LINKS.contact,
  },
  {
    number: "02",
    icon: Handshake,
    title: "Implement Supportive Practices",
    text: "Commit to implementing a supportive practice within your industry.",
    cta: "Review supportive practices",
    href: "https://abletogether.miami/wp-content/uploads/2025/02/WOW-Center-2025-Supportive-Practices.pdf",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Hire or Host an Intern",
    text: "For one day, consider hosting a WOW intern at your business.",
    cta: "Host an Intern",
    href: LINKS.volunteer,
  },
];

const benefits = [
  "Ongoing support from the WOW Team to guide your inclusion efforts.",
  "Recognition as an Official Partner on this website.",
  "A window decal and welcome packet to showcase your commitment to inclusion.",
];

const testimonials = [
  {
    name: "Shake Shack",
    color: "bg-[#f7eadf]",
    quote:
      "Where do I begin? Since you started with Shake Shack you have brought so much to our team. Your smile, positivity, enthusiasm, and joy is so contagious. It is not about the work at Shake Shack. It is always about our people. You are the definition of our culture. That's what we call a 51%er. Thank you for all that you do.",
  },
  {
    name: "Empower Farms",
    color: "bg-[#e6f0e5]",
    quote:
      "It is a pleasure and an honor to work with our teammates from the WOW. They are friendly and motivated, and always put their hearts into their work. They understand the value of teamwork, and take pride in what they do. Our teammates from the WOW Center are an integral part of our team, and we are grateful to each one of them for all that they do!",
  },
  {
    name: "Azucar",
    color: "bg-[#f5e9f1]",
    quote:
      "Working with Jessica and Darren has been such an amazing journey. To watch them grow and develop new skills has not only been a great experience, but inspiring. We are so grateful to The WOW Center for everything they do to ensure individuals with disabilities have the support they need to maintain employment in the community.",
  },
];

const videos = [
  {
    title: "WOW DD24 Testimonial 01",
    src: "https://player.vimeo.com/video/921174573?h=a5d05154c0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "WOW DD24 Testimonial 02",
    src: "https://player.vimeo.com/video/921186687?h=a4752f63ce&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "Able Together partner testimonial",
    src: "https://player.vimeo.com/video/921186914?h=e232faf9fc&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    title: "WOW DD24 Testimonial 04",
    src: "https://player.vimeo.com/video/921187046?badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

const faqs = [
  {
    question: "What is Supported Employment?",
    answer:
      "Supported employment is about supporting people with significant disabilities and neurodiversity as they enter the nation's labor force. We accomplish this through on-site support, training, skill development, and job matching through a process called Discovery.",
  },
  {
    question: "What is the WOW Work Experience Program?",
    answer:
      "The WOW Work Experience Program is a branch of The WOW Center dedicated to serving neurodiverse individuals as they find job placement through training, internship opportunities, and paid employment support by our team of highly qualified Job Coaches and Developers.",
  },
  {
    question: "What is an unpaid internship?",
    answer:
      "The goal of our unpaid internships is to help adults with developmental and intellectual disabilities identify their personal vocational tracks and then train in those fields with the goal of achieving their employment of choice.",
  },
  {
    question: "How long do unpaid internships last?",
    answer:
      "Unpaid internships can be one-day, three-day, or intensive six-week internships. They are a great opportunity for both the individual and the job site to find out if they are a good fit for each other.",
  },
  {
    question: "What is a Job Coach?",
    answer:
      "A job coach is a professional who helps prepare people for employment, support them during employment, and offer support and guidance to their employers. As individuals gain proficiency in their job, the job coach should begin to back away.",
  },
  {
    question: "Will the job coach always be present during the internship phase?",
    answer:
      "Yes. A job coach will, initially, be present with the individual while they work. For the duration of the internship, individuals will be working closely with their job coach, who will be on hand and on site to facilitate their mastery of job tasks. Once the job coach is confident that the individual has mastered the job, we will begin to reduce our coaching services based on the individual's need for support.",
  },
  {
    question: "Can we hire an individual who has done an internship with us?",
    answer:
      "Yes. In fact, many of the individuals who participate in our internship program are hired by their internship site. Paid employment is our ultimate goal.",
  },
  {
    question: "What happens when I hire someone with a disability?",
    answer:
      "Most job sites that hire individuals with disabilities see a marked rise in team spirit and get to experience the many advantages of working in a neuro-diverse environment.",
  },
  {
    question: "Will my Worker's Comp and General Liability insurance go up if I hire an individual with a disability?",
    answer: "No. Your General Liability and Worker's Compensation insurances will stay the same.",
  },
  {
    question: "How do individuals get to and from work?",
    answer:
      "Our interns and employees tend to use Special Transport Services (STS) to get to and from work independently.",
  },
  {
    question: "Can I ask an individual what their disability is?",
    answer:
      "According to HIPAA laws, it is illegal to ask someone what their disability is. However, they are free to self-identify and talk about their disability. Only pertinent PSI can be shared with providers of services, not employers.",
  },
  {
    question: "Can I ask their job coach what their disability is?",
    answer:
      "When it comes to HIPAA law, only pertinent PSI can be shared with providers. Job coaches are not able to share medical information unless the individual has self-identified, and it is relevant to their job and affects their ability to perform their job.",
  },
  {
    question: "What can I offer? How can I help?",
    answer:
      "You can help by offering an internship opportunity to an individual. Join us on our mission to make Miami more inclusive.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-moss-deep text-white py-24 lg:py-28"
        aria-labelledby="able-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-top opacity-[0.86]"
          style={{ backgroundImage: "url('/wow-photos/able-together-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-moss-deep/32" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-deep/92 via-moss-deep/58 to-moss-deep/18" aria-hidden="true" />

        <div className="container-xl relative z-10">
          <div className="max-w-4xl">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
              Able Together
            </p>
            <h1 id="able-heading" className="font-serif mb-6" style={{ color: "#ffffff" }}>
              Inclusion starts with an open door.
            </h1>
            <p className="text-white/88 text-xl leading-relaxed max-w-3xl">
              The WOW Center seeks to collaborate with industry leaders like you
              to foster a more inclusive community for individuals with
              developmental disAbilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Become a Partner
              </Button>
              <Button href="#initiatives" variant="ghost" size="lg" className="text-white border-white/45 hover:bg-white/10 hover:text-white">
                See the Initiatives
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="participate-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10 items-center">
            <div className="max-w-3xl">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                How to Participate
              </p>
              <h2 id="participate-heading" className="font-serif text-3xl text-ink mb-5">
                Move from awareness to action.
              </h2>
              <p className="text-ink-70 text-lg leading-relaxed">
                As Developmental Disabilities Awareness Month begins, we invite
                industry leaders to help build a more inclusive community by
                making meaningful adjustments in their industry to support
                individuals and families.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-dark bg-cream p-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">Step 1</p>
                  <h3 className="font-serif text-2xl text-ink mb-2">Choose any 2 of 3</h3>
                  <p className="text-ink-70">Choose any 2 of the 3 partnership initiatives below.</p>
                </div>
                <div className="rounded-xl bg-moss text-white p-6 shadow-sm">
                  <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">Step 2</p>
                  <h3 className="font-serif text-2xl mb-2" style={{ color: "#ffffff" }}>Submit your pledge</h3>
                  <p className="text-white/78">Submit your pledge to become an official partner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="initiatives" className="py-16 bg-cream" aria-labelledby="initiatives-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-start">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Initiatives
              </p>
              <h2 id="initiatives-heading" className="font-serif text-3xl text-ink mb-5">
                Choose the commitments that fit your workplace.
              </h2>
              <p className="text-ink-70 leading-relaxed">
                Your pledge commits to transforming your business into an
                inclusive and supportive space for individuals with disabilities.
              </p>
              <p className="mt-4 rounded-xl border border-moss-light/35 bg-white px-4 py-3 text-sm font-700 leading-relaxed text-ink">
                Complete two initiatives to become an official Able Together partner.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
              {initiatives.map((item) => (
                <li key={item.title} className="rounded-2xl border border-moss-light/35 bg-white p-6 flex flex-col shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#FF4FA3]/35 hover:shadow-md">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-serif text-5xl text-amber">{item.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-50">
                      <item.icon size={26} className="text-moss" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-70 leading-relaxed flex-1">{item.text}</p>
                  <Button href={item.href} variant="secondary" size="sm" className="mt-6 w-fit" target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {item.cta}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="benefits-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_430px] gap-10 items-center">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Partner Benefits
              </p>
              <h2 id="benefits-heading" className="font-serif text-3xl text-ink mb-6">
                You bring the commitment. WOW brings the support.
              </h2>
              <ul className="space-y-4" role="list">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={22} className="text-amber shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-ink-70 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                  Become a Partner
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream shadow-sm">
              <Image
                src="/wow-photos/shake-shack-service.png"
                alt="A WOW member smiling while handing over a Shake Shack bag."
                fill
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="current-partners-heading">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Official Partners
              </p>
              <h2 id="current-partners-heading" className="font-serif text-3xl text-ink">
                Miami businesses already opening doors.
              </h2>
            </div>
            <BriefcaseBusiness size={42} className="text-amber hidden lg:block" aria-hidden="true" />
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 items-center" role="list">
            {communityPartners.map((partner) => (
              <li
                key={partner.name + partner.logo}
                className="flex h-24 items-center justify-center rounded-xl border border-cream-dark bg-white p-4 shadow-sm"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={70}
                  className="h-auto max-h-14 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="testimonials-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-start mb-10">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Partner Testimonials
              </p>
              <h2 id="testimonials-heading" className="font-serif text-3xl text-ink mb-4">
                What partners say after saying yes.
              </h2>
              <p className="text-ink-70">
                These stories show what inclusion looks like when employers,
                staff, and WOW members build opportunity together.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
              {testimonials.map((item) => (
                <li key={item.name} className={`${item.color} rounded-2xl border border-cream-dark p-6 shadow-sm`}>
                  <Quote size={28} className="text-amber mb-5" aria-hidden="true" />
                  <h3 className="font-sans font-700 uppercase tracking-wide text-moss mb-4">{item.name}</h3>
                  <p className="text-sm text-ink-70 leading-relaxed">{item.quote}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-moss-deep p-5 sm:p-7">
            <div className="mb-6">
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-2">
                Video Stories
              </p>
              <h3 className="font-serif text-2xl" style={{ color: "#ffffff" }}>
                Hear from Able Together partners.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {videos.map((video) => (
                <div key={video.src} className="rounded-2xl bg-white/8 p-3 shadow-sm">
                  <div className="relative mx-auto aspect-[9/16] max-h-[430px] overflow-hidden rounded-xl bg-black">
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-moss text-white" aria-labelledby="official-partner-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-center">
            <div className="max-w-3xl">
              <h2 id="official-partner-heading" className="font-serif text-3xl mb-5" style={{ color: "#ffffff" }}>
                Become an Official Partner
              </h2>
              <p className="text-white/82 text-lg leading-relaxed">
                Our goal is to equip leaders like you to transition from
                awareness to action, fostering inclusion in all facets of
                community life.
              </p>
            </div>
            <div className="lg:text-right">
              <Button href={LINKS.volunteer} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="miami-impact-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/wow-photos/community-treats.png"
                alt="WOW members enjoying smoothies and a treat together."
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-6xl text-amber mb-5">270,000+</p>
              <h2 id="miami-impact-heading" className="font-serif text-3xl text-ink mb-6">
                Miami has over 270,000 individuals with disABILITIES that we get to serve.
              </h2>
              <Button href={LINKS.volunteer} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                Submit my pledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="container-xl">
          <div className="max-w-3xl mb-8">
            <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
              FAQ
            </p>
            <h2 id="faq-heading" className="font-serif text-3xl text-ink">
              Common partner questions.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-cream-dark bg-cream p-5">
                <summary className="cursor-pointer font-sans font-700 text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-ink-70 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
