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
                GROUP PROJECT · Founder & Team Lead · Team of 5
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                My Entrepreneurship class required a real product. I proposed a
                coconut beverage business. My lecturer immediately pushed back:
                &quot;You&apos;re a CS student — you should build an app.&quot;
                I didn&apos;t argue. Instead, I spent three weeks testing the
                idea: recipe testing, customer surveys, and honest feedback from
                people outside the team. I came back to the lecturer with data,
                not opinions. This time, she said yes.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                I treated this like a product launch, not a class project.
                Before pitching anything, I needed evidence. I asked: is there
                actually a gap here? Who buys this? What would make them choose
                us over something else? I assigned each team member a specific
                validation task — surveys, competitor analysis, taste tests with
                strangers. Once we had real answers, I compiled everything into
                a business proposal backed by actual data. Leading a team of
                five taught me something no class ever could.
                Each person had a different energy level, a different level of
                initiative, and a different idea of what &apos;doing enough&apos;
                meant. I had to figure out how to channel each person&apos;s
                strengths at the right moment — and how to keep the team moving
                forward without losing anyone along the way. Clarity of direction
                matters more than enthusiasm. If you&apos;ve committed, you finish.
              </p>

              {/* WHAT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                A coconut beverage business built completely from scratch — from
                testing recipes at home to standing at a booth in front of
                competition judges. The product line: coconut water, coconut
                milk drink, coconut syrup, and iced coconut. Simple, real, and
                validated by actual customers before it ever reached a stage.
              </p>

              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT I DID
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Tested and refined the product recipe independently until it
                  was genuinely good
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Assigned validation tasks to teammates so every decision was
                  backed by data, not guesswork
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Brought the validated results back to the lecturer and got the
                  green light
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Led a team of five through the entire competition process from
                  proposal to presentation day
                </li>
              </ul>

              {/* IMPACT */}
              <div className="border border-[#2A2A2A] rounded-lg bg-[#111111] p-6 mb-8">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5F5F5] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Top 10 Finalist — Business Proposal Competition
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  BINUS Entrepreneurship Festival 2025/2026
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  The only CS team competing against business school students
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Proved that purpose-driven thinking works outside of
                  technology too
                </li>
              </ul>
              </div>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Validate first, pitch second — never the other way around
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Leading a team means keeping things moving even when not
                  everyone is at full energy
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Asking &apos;who is this actually for?&apos; works whether
                  you&apos;re building software or a food product
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  You don&apos;t need permission to start something — you need
                  evidence that it&apos;s worth starting
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Every team has unequal energy — your job as a leader is not
                  to fix that, but to work with it
                </li>
              </ul>

              {/* Quote highlight */}
              <div className="border-l-2 border-[#222222] pl-4 py-1">
                <p className="text-lg text-[#F5F5F5] font-bold italic">
                  &quot;Proof that I don&apos;t only build with code — I build
                  with purpose, whatever the medium.&quot;
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="order-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
