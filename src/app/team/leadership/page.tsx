import type { Metadata } from "next";
import { StaffCard } from "@/components/sections/StaffCard";

export const metadata: Metadata = {
  title: "Leadership & Staff | WOW Center Miami",
  description:
    "Meet the WOW Center Miami team — dedicated directors, program coordinators, instructors, therapists, and support staff empowering adults with developmental disabilities in Miami-Dade County since 1972.",
  keywords: [
    "WOW Center Miami staff",
    "WOW Center Miami leadership team",
    "adult day program staff Miami",
    "developmental disabilities program Miami",
    "nonprofit staff Miami-Dade",
    "WOW Center careers",
  ],
  openGraph: {
    title: "Leadership & Staff | WOW Center Miami",
    description:
      "Meet the dedicated team behind WOW Center Miami — empowering adults with developmental disabilities in Miami-Dade County since 1972.",
    type: "website",
  },
};

const leadership = [
  {
    name: "Arlene",
    title: "Executive Director",
    photo: "/staff/arlene.jpg",
  },
  {
    name: "Barby",
    title: "Director of Education and Admissions",
    photo: "/staff/barby.jpg",
  },
  {
    name: "Lourdes",
    title: "Director of Social Services and Compliance",
    photo: "/staff/lourdes.jpg",
  },
  {
    name: "Mary",
    title: "Director of HR & Processes",
    photo: "/staff/mary.jpg",
  },
  {
    name: "Jessie",
    title: "Director of Advancement & Community Impact",
    photo: "/staff/jessie.jpg",
  },
  {
    name: "Reginald",
    title: "Manager of Social Services",
    photo: "/staff/reginald.jpg",
  },
  {
    name: "Yenela",
    title: "Operations Manager",
    photo: "/staff/yenela.jpg",
  },
  {
    name: "Carolina",
    title: "Manager of Education",
    photo: "/staff/carolina.jpg",
  },
  {
    name: "Jessica B.",
    title: "Manager of Education",
    photo: "/staff/jessica-b.jpg",
  },
  {
    name: "Ashley",
    title: "Office Coordinator",
    photo: "/staff/ashley.jpg",
  },
];

const programStaff = [
  {
    name: "Natalia",
    title: "Advancement Coordinator",
    photo: "/staff/natalia.jpg",
  },
  {
    name: "Olga",
    title: "Administrative Assistant",
    photo: "/staff/olga.jpg",
  },
  {
    name: "Marda",
    title: "Case Manager",
    photo: "/staff/marda.jpg",
  },
  {
    name: "Lisa",
    title: "Social Worker",
    photo: "/staff/lisa.jpg",
  },
  {
    name: "Debbie",
    title: "Social Worker",
    photo: "/staff/debbie.jpg",
  },
  {
    name: "Rosie",
    title: "Record Management Coordinator",
    photo: "/staff/rosie.jpg",
  },
  {
    name: "Jessica M.",
    title: "Job Coach (Individualized & Enclave)",
    photo: "/staff/jessica-m.jpg",
  },
  {
    name: "Salome",
    title: "Job Coach (Supported Employment)",
    photo: "/staff/salome.jpg",
  },
  {
    name: "Sioney",
    title: "Job Coach (Individualized & Enclave)",
    photo: "/staff/sioney.jpg",
  },
  {
    name: "Emily",
    title: "Program Coordinator",
    photo: "/staff/emily.jpg",
  },
  {
    name: "Stephanie G.",
    title: "Program Coordinator",
    photo: "/staff/stephanie-g.jpg",
  },
  {
    name: "Lizbeth",
    title: "Program Instructor",
    photo: "/staff/lizbeth.jpg",
  },
  {
    name: "Claudia",
    title: "Program Instructor",
    photo: "/staff/claudia.jpg",
  },
  {
    name: "Andreina",
    title: "Program Instructor",
    photo: "/staff/andreina.jpg",
  },
  {
    name: "Abner",
    title: "Program Instructor",
    photo: "/staff/abner.jpg",
  },
  {
    name: "Erika",
    title: "Program Instructor",
    photo: "/staff/erika.jpg",
  },
  {
    name: "Stacy",
    title: "Program Instructor",
    photo: "/staff/stacy.jpg",
  },
  {
    name: "Rita",
    title: "Program Instructor",
    photo: "/staff/rita.jpg",
  },
  {
    name: "Isabella",
    title: "Program Instructor",
    photo: "/staff/isabella.jpg",
  },
  {
    name: "Willfredo",
    title: "Program Aide",
    photo: "/staff/willfredo.jpg",
  },
  {
    name: "Magaly",
    title: "Program Aide",
    photo: "/staff/magaly.jpg",
  },
  {
    name: "Lissette",
    title: "Program Aide",
    photo: "/staff/lissette.jpg",
  },
  {
    name: "Krystal",
    title: "Program Aide",
    photo: "/staff/krystal.jpg",
  },
  {
    name: "Nayelis",
    title: "Program Aide",
    photo: "/staff/nayelis.jpg",
  },
  {
    name: "Solange",
    title: "Program Aide",
    photo: "/staff/solange.jpg",
  },
  {
    name: "Stephanie K.",
    title: "Program Aide",
    photo: "/staff/stephanie-k.jpg",
  },
  {
    name: "April",
    title: "Program Aide",
    photo: "/staff/april.jpg",
  },
  {
    name: "Carlos",
    title: "Program Aide",
    photo: "/staff/carlos.jpg",
  },
  {
    name: "Giselle",
    title: "Program Aide",
    photo: "/staff/giselle.jpg",
  },
  {
    name: "Andrea",
    title: "Program Aide",
    photo: "/staff/andrea.jpg",
  },
  {
    name: "Maricel",
    title: "Personal Care Assistant",
    photo: "/staff/maricel.jpg",
  },
  {
    name: "Adriana",
    title: "Cafeteria Aide",
    photo: "/staff/adriana.jpg",
  },
];


export default function LeadershipPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="leadership-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Our Team</p>
          <h1 id="leadership-heading" className="font-serif text-ink mb-6">
            Leadership &amp; Staff
          </h1>
          <p className="text-ink-70 text-xl leading-relaxed">
            The people who show up every day to make WOW possible — directors, coordinators, instructors, therapists, and aides united by one mission.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="directors-heading">
        <div className="container-xl">
          <h2
            id="directors-heading"
            className="font-sans font-700 text-xs uppercase tracking-widest text-ink-40 mb-8"
          >
            Leadership Team
          </h2>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
            role="list"
          >
            {leadership.map((person) => (
              <StaffCard key={person.photo} {...person} large />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="staff-heading">
        <div className="container-xl">
          <h2
            id="staff-heading"
            className="font-sans font-700 text-xs uppercase tracking-widest text-ink-40 mb-8"
          >
            Program &amp; Support Staff
          </h2>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            role="list"
          >
            {programStaff.map((person) => (
              <StaffCard key={person.photo} {...person} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="join-heading">
        <div className="container-xl max-w-3xl text-center">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">
            Join Us
          </p>
          <h2 id="join-heading" className="font-serif text-3xl text-ink mb-4">
            Want to work at WOW?
          </h2>
          <p className="text-ink-70 text-lg mb-8 leading-relaxed">
            We&rsquo;re always looking for passionate people to join our team.
            Browse current openings and apply directly through our careers
            portal.
          </p>
          <a
            href="https://thewowcentermiami.bamboohr.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-moss text-white font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-moss/90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber transition-colors"
          >
            View open positions at WOW Center →
          </a>
        </div>
      </section>
    </>
  );
}
