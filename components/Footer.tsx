import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full pt-12 md:pt-16 lg:pt-20 pb-10 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none"
      >
        <Image
          src="/footer-grid.svg"
          alt=""
          fill
          className="opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center px-4 relative z-10">
        <h2 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-md md:max-w-2xl">
          Reach out and let&apos;s discuss how I can help you ship.
        </p>
        <a href="mailto:hadyawny5@gmail.com" aria-label="Email Hady">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center md:gap-0 gap-6 px-4 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          © {new Date().getFullYear()} Hady Awny
        </p>

        <ul className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <li key={info.id}>
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.label}
                className="w-11 h-11 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              >
                <Image
                  src={info.img}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
