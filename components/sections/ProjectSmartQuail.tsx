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
                DUO PROJECT · Ricky (Flutter app + research) · Marcell (ESP32 firmware + IoT hardware)
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                Our professor gave us a vague assignment: build a smart cage for
                a bird. No context, no guidance, no clear purpose. Instead of
                just following the brief, my partner Marcell and I stopped and
                asked: what animal actually needs this — and who would it really
                help? One day of research pointed us to quail farming. It&apos;s
                an underserved industry in Indonesia with no existing smart
                solutions. We pitched the idea of pivoting. It got approved.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                With no mentor and no prior IoT experience, we had to divide and
                conquer. I owned the mobile app — what the farmer sees and
                interacts with. Marcell owned the hardware — the sensors and the
                microcontroller that reads and responds to real conditions. We
                set a clear rule: if the app shows a warning, the hardware must
                already be responding. The farmer should never have to manually
                intervene in an emergency.
                <br />
                <br />
                Every decision came back to one question: what does a quail
                farmer actually need at 2am when something goes wrong?
              </p>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                STACK
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
                A mobile app connected to sensors inside a quail cage that
                monitors temperature, humidity, and air quality in real time —
                from anywhere. Quail are extremely sensitive to heat. When
                conditions become dangerous, the system automatically turns on
                the fan, lamp, or water pump before the farmer even realizes
                there&apos;s a problem.
              </p>

              <StatBlock
                items={[
                  { value: "Real-time", label: "monitoring" },
                  { value: "Auto-control", label: "fan, lamp, pump" },
                  { value: "4", label: "sensors per cage" },
                ]}
              />

              {/* IMPACT */}
              <div className="border border-[#2A2A2A] rounded-lg bg-[#111111] p-6 mb-8">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5F5F5] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Selected for the MIS Student Innovation Grant 2026
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Rp 7,400,000 in funding approved — held up by university
                  administration
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  A assignment that was handed to us with no clear purpose
                  became a fundable innovation
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Built entirely without guidance — from hardware to app,
                  figured out independently
                </li>
              </ul>
              </div>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Not having a mentor means you have to become your own — that&apos;s
                  actually a valuable skill
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  IoT development means thinking about hardware, firmware, and
                  software at the same time — they all affect each other
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Bureaucracy can delay your work, but it can&apos;t erase what
                  you proved
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Sometimes the most valuable thing you can do is ask a better
                  question than the one you were given
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="order-2 space-y-4">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {[
                  { src: "/image/smartquail/1.png", alt: "SmartQuail Screen 1" },
                  { src: "/image/smartquail/2.png", alt: "SmartQuail Screen 2" },
                  { src: "/image/smartquail/3.png", alt: "SmartQuail Screen 3" },
                ].map((img) => (
                  <div
                    key={img.src}
                    className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden min-w-0"
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
