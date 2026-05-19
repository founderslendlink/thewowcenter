export interface Program {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  outcomes: string[];
  whoFor: string;
  color: string;
  vimeoId?: string;
}

export const programs: Program[] = [
  {
    slug: "art",
    name: "Art Program",
    tagline: "Creativity without limits",
    description:
      "Members explore painting, drawing, ceramics, and mixed media in a fully equipped studio. Art is both therapy and self-expression here.",
    icon: "🎨",
    outcomes: [
      "Develop fine motor skills and hand-eye coordination",
      "Build confidence through creative expression",
      "Exhibit work at annual WOW art showcase",
      "Learn ceramic, painting, and printmaking techniques",
    ],
    whoFor: "Open to all ability levels. No prior art experience required.",
    color: "bg-moss-50",
    vimeoId: "884568423",
  },
  {
    slug: "community-based-education",
    name: "Community Based Education",
    tagline: "Real world, real skills",
    description:
      "Learning doesn't stop at our doors. Members visit businesses, cultural institutions, and community spaces across Miami-Dade to build life skills in context.",
    icon: "🏙️",
    outcomes: [
      "Navigate public transportation independently",
      "Practice money management at real retail environments",
      "Build social skills in diverse community settings",
      "Access Miami's cultural and recreational resources",
    ],
    whoFor: "Members who are working toward greater community independence.",
    color: "bg-cream",
  },
  {
    slug: "culinary",
    name: "Culinary Program",
    tagline: "From kitchen to career",
    description:
      "Our culinary program teaches professional food preparation skills in a commercial kitchen setting, with pathways to employment in Miami's restaurant industry.",
    icon: "🍳",
    outcomes: [
      "Master kitchen safety and food handling certifications",
      "Prepare a range of cuisines from scratch",
      "Develop the consistency and teamwork real kitchens require",
      "Explore employment with Shake Shack, Publix, and WOW partner restaurants",
    ],
    whoFor: "Members interested in food service and culinary careers.",
    color: "bg-amber-50",
  },
  {
    slug: "life-and-community-skills",
    name: "Life & Community Skills",
    tagline: "The everyday skills that matter most",
    description:
      "Budgeting, cooking, self-advocacy, digital literacy, and personal care — the foundational skills for a full, independent life.",
    icon: "🏠",
    outcomes: [
      "Manage a personal budget and banking basics",
      "Practice healthy meal planning and preparation",
      "Build self-advocacy and communication skills",
      "Navigate technology for daily living",
    ],
    whoFor: "All members. A foundational program for independent living.",
    color: "bg-moss-50",
    vimeoId: "885226108",
  },
  {
    slug: "music-therapy",
    name: "Music Therapy",
    tagline: "Rhythm, connection, and growth",
    description:
      "Led by board-certified music therapists, this program uses rhythm, melody, and movement to support cognitive, physical, and social development.",
    icon: "🎵",
    outcomes: [
      "Improve speech and language through song and rhythm",
      "Enhance motor coordination via movement-based music activities",
      "Build social connection through group music-making",
      "Reduce anxiety and support emotional regulation",
    ],
    whoFor:
      "All ability levels. Especially beneficial for members with communication challenges.",
    color: "bg-cream",
    vimeoId: "885228903",
  },
  {
    slug: "service-club",
    name: "Service Club",
    tagline: "Giving back, belonging",
    description:
      "Members design and lead service projects that benefit the broader Miami community. Service Club builds civic identity and a sense of purpose.",
    icon: "🤝",
    outcomes: [
      "Plan and execute community service projects",
      "Build leadership and teamwork skills",
      "Develop civic pride and community identity",
      "Forge friendships across Miami neighborhoods",
    ],
    whoFor: "Members who want to make a difference beyond our walls.",
    color: "bg-amber-50",
  },
  {
    slug: "social-services",
    name: "Social Services",
    tagline: "Support that follows you home",
    description:
      "Our social work team connects members and families with housing resources, benefits navigation, crisis support, and long-term care planning.",
    icon: "💼",
    outcomes: [
      "Navigate APD waivers and public benefits",
      "Connect with housing, healthcare, and transportation resources",
      "Access crisis intervention and mental health referrals",
      "Receive individualized case management",
    ],
    whoFor: "All members and their families. Confidential and free.",
    color: "bg-moss-50",
  },
  {
    slug: "speech-and-occupational-therapy",
    name: "Speech & Occupational Therapy",
    tagline: "Clinical support, measurable progress",
    description:
      "Licensed therapists provide individualized speech-language and occupational therapy sessions, with goals tied directly to each member's personal growth plan.",
    icon: "🗣️",
    outcomes: [
      "Improve articulation, fluency, and conversational skills",
      "Build fine motor skills for daily tasks and employment",
      "Develop adaptive strategies for sensory challenges",
      "Track measurable progress with licensed clinicians",
    ],
    whoFor:
      "Members with speech, language, or fine motor support needs. Referral from intake team.",
    color: "bg-cream",
  },
  {
    slug: "special-olympics",
    name: "Special Olympics",
    tagline: "Miami's athletes. Miami's champions.",
    description:
      "WOW Center is an official Special Olympics Florida program site. Members train and compete in swimming, bocce, athletics, and more.",
    icon: "🏅",
    outcomes: [
      "Train with certified coaches in multiple sports",
      "Compete at local, state, and national Special Olympics events",
      "Build physical fitness, sportsmanship, and team spirit",
      "Represent WOW Center and Miami-Dade at competitions",
    ],
    whoFor: "Members ages 8+ with an intellectual disability.",
    color: "bg-amber-50",
  },
  {
    slug: "sports-and-fitness",
    name: "Sports & Fitness",
    tagline: "Strong bodies, strong lives",
    description:
      "Yoga, fitness training, group sports, and adaptive movement keep members healthy and energized. Our facility is fully accessible and equipment-equipped.",
    icon: "⚽",
    outcomes: [
      "Build cardiovascular fitness and strength",
      "Learn yoga and mindfulness practices",
      "Participate in team sports and group games",
      "Develop healthy exercise habits for life",
    ],
    whoFor: "All members. Programs are adapted for every ability level.",
    color: "bg-moss-50",
    vimeoId: "884946665",
  },
  {
    slug: "wow-workforce",
    name: "WOW Workforce",
    tagline: "Real jobs. Real paychecks. Real dignity.",
    description:
      "WOW Workforce is our flagship employment program, placing members in paid positions with Miami employers including Shake Shack, Publix, Ritz-Carlton, and Brightline.",
    icon: "💼",
    outcomes: [
      "Complete job readiness training and interview prep",
      "Earn competitive wages at partner employers",
      "Receive on-site job coaching for 90+ days",
      "Build a career track with long-term employment support",
    ],
    whoFor:
      "Members ages 21+ who are ready to pursue competitive employment.",
    color: "bg-cream",
  },
  {
    slug: "wellness",
    name: "Wellness & Movement",
    tagline: "Whole-person health",
    description:
      "From adaptive yoga to nutrition education, our wellness program addresses the whole person — mental, physical, and emotional health.",
    icon: "🌿",
    outcomes: [
      "Practice adaptive yoga and relaxation techniques",
      "Learn nutrition basics and healthy cooking",
      "Develop stress management and coping skills",
      "Access holistic health screenings and referrals",
    ],
    whoFor: "All members. Many tracks available at different ability levels.",
    color: "bg-amber-50",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
