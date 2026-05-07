"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 mt-10 md:mt-14 w-full mx-auto max-w-7xl place-items-center">
        {projects.map((item) => (
          <div
            key={item.id}
            className="min-h-[26rem] sm:min-h-[28rem] lg:min-h-[30rem] w-full flex items-center justify-center"
          >
            <PinContainer
              title={item.link ? new URL(item.link).hostname : "live demo"}
              href={item.link}
            >
              <div className="relative flex flex-col w-[300px] sm:w-[340px] lg:w-[380px]">
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[240px] mb-6 overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image
                    src={item.img}
                    alt={item.imgAlt || item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>

                <h2 className="font-bold lg:text-xl md:text-lg text-base line-clamp-2 leading-snug">
                  {item.title}
                </h2>

                <p
                  className="lg:text-base text-sm font-light line-clamp-2 mt-2"
                  style={{ color: "#BEC1DD" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <ul className="flex items-center" aria-label="Tech stack">
                    {item.iconLists.map((icon, index) => (
                      <li
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-10 h-10 flex justify-center items-center overflow-hidden"
                        style={{ transform: `translateX(-${8 * index}px)` }}
                      >
                        <Image
                          src={icon}
                          alt=""
                          aria-hidden="true"
                          width={28}
                          height={28}
                          className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
                        />
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple text-sm md:text-base hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded whitespace-nowrap"
                    aria-label={`Open Live of ${item.title}`}
                  >
                    <span>Live</span>
                    <FaLocationArrow color="#CBACF9" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
