import { FaLocationArrow } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="pb-10 md:pb-16 pt-24 md:pt-36" aria-label="Introduction">
      <div aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        aria-hidden="true"
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center items-center relative z-10 min-h-[70vh] md:min-h-[80vh]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Code&nbsp;•&nbsp;Design&nbsp;•&nbsp;Innovation
          </p>

          <TextGenerateEffect
            words="Full-Stack Developer building production-grade web apps with React, Next.js & Node.js"
            className="text-center text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-xl text-white-200">
            Hi! I&apos;m Hady, based in Cairo, Egypt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#projects") as HTMLElement | null;
                if (element) {
                  const offset = window.innerWidth < 640 ? 80 : 120;
                  window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label="Jump to projects section"
            >
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a
              href="/Hady Awny's Resume.pdf"
              download="Hady_Awny_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              aria-label="Download resume PDF"
            >
              Download Resume
              <FiDownload aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
