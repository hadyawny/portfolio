"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFlutter,
  SiPrisma,
  SiJavascript,
  SiDart,
} from "react-icons/si";
import { TbApi, TbInfinity, TbTestPipe, TbLanguage } from "react-icons/tb";
import { LuKanbanSquare } from "react-icons/lu";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; color: string };

const skillGroups: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#CBACF9" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma", icon: SiPrisma, color: "#CBACF9" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "CI/CD", icon: TbInfinity, color: "#CBACF9" },
      { name: "Agile", icon: LuKanbanSquare, color: "#CBACF9" },
      { name: "Unit Testing", icon: TbTestPipe, color: "#CBACF9" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Arabic — Native", icon: TbLanguage, color: "#CBACF9" },
      { name: "English — Fluent", icon: TbLanguage, color: "#CBACF9" },
      { name: "Spanish — Basic", icon: TbLanguage, color: "#CBACF9" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>

      <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto px-4">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(12,14,35,0.6)] to-[rgba(4,7,29,0.6)] p-5 md:p-6 hover:border-purple/30 transition-colors"
          >
            <h2 className="text-base md:text-lg font-semibold text-white mb-4">
              {group.category}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {group.items.map(({ name, icon: Icon, color }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs md:text-sm text-white-100 hover:bg-white/[0.06] transition-colors"
                >
                  <Icon
                    className="w-4 h-4 shrink-0"
                    style={{ color }}
                    aria-hidden="true"
                  />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
