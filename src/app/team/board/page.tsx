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
    <li className="bg-cream rounded-2xl p-6 border border-cream-dark flex flex-col items-start">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-moss-50 mb-4 shrink-0">
        <Image
          src={photo}
          alt={name}
          width={80}
          height={80}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h2 className="font-serif text-lg text-ink mb-1 leading-snug">{name}</h2>
      {role && (
        <p className="font-sans text-xs uppercase tracking-widest text-amber mb-2">{role}</p>
      )}
      <p className="text-sm text-ink-70 leading-relaxed">{title}</p>
      <p className="text-sm font-600 text-ink-70">{org}</p>
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

            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-ink shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1124332904?dnt=1"
                  title="WOW Center board leadership video"
                  className="h-full w-full"
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {executiveBoard.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-cream" aria-labelledby="directors-heading">
        <div className="container-xl">
          <h2 id="directors-heading" className="font-sans font-700 text-xs uppercase tracking-widest text-ink-40 mb-8">Board Members</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {boardMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
