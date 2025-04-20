"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gruvbox-bg0 flex flex-col min-h-screen p-30">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
