"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Approximate continent dot positions on a 200x110 viewBox (Equirectangular-ish)
const CONTINENT_DOTS: [number, number][] = [
  // North America
  [38, 38], [44, 35], [50, 38], [42, 42], [48, 44], [54, 42], [46, 48], [52, 50],
  // South America
  [62, 62], [66, 66], [62, 70], [64, 76], [60, 80], [66, 82],
  // Europe
  [98, 32], [104, 30], [102, 36], [108, 34], [96, 38],
  // Africa
  [102, 50], [108, 54], [104, 60], [110, 64], [106, 70], [100, 56], [112, 58],
  // Asia
  [122, 32], [130, 30], [138, 32], [144, 36], [134, 40], [128, 38], [142, 44], [150, 38],
  // Australia
  [156, 70], [162, 72], [160, 76], [166, 74],
];

// Three "active" pulse markers — clients you can reach (Cairo, EU, Americas)
const PULSE_NODES: { cx: number; cy: number; delay: string }[] = [
  { cx: 105, cy: 50, delay: "0s" },     // Cairo / North Africa
  { cx: 100, cy: 32, delay: "0.7s" },   // Europe
  { cx: 46, cy: 42, delay: "1.4s" },    // North America
];

const TimeZoneVisual = () => (
  <div
    className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none"
    aria-hidden="true"
  >
    <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[200/110]">
      <div className="absolute inset-0 rounded-2xl bg-purple/10 blur-3xl" />
      <svg
        viewBox="0 0 200 110"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {CONTINENT_DOTS.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.4"
            fill="#CBACF9"
            fillOpacity="0.55"
          />
        ))}
        {PULSE_NODES.map((p, i) => (
          <g key={`p-${i}`}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r="3"
              fill="#CBACF9"
              className="motion-safe:animate-ping origin-center"
              style={{ animationDelay: p.delay, animationDuration: "2.4s" }}
            />
            <circle cx={p.cx} cy={p.cy} r="1.8" fill="#FFFFFF" />
          </g>
        ))}
        <path
          d="M 46 42 Q 75 10 105 50"
          fill="none"
          stroke="#CBACF9"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
        <path
          d="M 100 32 Q 102 40 105 50"
          fill="none"
          stroke="#CBACF9"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  </div>
);

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = "hadyawny5@gmail.com";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // silently fail
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt=""
              aria-hidden="true"
              fill
              className={cn(imgClassName, "object-cover object-center")}
              priority={id === 1}
            />
          )}
        </div>
        <div className="absolute right-0 -bottom-5">
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              aria-hidden="true"
              width={220}
              height={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue-500/10"
          />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <TimeZoneVisual />}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email copied!" : "Copy my email address"}
                icon={copied ? <FaCheck /> : <IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
