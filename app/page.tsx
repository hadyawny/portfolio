"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Grid = dynamic(() => import("@/components/Grid"), {
  loading: () => (
    <div className="h-[60vh] flex items-center justify-center text-white-200">
      Loading…
    </div>
  ),
});
const Skills = dynamic(() => import("@/components/Skills"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
