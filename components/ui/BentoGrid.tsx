"use client";

import { useEffect, useState } from "react";
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

const WORK_START = 9;
const WORK_END = 18;

const ZONES = [
  { label: "Cairo", tz: "Africa/Cairo", isHome: true },
  { label: "London", tz: "Europe/London", isHome: false },
  { label: "New York", tz: "America/New_York", isHome: false },
];

/** Minutes a zone is ahead of UTC, DST included, for the given instant. */
const offsetMinutes = (timeZone: string, date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date);

  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  // Intl renders midnight as hour 24; Date.UTC wants 0.
  const hour = get("hour") % 24;
  const asUTC = Date.UTC(get("year"), get("month") - 1, get("day"), hour, get("minute"));
  return Math.round((asUTC - date.getTime()) / 60000);
};

const localTime = (timeZone: string, date: Date) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

/** A local-hours window as 0-100% segments on a shared UTC axis, split if it wraps midnight. */
const toSegments = (startLocal: number, endLocal: number, offsetH: number) => {
  const start = ((startLocal - offsetH) % 24 + 24) % 24;
  const end = start + (endLocal - startLocal);
  return end <= 24
    ? [{ left: (start / 24) * 100, width: ((end - start) / 24) * 100 }]
    : [
        { left: (start / 24) * 100, width: ((24 - start) / 24) * 100 },
        { left: 0, width: ((end - 24) / 24) * 100 },
      ];
};

type ZoneRow = {
  label: string;
  isHome: boolean;
  time: string;
  segments: { left: number; width: number }[];
};

/**
 * Live working-hours chart on a shared UTC axis. Each row is a city's 09:00-18:00
 * local window, so where a row sits inside the highlighted Cairo band *is* the
 * overlap — the thing anyone hiring across time zones actually wants to know.
 */
const TimeZoneVisual = () => {
  const [rows, setRows] = useState<ZoneRow[] | null>(null);
  const [homeBand, setHomeBand] = useState<{ left: number; width: number }[]>([]);
  const [nowPct, setNowPct] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const built = ZONES.map((zone) => {
        const offsetH = offsetMinutes(zone.tz, now) / 60;
        return {
          label: zone.label,
          isHome: zone.isHome,
          time: localTime(zone.tz, now),
          segments: toSegments(WORK_START, WORK_END, offsetH),
        };
      });
      setRows(built);
      setHomeBand(built.find((r) => r.isHome)?.segments ?? []);
      setNowPct(
        ((now.getUTCHours() * 60 + now.getUTCMinutes()) / 1440) * 100
      );
    };

    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative z-10 mt-4 w-full max-w-sm" aria-hidden="true">
      <div
        className={cn(
          "relative rounded-xl border border-white/10 bg-black/25 p-3 backdrop-blur-sm transition-opacity duration-500",
          rows ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Cairo's working window, carried behind every row */}
        <div className="pointer-events-none absolute inset-y-2 left-3 right-3">
          {homeBand.map((seg, i) => (
            <div
              key={i}
              className="absolute inset-y-0 rounded-sm bg-purple/[0.13]"
              style={{ left: `${seg.left}%`, width: `${seg.width}%` }}
            />
          ))}
          <div
            className="absolute inset-y-0 w-px bg-white/45"
            style={{ left: `${nowPct}%` }}
          />
        </div>

        <ul className="relative space-y-2">
          {(rows ?? ZONES.map((z) => ({ ...z, time: "--:--", segments: [] }))).map(
            (row) => (
              <li key={row.label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "w-[4.5rem] shrink-0 text-[10px] leading-none",
                    row.isHome ? "font-semibold text-white" : "text-white-200"
                  )}
                >
                  {row.label}
                </span>

                <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                  {row.segments.map((seg, i) => (
                    <span
                      key={i}
                      className={cn(
                        "absolute inset-y-0 rounded-full",
                        row.isHome ? "bg-purple" : "bg-white/45"
                      )}
                      style={{ left: `${seg.left}%`, width: `${seg.width}%` }}
                    />
                  ))}
                </span>

                <span
                  className={cn(
                    "w-9 shrink-0 text-right text-[10px] leading-none tabular-nums",
                    row.isHome ? "text-white" : "text-white-200"
                  )}
                >
                  {row.time}
                </span>
              </li>
            )
          )}
        </ul>

        <p className="relative mt-2 text-[9px] leading-none text-white-200">
          Working hours, 09:00–18:00 local
        </p>
      </div>
    </div>
  );
};

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
              // The optimizer rejects SVGs unless dangerouslyAllowSVG is on, and
              // it cannot compress them anyway - serve them straight from /public.
              unoptimized={img.endsWith(".svg")}
              // Without `sizes` a fill image defaults to 100vw, so the optimizer
              // is asked for a 1920px+ render of a tile that is never wider than
              // ~770px. That is wasted work on a self-hosted optimizer.
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 768px"
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
              unoptimized={spareImg.endsWith(".svg")}
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
