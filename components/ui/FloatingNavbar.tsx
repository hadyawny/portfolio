"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FiDownload } from "react-icons/fi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    hideOnMobile?: boolean;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // Enhanced responsive design for navbar
          "flex max-w-fit md:min-w-fit fixed z-[5000] top-4 sm:top-6 md:top-10 inset-x-0 mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full md:rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center gap-3 sm:gap-4 md:gap-5",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center text-neutral-600 dark:hover:text-purple hover:text-neutral-500 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple",
              navItem.hideOnMobile ? "hidden sm:flex" : "flex"
            )}
            onClick={(e) => {
              e.preventDefault();

              // Handle Resume download
              if (navItem.link === "#resume") {
                const link = document.createElement('a');
                link.href = "/Hady%20Awny's%20Resume.pdf";
                link.download = "Hady_Awny_Resume.pdf";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return;
              }

              // Handle normal smooth scroll for other nav items
              const element = document.querySelector(
                navItem.link
              ) as HTMLElement;
              if (element) {
                const elementPosition = element.offsetTop;
                // Responsive offset: smaller on mobile, larger on desktop
                const isMobile = window.innerWidth < 640;
                const offset = isMobile ? 80 : 120;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="text-xs sm:text-sm !cursor-pointer flex items-center gap-1">
              {navItem.name}
              {navItem.link === "#resume" && (
                <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </span>
          </Link>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
