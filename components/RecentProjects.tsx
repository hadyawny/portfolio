"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiZod,
  SiGooglegemini,
  SiPwa,
  SiPlaywright,
} from "react-icons/si";
import { TbShieldLock } from "react-icons/tb";
import type { IconType } from "react-icons";

import { projects } from "@/data";
import ProjectGallery from "./ui/ProjectGallery";

const TECH: Record<string, { label: string; icon: IconType; color: string }> = {
  next: { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  react: { label: "React", icon: SiReact, color: "#61DAFB" },
  ts: { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  js: { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  node: { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  tailwind: { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  postgres: { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  prisma: { label: "Prisma", icon: SiPrisma, color: "#CBACF9" },
  mongodb: { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  mysql: { label: "MySQL", icon: SiMysql, color: "#4479A1" },
  zod: { label: "Zod", icon: SiZod, color: "#3E67B1" },
  gemini: { label: "Gemini API", icon: SiGooglegemini, color: "#8E7CFF" },
  authjs: { label: "Auth.js", icon: TbShieldLock, color: "#CBACF9" },
  pwa: { label: "PWA", icon: SiPwa, color: "#5A0FC8" },
  playwright: { label: "Playwright", icon: SiPlaywright, color: "#2EAD33" },
};

const RecentProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 w-full">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, projectIndex) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: (projectIndex % 2) * 0.1 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex flex-col rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[rgba(12,14,35,0.75)] to-[rgba(4,7,29,0.75)] p-4 sm:p-5 md:p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-purple/30 hover:shadow-[0_24px_60px_-20px_rgba(203,172,249,0.28)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ProjectGallery
              images={project.images}
              title={project.title}
              hovered={hoveredId === project.id}
              priority={projectIndex === 0}
            />

            <div className="flex flex-1 flex-col pt-5 sm:pt-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h2>
                {project.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    />
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-xs md:text-sm text-white-200">
                {project.role}
                {project.period && ` · ${project.period}`}
              </p>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-white-100">
                {project.des}
              </p>

              <ul className="mt-4 space-y-2" aria-label="Highlights">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-xs md:text-sm leading-relaxed text-white-200"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-purple"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`${project.title} tech stack`}
              >
                {project.stack.map((key) => {
                  const tech = TECH[key];
                  if (!tech) return null;
                  const Icon = tech.icon;
                  return (
                    <li
                      key={key}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] md:text-xs text-white-100"
                    >
                      <Icon
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: tech.color }}
                        aria-hidden="true"
                      />
                      <span>{tech.label}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple/15 border border-purple/30 px-4 py-2 text-sm font-medium text-purple transition-colors hover:bg-purple/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                >
                  Visit {new URL(project.link).hostname.replace(/^www\./, "")}
                  <FaLocationArrow className="h-3 w-3" aria-hidden="true" />
                </a>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white-100 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                  >
                    <FaGithub className="h-4 w-4" aria-hidden="true" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
