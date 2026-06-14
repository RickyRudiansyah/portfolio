"use client";

import Divider from "@/components/ui/Divider";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Intro() {
  const revealRef = useScrollReveal(0.15);

  return (
    <section
      id="intro"
      className="pt-24 pb-[120px] md:pb-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555]">
            INTRODUCTION
          </span>
          <span className="text-[#555555] text-lg">↗</span>
        </div>

        <Divider />

        <div ref={revealRef} className="reveal mt-20">
          {/* 2-col: photo left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Photo placeholder */}
            <div className="order-2 md:order-1">
              <div className="w-full max-w-[400px] h-[500px] bg-[#1A1A1A] rounded-lg overflow-hidden relative">
                <Image
                  src="/image/profil/PP.jpeg"
                  alt="Ricky Rudiansyah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="order-1 md:order-2">
              <p className="text-xs text-[#888888] uppercase tracking-[0.08em] mb-4">
                COMPUTER SCIENCE · BINUS UNIVERSITY · AI & ROBOTICS
              </p>

              <p className="text-lg text-[#888888] mb-2">Hi, I&apos;m</p>

              <h1 className="font-display font-black text-hero leading-[0.95] tracking-tight mb-6">
                Ricky
                <br />
                Rudiansyah
              </h1>

              <p className="text-lg md:text-xl text-[#F5F5F5] font-bold italic leading-relaxed mb-6">
                &ldquo;I can&apos;t build something that doesn&apos;t matter.
                If there&apos;s no purpose yet — I&apos;ll find one.&rdquo;
              </p>

              <p className="text-base md:text-lg text-[#888888] leading-relaxed mb-8">
                I&apos;m a purpose-driven builder who starts from real human
                problems. Every project I&apos;ve worked on began with one
                question: is this actually useful to someone?
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#warkop-qr"
                  className="inline-flex items-center gap-2 text-[#F5F5F5] font-semibold text-lg group hover:gap-3 transition-all"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  View Projects
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#555555] rounded-lg text-sm text-[#888888] hover:text-[#F5F5F5] hover:border-[#888888] hover:bg-[#1A1A1A] transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
