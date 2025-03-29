"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gruvbox-bg0 flex flex-col min-h-screen p-30">
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
