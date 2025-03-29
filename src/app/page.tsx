"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <main className="bg-gruvbox-bg0 flex flex-col min-h-screen p-24">
      <Navbar />
      <Hero />
    </main>
  );
}
