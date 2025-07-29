"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load heavy components
const Grid = dynamic(() => import("@/components/Grid"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">Loading...</div>
  ),
});
const Footer = dynamic(() => import("@/components/Footer"));
// const Clients = dynamic(() => import("@/components/Clients"));
const Approach = dynamic(() => import("@/components/Approach"));
const Experience = dynamic(() => import("@/components/Experience"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        {/* <Clients /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
