import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
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
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.5rem * 0.96)`,
            }}
            className="text-white border-slate-800"
          >
            <article className="flex flex-col gap-4 p-6 md:p-8 text-left w-full">
              <header className="flex items-start gap-4">
                <Image
                  src={card.thumbnail}
                  alt={`${card.company} logo`}
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-xl font-bold leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-purple text-sm md:text-base font-medium mt-1">
                    {card.company}
                    <span className="text-white-200">
                      {" "}
                      • {card.location}
                    </span>
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
    </section>
  );
};

export default Experience;
