"use client";

import Divider from "@/components/ui/Divider";
import Tag from "@/components/ui/Tag";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const footerBackground = "#111111";
const footerText = "#888888";

export default function ProjectWarkopQR() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section
      id="warkop-qr"
      className="py-[120px] md:py-[120px] pt-[120px] pb-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section number + title */}
        <div ref={revealRef} className="reveal">
          <span className="block font-display font-black text-section-number text-[#333333] leading-none">
            1
          </span>

          <h2 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-2 title-hover">
            WARKOP QR
          </h2>

          <p className="text-lg text-[#888888] mb-8">
            QR-Based Digital Ordering System
          </p>

          <Divider />

          {/* 2-col: content left, screenshot right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {/* Left */}
            <div className="order-1">
              {/* Role badge */}
              <p className="text-xs text-[#888888] uppercase tracking-[0.08em] mb-8">
                Lead Developer · Duo Project
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                My best friend Vona runs a warung and needed a digital ordering
                system she could trust — not a third-party platform handling her
                business data. She asked during my busiest semester. I
                couldn&apos;t say no, because the need was real.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Tag>Next.js 16</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Supabase</Tag>
                <Tag>Tailwind CSS v4</Tag>
                <Tag>Framer Motion</Tag>
                <Tag>Vercel</Tag>
              </div>

              {/* WHAT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                A production-ready QR ordering system built for real business
                use. Customers scan a QR code at their table, browse the menu,
                and order without queuing. Staff manage everything through their
                dedicated dashboards.
              </p>

              {/* IMPACT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Live in production, used by a real business every day
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Replaced manual order-taking entirely
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  25+ iterations from v1 to v2.9 — full rebuild from React +
                  FastAPI to a unified Next.js stack
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  22 API endpoints · 12 pages · Security hardened
                </li>
              </ul>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Real users expose bugs no developer can predict
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Security is not optional — implemented RLS policies, auth
                  guards, and state machine guards
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Iterative development beats chasing perfection from the start
                </li>
              </ul>
            </div>

            {/* Right: Screenshots */}
            <div className="order-2 space-y-4">
              <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                <Image
                  src="/warkop_qr/customer_menu_utama_light.png"
                  alt="Warkop QR — Customer Menu Page"
                  width={800}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                  <Image
                    src="/warkop_qr/customer_checkout_cash_light.png"
                    alt="Warkop QR — Checkout Page"
                    width={400}
                    height={280}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                  <Image
                    src="/warkop_qr/owner_dashboard_utama_dark.png"
                    alt="Warkop QR — Owner Dashboard"
                    width={400}
                    height={280}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer: GitHub link */}
        <div className="mt-12 flex items-center gap-3">
          <a
            href="https://github.com/RickyRudiansyah/Warkop_v"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors group"
          >
            GitHub
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
            <span className="text-[#F5F5F5]">
              github.com/RickyRudiansyah/Warkop_v
            </span>
          </a>
        </div>
      </div>

      <Divider />
    </section>
  );
}
