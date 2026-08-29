import React from "react";
import Image from "next/image";

import { workExperience, earlierCareer, education } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-10 md:mt-14 grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 max-w-5xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={12000 + card.id * 1500}
            borderRadius="1.5rem"
            // MovingBorders hardcodes md:col-span-2, which would make each card
            // span the whole two-column grid and stack them.
            containerClassName="md:col-span-1"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.5rem * 0.96)`,
            }}
            // MovingBorders centres its content; with differing bullet counts that
            // pushes each card's header to a different height, so top-align instead.
            className="text-white border-slate-800 items-start justify-start"
          >
            <article className="flex flex-col gap-4 p-6 md:p-8 text-left w-full">
              <header className="flex items-start gap-4">
                <Image
                  src={card.thumbnail}
                  alt={`${card.company} logo`}
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-xl font-bold leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-purple text-sm md:text-base font-medium mt-1">
                    {card.company}
                    <span className="text-white-200"> • {card.location}</span>
                  </p>
                  <p className="text-white-200 text-xs md:text-sm mt-1">
                    {card.period}
                  </p>
                </div>
              </header>
              <ul className="space-y-2 text-sm md:text-base text-white-100 list-disc pl-5 marker:text-purple">
                {card.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          </Button>
        ))}
      </div>

      {/* Education and the pre-tech career: enough to close the timeline
          without competing with the engineering roles above. */}
      <div className="mt-8 md:mt-10 grid gap-6 md:gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(12,14,35,0.6)] to-[rgba(4,7,29,0.6)] p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">
            Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.id}>
                <p className="text-sm md:text-base font-semibold text-white">
                  {item.school}
                </p>
                <p className="text-xs md:text-sm text-white-100 mt-0.5">
                  {item.qualification}
                </p>
                <p className="text-xs text-white-200 mt-0.5">
                  {item.period} • {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[rgba(12,14,35,0.6)] to-[rgba(4,7,29,0.6)] p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">
            Before tech
          </h3>
          <p className="mt-3 text-xs md:text-sm text-white-200 leading-relaxed">
            Six years in client-facing roles — the reason I&apos;m comfortable
            talking to stakeholders, not just to a terminal.
          </p>
          <ul className="mt-4 space-y-4">
            {earlierCareer.map((item) => (
              <li key={item.id}>
                <p className="text-sm md:text-base font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-white-100 mt-0.5">
                  {item.company}
                </p>
                <p className="text-xs text-white-200 mt-0.5">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
