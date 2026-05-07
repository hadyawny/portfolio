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
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MovieMania - Movie Discovery App",
    des: "Flutter mobile app for discovering movies with detailed information, ratings, and reviews. Available on Google Play Store.",
    img: "/moviemania.webp",
    imgAlt: "MovieMania movie discovery app screenshot",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg"],
    link: "https://play.google.com/store/apps/details?id=com.hadyawny.moviemania&hl=en&gl=US",
  },
  {
    id: 2,
    title: "Dimensions Games - Board Games Marketplace",
    des: "Board games marketplace featuring product browsing, ordering, authentication, and admin dashboard management.",
    img: "/dimensionsgames.webp",
    imgAlt: "Dimensions Games board game marketplace screenshot",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/postgresql.jpg"],
    link: "https://dimensionsgames.fun/",
  },
  {
    id: 3,
    title: "CloudGate - Cloud Storage Platform",
    des: "A comprehensive cloud storage solution with advanced file management, user authentication, and multi-database architecture.",
    img: "/cloudGate.webp",
    imgAlt: "CloudGate cloud storage platform screenshot",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/mysql.svg",
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
    period: "Dec 2024 – Present",
    bullets: [
      "Develop and maintain scalable production-grade full-stack applications using React.js, Next.js, and Node.js.",
      "Design and integrate REST APIs supporting scalable, high-performance applications.",
      "Collaborate with cross-functional teams to deliver maintainable, production-ready features.",
    ],
    thumbnail: "/exp1.svg",
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
