export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
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
    id: 3,
    title: "My tech stack",
    description: "Always learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on CloudGate Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
    img: "/moviemania.png",
    iconLists: ["/flutter.svg", "/firebase.svg", "/dart.svg"],
    link: "https://play.google.com/store/apps/details?id=com.hadyawny.moviemania&hl=en&gl=US",
  },
  {
    id: 2,
    title: "Tripma - Flight Booking Website",
    des: "Modern flight booking platform built during my internship. Features flight search, booking, and user management with responsive design.",
    img: "/tripma.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/mongodb.svg"],
    link: "https://tripma-six.vercel.app/",
  },
  {
    id: 3,
    title: "CloudGate - Cloud Storage Platform",
    des: "A comprehensive cloud storage solution with advanced file management, user authentication, and multi-database architecture. Currently in development.",
    img: "/cloudGate.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb.svg",
      "/mysql.svg",
    ],
    link: "https://github.com/hadyawny/",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Working with developers who demonstrate strong technical skills and dedication to continuous learning is always impressive. The ability to work across multiple technology stacks while maintaining code quality shows great potential.",
//     name: "Sarah Chen",
//     title: "Senior Developer at Tech Solutions Inc.",
//   },
//   {
//     quote:
//       "The attention to detail and problem-solving approach demonstrated in recent projects shows promising development skills. Looking forward to seeing continued growth in full-stack development.",
//     name: "Ahmed Hassan",
//     title: "Technical Lead at Innovation Labs",
//   },
//   {
//     quote:
//       "Great enthusiasm for learning new technologies and implementing best practices. The projects showcase a solid understanding of modern development frameworks and user experience design.",
//     name: "Emily Rodriguez",
//     title: "Frontend Architect at Digital Dynamics",
//   },
// ];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Building scalable web applications using React.js, Next.js, and Node.js with a focus on performance and clean code.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Replace with Obelion.ai logo if available
  },
  {
    id: 2,
    title: "Software Developer Intern",
    desc: "Worked on real-world projects using React.js, Next.js, and Node.js. Collaborated with a team to develop and optimize user interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg", // Replace with Obelion.ai logo if available
  },
  {
    id: 3,
    title: "Front-End Developer Intern",
    desc: "Developed web applications using React.js and Next.js. Focused on building responsive interfaces and integrating APIs with Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg", // Replace with ITI logo if available
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/hadyawny/", // replace with your actual GitHub link
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/hadyawny/", // replace with your LinkedIn link
  },
];
