import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-10 relative overflow-hidden" id="contact">
      {/* background grid - improved mobile handling */}
      <div className="w-full absolute left-0 -bottom-72 md:-bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center px-4">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-md md:max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:hadyawny5@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center md:gap-0 gap-6 px-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2025 Hady Awny
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            const content = (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icon" width={20} height={20} />
              </div>
            );

            return info.url ? (
              <a
                key={info.id}
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
