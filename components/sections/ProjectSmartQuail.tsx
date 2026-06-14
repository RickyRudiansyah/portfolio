"use client";

import Divider from "@/components/ui/Divider";
import Tag from "@/components/ui/Tag";
import Badge from "@/components/ui/Badge";
import StatBlock from "@/components/ui/StatBlock";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectSmartQuail() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section
      id="smartquail"
      className="py-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div ref={revealRef} className="reveal">
          <span className="block font-display font-black text-section-number text-[#333333] leading-none">
            3
          </span>

          <h2 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-2 title-hover">
            SMARTQUAIL
          </h2>

          <p className="text-lg text-[#888888] mb-8">
            IoT Smart Monitoring for Quail Farms
          </p>

          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {/* Left */}
            <div className="order-1">
              <p className="text-xs text-[#888888] uppercase tracking-[0.08em] mb-8">
                Mobile Developer (Flutter) · Duo Project
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                My professor assigned us to build a smart aviary — essentially a
                sensor-equipped bird cage. I felt it had no meaningful
                real-world impact. So I researched independently: what animal,
                if given a smart monitoring system, would genuinely help
                Indonesian people? I found quail farming — an underserved market
                with no existing smart solutions and a clear research gap.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Tag>Flutter</Tag>
                <Tag>Dart</Tag>
                <Tag>Firebase Realtime DB</Tag>
                <Tag>Firebase Auth</Tag>
                <Tag>ESP32</Tag>
                <Tag>DHT22</Tag>
                <Tag>MQ-135</Tag>
                <Tag>fl_chart</Tag>
              </div>

              {/* WHAT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                A mobile app connected to ESP32 hardware that monitors quail
                cage conditions in real time from anywhere. Quail are extremely
                sensitive to temperature and humidity. A THI above 78 causes
                heat stress, reduces egg production, and can be fatal to the
                flock.
              </p>

              <StatBlock
                items={[
                  { value: "Real-time", label: "monitoring" },
                  { value: "Auto-control", label: "fan, lamp, pump" },
                  { value: "4", label: "sensors per cage" },
                ]}
              />

              {/* IMPACT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Selected for MIS Student Innovation Grant 2026
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Rp 7,400,000 in funding approved — blocked by campus politics
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Proved that a reframed &apos;meaningless&apos; assignment can
                  become a fundable innovation
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Built with zero guidance from the professor — entirely
                  self-directed
                </li>
              </ul>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Working without a mentor teaches you that self-direction is a
                  skill, not a given
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  IoT projects require thinking across hardware, firmware, and
                  software simultaneously
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Campus politics are real — but they don&apos;t invalidate the
                  work
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Reframing a problem is sometimes more valuable than solving
                  the original one
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="order-2 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/image/smartquail/1.png", alt: "SmartQuail Screen 1" },
                  { src: "/image/smartquail/2.png", alt: "SmartQuail Screen 2" },
                  { src: "/image/smartquail/3.png", alt: "SmartQuail Screen 3" },
                ].map((img) => (
                  <div
                    key={img.src}
                    className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={533}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                <Image
                  src="/image/smartquail/kerja.jpeg"
                  alt="SmartQuail Hardware Setup"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/masanuddin/SmartQuail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors group"
          >
            GitHub
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
            <span className="text-[#F5F5F5]">
              github.com/masanuddin/SmartQuail
            </span>
          </a>
          <Badge variant="funded">FUNDED — Rp 7.4M</Badge>
        </div>
      </div>

      <Divider />
    </section>
  );
}
