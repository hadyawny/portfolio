"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

import type { ProjectImage } from "@/data";
import { cn } from "@/lib/utils";

const DWELL_MS = 2800;
const SWIPE_THRESHOLD_PX = 40;

type Props = {
  images: ProjectImage[];
  /** Used to build accessible labels and to prioritise the first card's LCP image. */
  title: string;
  /** True while the pointer is anywhere over the owning card. */
  hovered?: boolean;
  priority?: boolean;
};

/**
 * Screenshot gallery for a project card.
 *
 * Advances on its own while the card is "active" — hovered on pointer devices,
 * simply on screen on touch ones, where there is no hover to key off. Hover is
 * tracked on the whole card rather than the image, since the pointer usually
 * rests over the text while reading. Dots and swipe always work, and autoplay
 * is off entirely under prefers-reduced-motion.
 */
export const ProjectGallery = ({
  images,
  title,
  hovered = false,
  priority = false,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [canHover, setCanHover] = useState(true);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);

  const count = images.length;
  const canAutoplay = count > 1 && !reduceMotion;
  const active = canHover ? hovered : inView;

  // Manual changes bump this, restarting the dwell below — otherwise the running
  // interval could fire moments after a click and skip straight past the frame
  // the viewer just chose.
  const [interactionTick, setInteractionTick] = useState(0);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
      setInteractionTick((t) => t + 1);
    },
    [count]
  );

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  // On touch devices there is no hover, so on-screen stands in for "active".
  useEffect(() => {
    const node = containerRef.current;
    if (!node || canHover || count < 2) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [canHover, count]);

  useEffect(() => {
    if (!active || !canAutoplay) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      DWELL_MS
    );
    return () => window.clearInterval(id);
  }, [active, canAutoplay, count, interactionTick]);

  // Back to the opening frame once the pointer leaves, so the card always
  // presents the same first impression.
  useEffect(() => {
    if (canHover && !hovered) setIndex(0);
  }, [canHover, hovered]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  // Commit on move rather than release: a horizontal drag on touch often ends in
  // pointercancel (the browser claiming the gesture) and never fires pointerup.
  // Crossing the threshold mid-drag also just feels more responsive.
  const handlePointerMove = (e: React.PointerEvent) => {
    const start = pointerStartX.current;
    if (start === null) return;
    const delta = e.clientX - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    pointerStartX.current = null;
    go(index + (delta < 0 ? 1 : -1));
  };

  const endSwipe = () => {
    pointerStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (count < 2) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      // pan-y keeps vertical page scrolling native while leaving horizontal
      // gestures to the swipe handler below — without it the browser claims the
      // drag for panning and pointerup never fires.
      className="relative w-full select-none touch-pan-y overflow-hidden rounded-xl bg-[#0a0d24] ring-1 ring-white/[0.08]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endSwipe}
      onPointerCancel={endSwipe}
      onPointerLeave={endSwipe}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={i === 0 ? image.alt : ""}
            aria-hidden={i !== 0}
            // Without this the browser starts a native image drag, which both
            // cancels the swipe gesture and leaves a ghost image under the cursor.
            draggable={false}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
            priority={priority && i === 0}
            className={cn(
              "object-cover object-top transition-[opacity,transform] duration-500 ease-out",
              "motion-reduce:transition-none motion-reduce:!scale-100",
              i === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
            )}
          />
        ))}

        {/* Keeps light screenshots (AulaPath, Dimensions) from blowing out
            against the dark card, and gives the caption something to sit on. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
        />

        {count > 1 && (
          <>
            <div className="pointer-events-none absolute left-3 bottom-3 sm:left-4 sm:bottom-4">
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md sm:text-xs motion-safe:animate-in motion-safe:fade-in"
              >
                {images[index].caption}
              </span>
            </div>

            <div className="pointer-events-none absolute right-3 top-3 sm:right-4 sm:top-4">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white/80 backdrop-blur-md">
                {index + 1} / {count}
              </span>
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="flex items-center justify-center gap-2 py-3"
          role="group"
          aria-label={`${title} screenshots`}
        >
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${image.caption}`}
              aria-current={i === index}
              className="group/dot rounded-full p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            >
              <span
                className={cn(
                  "block h-1.5 overflow-hidden rounded-full transition-all duration-300 motion-reduce:transition-none",
                  i === index
                    ? "w-6 bg-purple/30"
                    : "w-1.5 bg-white/25 group-hover/dot:bg-white/50"
                )}
              >
                {i === index && (
                  <span
                    // Keyed on both so the fill restarts on an autoplay tick and
                    // on a manual pick of the frame already showing.
                    key={`${index}-${interactionTick}`}
                    className="block h-full w-full origin-left rounded-full bg-purple"
                    style={
                      active && canAutoplay
                        ? {
                            animation: `gallery-dot-fill ${DWELL_MS}ms linear forwards`,
                          }
                        : undefined
                    }
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
