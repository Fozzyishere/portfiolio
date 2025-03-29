'use client'

import React from 'react';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-100 flex flex-col min-h-screen p-24">
      <Navbar />
      <Hero />
    </main>
  );
}
