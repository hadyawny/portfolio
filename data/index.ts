export const navItems: {
  name: string;
  link: string;
  hideOnMobile?: boolean;
}[] = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills", hideOnMobile: true },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact", hideOnMobile: true },
  { name: "Resume", link: "#resume" },
];

export const gridItems = [
  {
    id: 1,
    title: "I ship products end to end — design, database, deploy.",
    description: "What I actually do",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Cairo-based — overlapping EU and US hours.",
    description: "Where I am",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Next.js, TypeScript, Node and PostgreSQL — every day.",
    description: "My core stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Hiring, or have something to build?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: number;
  title: string;
  /** One line on what it is and who it's for. */
  des: string;
  role: string;
  period?: string;
  status?: string;
  /** Keys resolved against TECH in components/RecentProjects.tsx */
  stack: string[];
  /** Concrete engineering decisions — the part a reviewer actually reads. */
  highlights: string[];
  images: ProjectImage[];
  link: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "BingeLogs",
    des: "A TV show tracker built as a landing spot for TV Time's users after it shut down — import your export and pick up exactly where you left off.",
    role: "Solo — product, design & engineering",
    period: "2026",
    status: "Live",
    stack: [
      "next",
      "react",
      "ts",
      "tailwind",
      "postgres",
      "prisma",
      "authjs",
      "pwa",
    ],
    highlights: [
      "Wrote a TV Time importer that parses ZIP, CSV and JSON exports, resolves titles to TMDB IDs in batches, and bulk-inserts watch history — with a reset action when an import goes wrong.",
      "“Up Next” resolves the first gap in broadcast order rather than the highest episode watched, so imported and out-of-order histories land on the right episode.",
      "Per-episode logging, spoiler-gated comments and web push notifications, all installable as a PWA.",
    ],
    images: [
      {
        src: "/bingelogs-1.webp",
        alt: "BingeLogs Up Next row showing the next unwatched episode for six tracked shows",
        caption: "Up Next",
      },
      {
        src: "/bingelogs-2.webp",
        alt: "BingeLogs watchlist of 260 shows split into watching, planned, completed and dropped",
        caption: "Watchlist",
      },
      {
        src: "/bingelogs-3.webp",
        alt: "BingeLogs running as an installable PWA on three phone screens",
        caption: "Installable PWA",
      },
    ],
    link: "https://bingelogs.com",
  },
  {
    id: 2,
    title: "AulaPath",
    des: "A guided, gamified language-learning app — five courses across Spanish, French, Japanese, Korean and English, each following its own national framework end to end.",
    role: "Solo — product, curriculum tooling & engineering",
    period: "2026",
    status: "Beta",
    stack: [
      "next",
      "ts",
      "postgres",
      "prisma",
      "tailwind",
      "zod",
      "gemini",
      "playwright",
    ],
    highlights: [
      "One JSON-driven runner renders all 15 exercise types; grading applies per-language tolerance passes — accents (ES/FR), spacing (KO), kana (JA) — instead of marking near-misses wrong.",
      "No language is hardcoded anywhere in app logic: courses, levels and units all flow from the data model, so a new language is content plus a seed script.",
      "Live voice tutor on Gemini's audio Live API, with short-lived tokens minted server-side so the API key never reaches the browser.",
    ],
    images: [
      {
        src: "/aulapath-1.webp",
        alt: "AulaPath landing page explaining its structured curriculum approach",
        caption: "Landing page",
      },
      {
        src: "/aulapath-2.webp",
        alt: "AulaPath vocabulary flashcards grid for spaced-repetition review",
        caption: "Spaced repetition",
      },
      {
        src: "/aulapath-3.webp",
        alt: "AulaPath learning path, vocabulary hub and a lesson exercise on three phone screens",
        caption: "On mobile",
      },
    ],
    link: "https://aulapath.com",
  },
  {
    id: 3,
    title: "Dimensions Games",
    des: "A board-games marketplace with product browsing, ordering, authentication and an admin dashboard behind it.",
    role: "Full-stack development",
    status: "Live",
    stack: ["next", "tailwind", "postgres"],
    highlights: [
      "Storefront covering catalogue browsing, filtering, wishlist, cart and checkout over a PostgreSQL-backed product catalogue.",
      "Role-based access so admins manage catalogue, stock and orders from a single interface.",
    ],
    images: [
      {
        src: "/dimensions-2.webp",
        alt: "Dimensions Games homepage with a featured board game hero carousel",
        caption: "Storefront",
      },
      {
        src: "/dimensions-1.webp",
        alt: "Dimensions Games catalogue with quick filters, price and player-count filtering",
        caption: "Catalogue & filters",
      },
      {
        src: "/dimensions-3.webp",
        alt: "Dimensions Games featured products grid with prices and add-to-cart actions",
        caption: "Featured games",
      },
    ],
    link: "https://dimensionsgames.fun/",
  },
  {
    id: 4,
    title: "CloudGate",
    des: "A platform for subscribing to and managing cloud services from multiple vendors in one unified dashboard.",
    role: "Full-stack development",
    status: "Live",
    stack: ["next", "node", "postgres", "mysql"],
    highlights: [
      "Integrated multiple vendor APIs behind a consistent internal REST layer, so every provider surfaces the same way in one dashboard.",
      "Subscription and service management across providers, with invite-based onboarding and authenticated accounts.",
    ],
    images: [
      {
        src: "/cloudgate-1.webp",
        alt: "CloudGate landing page headlined Boost Your Automation Engine",
        caption: "Landing page",
      },
      {
        src: "/cloudgate-2.webp",
        alt: "CloudGate marketplace listing three-tier bundles across Azure, GCP, AWS and Alibaba Cloud",
        caption: "Multi-vendor marketplace",
      },
    ],
    link: "https://cloudgate.opex.com.sa/",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Obelion.ai",
    location: "Cairo, Egypt",
    title: "Full Stack Developer",
    period: "Jan 2025 – Present",
    bullets: [
      "Build and maintain production-grade full-stack applications with React.js, Next.js and Node.js.",
      "Design and integrate REST APIs that support scalable, high-performance product features.",
      "Work with cross-functional teams to deliver maintainable, production-ready releases.",
    ],
    thumbnail: "/obelion.webp",
  },
  {
    id: 2,
    company: "Obelion.ai",
    location: "Cairo, Egypt",
    title: "Front End Intern",
    period: "Nov 2024 – Dec 2024",
    bullets: [
      "Built responsive UI components in React.js and Next.js from Figma designs.",
      "Integrated REST endpoints into frontend views, handling loading, error and empty states.",
    ],
    thumbnail: "/obelion.webp",
  },
];

/** Pre-tech roles — kept brief; they explain the timeline and the client-facing skills. */
export const earlierCareer = [
  {
    id: 1,
    title: "Senior Property Consultant",
    company: "Flagsquare Egypt",
    period: "Nov 2021 – Feb 2024",
  },
  {
    id: 2,
    title: "Customer Relationship Officer",
    company: "Arab Bank",
    period: "Oct 2018 – Oct 2021",
  },
];

export const education = [
  {
    id: 1,
    school: "Information Technology Institute (ITI)",
    qualification: "Front End and Mobile Development Track",
    period: "May 2024 – Oct 2024",
    location: "Cairo, Egypt",
  },
  {
    id: 2,
    school: "Helwan University",
    qualification: "B.Sc. Commerce (English Section), Accounting",
    period: "Sep 2014 – May 2018",
    location: "Cairo, Egypt",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/hadyawny/",
    label: "GitHub profile",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/hadyawny/",
    label: "LinkedIn profile",
  },
];
