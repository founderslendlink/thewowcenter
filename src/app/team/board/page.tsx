import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Board of Directors | WOW Center Miami",
  description: "Meet the WOW Center Miami 2025–2026 Board of Directors guiding our mission to empower adults with developmental disabilities.",
};

const executiveBoard = [
  {
    name: "Alejandro M. Jerez, CFP®, AWMA®, CPWA®",
    role: "Chair of the Board",
    title: "Managing Director",
    org: "Valoris Wealth Management",
    photo: "/board/alejandro-jerez.jpg",
  },
  {
    name: "Alfredo Reynoso, CPA",
    role: "Vice Chair",
    title: "Partner",
    org: "Veridian Accountants & Advisors Miami",
    photo: "/board/alfredo-reynoso.jpg",
  },
  {
    name: "Beatriz Vazquez",
    role: "Treasurer",
    title: "Tax Managing Director",
    org: "BDO USA LLP",
    photo: "/board/beatriz-vazquez.jpg",
  },
  {
    name: "Angel A. Acevedo",
    role: "Secretary",
    title: "Co-Founder + Creative Director",
    org: "ACVDO Co.",
    photo: "/board/angel-acevedo.jpg",
  },
  {
    name: "Alejandra Argudin",
    role: "Immediate Past Chair",
    title: "Chief Executive Officer",
    org: "Miami Parking Authority",
    photo: "/board/alejandra-argudin.jpg",
  },
];

const boardMembers = [
  {
    name: "Kelly Blanco",
    title: "Principal",
    org: "Heart Vision Media / TV Presenter",
    photo: "/board/kelly-blanco.jpg",
  },
  {
    name: "Ray Castellanos",
    title: "Principal",
    org: "Authentic Construction",
    photo: "/board/ray-castellanos.jpg",
  },
  {
    name: "Giovanni Castro",
    title: "Public Policy Manager, South Region",
    org: "Amazon",
    photo: "/board/giovanni-castro.jpg",
  },
  {
    name: "Isabel C. Diaz",
    title: "Partner",
    org: "Holland & Knight LLP",
    photo: "/board/isabel-diaz.jpg",
  },
  {
    name: "Senator Anitere Flores",
    title: "Director of Development",
    org: "ACE Foundation",
    photo: "/board/anitere-flores.jpg",
  },
  {
    name: "Monica Quirch",
    title: "Owner",
    org: "Monica Quirch Design",
    photo: "/board/monica-quirch.jpg",
  },
  {
    name: "Guillermo Santa Cruz",
    title: "President",
    org: "Homestead-Miami Speedway",
    photo: "/board/guillermo-santa-cruz.jpg",
  },
  {
    name: "Katherine San Pedro",
    title: "Partner",
    org: "Ballard Partners",
    photo: "/board/katherine-san-pedro.jpg",
  },
  {
    name: "Nati Wong",
    title: "Director of Advancement",
    org: "Florida Christian School",
    photo: "/board/nati-wong.jpg",
  },
  {
    name: "Georgina Gonzalez-Robiou",
    title: "Assistant Vice President, Marketing & Communications",
    org: "Baptist Health",
    photo: "/board/georgina-gonzalez-robiou.jpg",
  },
];

function MemberCard({ name, role, title, org, photo }: { name: string; role?: string; title: string; org: string; photo: string }) {
  return (
    <li className="bg-white rounded-2xl overflow-hidden border border-cream-dark shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-moss-50 shrink-0">
        <Image
          src={photo}
          alt={name}
          width={480}
          height={360}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        {role && (
          <span className="inline-block font-sans text-[10px] font-700 uppercase tracking-widest text-amber mb-2">
            {role}
          </span>
        )}
        <h2 className="font-serif text-base text-ink leading-snug mb-2">{name}</h2>
        <div className="mt-auto pt-3 border-t border-cream-dark">
          <p className="text-xs text-ink-70 leading-relaxed">{title}</p>
          <p className="text-xs font-700 text-moss mt-0.5">{org}</p>
        </div>
      </div>
    </li>
  );
}

export default function BoardPage() {
  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="board-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Team</p>
          <h1 id="board-heading" className="font-serif text-ink mb-6">Board of Directors</h1>
          <p className="text-ink-70 text-xl">Volunteer leaders who steward WOW Center's mission and resources. 2025–2026.</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="board-video-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-10 items-center">
            <div>
              <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-3">
                Board Leadership
              </p>
              <h2 id="board-video-heading" className="font-serif text-3xl text-ink mb-4">
                A closer look at WOW Center&rsquo;s mission.
              </h2>
              <p className="text-ink-70 leading-relaxed">
                Hear how leadership, families, and community partners help keep
                WOW Center moving forward for Miami adults with developmental
                disabilities.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg border border-cream-dark">
              <div className="relative aspect-video bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1124332904?dnt=1&transparent=0"
                  title="WOW Center board leadership video"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="exec-heading">
        <div className="container-xl">
          <h2 id="exec-heading" className="font-sans font-700 text-xs uppercase tracking-widest text-ink-40 mb-8">Executive Board Members</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" role="list">
            {executiveBoard.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="directors-heading">
        <div className="container-xl">
          <h2 id="directors-heading" className="font-sans font-700 text-xs uppercase tracking-widest text-ink-40 mb-8">Board Members</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5" role="list">
            {boardMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
