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
                DUO PROJECT · Ricky (Lead Developer — full system build) · Rafael (Deploy & QA — testing all features)
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                My friend Vona was opening a warung but didn&apos;t want to rely
                on third-party platforms that would take a cut of every
                transaction and own her data. She reached out to me during my
                busiest semester. I almost said no. But the problem was real —
                so I said yes.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                I started by writing down everything Vona actually needed on a
                piece of paper — not what I wanted to build, but what her
                business needed to run. I built the simplest version first: just
                a menu and a way to place an order. Then I put it in front of
                real customers and watched what broke. Every version after that
                came from something a real user did that I didn&apos;t predict.
                Over 25 iterations, I rebuilt the entire system from scratch
                once — because the original stack was too complex to maintain. I
                chose simplicity over cleverness every time.
                <br />
                <br />
                Rafael joined as my QA partner. His job was to break everything
                I built before it reached Vona. Managing this across an active
                internship and a thesis simultaneously nearly broke me — but
                having someone whose only job was to find my mistakes made the
                system significantly more reliable.
              </p>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                STACK
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
                A QR ordering system built for a real warung. Customers scan a
                code at their table, browse the menu, and place an order — no
                waiting in line, no calling a waiter. The cashier sees every
                order appear in real time. The kitchen knows the queue and how
                long each order should take. Vona can check her top-selling
                items, daily revenue, and full order history from her phone.
              </p>

              {/* IMPACT */}
              <div className="border border-[#2A2A2A] rounded-lg bg-[#111111] p-6 mb-8">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#F5F5F5] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Built for a real warung and ready for production — currently waiting for Vona&apos;s warung to open before going live
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Completely eliminated manual order-taking for the staff
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Rebuilt 25+ times based on direct feedback from the owner and
                  real customers
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Security tested: customer data, menu, and transactions are all
                  protected
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
                  Real users will always find problems you didn&apos;t think of
                  — that&apos;s not failure, that&apos;s how good software gets
                  built
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Keeping things simple to maintain matters more than using the
                  most impressive technology
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Shipping early and improving continuously beats waiting for
                  perfection
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
