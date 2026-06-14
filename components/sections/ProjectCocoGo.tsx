"use client";

import Divider from "@/components/ui/Divider";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectCocoGo() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section
      id="cocogo"
      className="py-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div ref={revealRef} className="reveal">
          <span className="block font-display font-black text-section-number text-[#333333] leading-none">
            4
          </span>

          <h2 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-2 title-hover">
            COCOGO
          </h2>

          <p className="text-lg text-[#888888] mb-8">
            Coconut Beverage Startup
          </p>

          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {/* Left */}
            <div className="order-1">
              <p className="text-xs text-[#888888] uppercase tracking-[0.08em] mb-8">
                Founder & Team Lead · Team of 5
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                Nobody at BINUS sold coconut-based drinks. I noticed the gap,
                and I personally love coconut. My Entrepreneurship class
                required a real product — so I proposed it. My lecturer
                immediately pushed back: &quot;You&apos;re a CS student, you
                should build an app.&quot; I didn&apos;t argue. I went and
                validated it first.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                Market validation → Recipe testing → Customer surveys →
                Competitive analysis → Business proposal → Competition
              </p>

              {/* WHAT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                A coconut beverage business built from scratch — from testing
                recipes at home to presenting a full business proposal in front
                of competition judges.
              </p>

              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT I DID
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Independently tested and refined the product recipe
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Assigned market validation tasks to teammates to confirm the
                  gap assumption with data
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Presented findings back to the lecturer and got approved
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Led a team of 5 through the full BPC competition process
                </li>
              </ul>

              {/* IMPACT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  BPC Finalist — Top 10
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Business Proposal Competition
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  BINUS Entrepreneurship Festival 2025/2026
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Proved that a CS student can build and validate a non-tech
                  business from a real market gap
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Certificate awarded to all 5 team members
                </li>
              </ul>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Validation beats assumption — always test before pitching
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Leadership means carrying the team even when initiative is low
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Purpose-driven thinking works outside of tech too
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  You don&apos;t need permission to start — you need evidence
                </li>
              </ul>

              {/* Quote highlight */}
              <div className="border-l-2 border-[#222222] pl-4 py-1">
                <p className="text-lg text-[#F5F5F5] font-bold italic">
                  &quot;Proof that I don&apos;t only build with code — I build
                  with purpose.&quot;
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="order-2 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/image/cocogo/1.jpeg", alt: "CocoGo Product 1" },
                  { src: "/image/cocogo/2.jpeg", alt: "CocoGo Product 2" },
                  { src: "/image/cocogo/3.jpeg", alt: "CocoGo Product 3" },
                ].map((img) => (
                  <div
                    key={img.src}
                    className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                <Image
                  src="/image/cocogo/Sertifikat.png"
                  alt="BPC Top 10 Certificate"
                  width={800}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Badge variant="finalist">BPC FINALIST — TOP 10</Badge>
          <span className="text-sm text-[#888888]">
            BINUS Entrepreneurship Festival 2025/2026
          </span>
        </div>
      </div>

      <Divider />
    </section>
  );
}
