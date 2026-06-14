"use client";

import Divider from "@/components/ui/Divider";
import Tag from "@/components/ui/Tag";
import Badge from "@/components/ui/Badge";
import StatBlock from "@/components/ui/StatBlock";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectJudiGone() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section
      id="judigone"
      className="py-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto">
        <div ref={revealRef} className="reveal">
          <span className="block font-display font-black text-section-number text-[#333333] leading-none">
            2
          </span>

          <h2 className="font-display font-black text-xl uppercase tracking-tight mt-4 mb-2 title-hover">
            JUDIGONE
          </h2>

          <p className="text-lg text-[#888888] mb-8">
            ML-Powered Gambling Comment Filter for YouTube
          </p>

          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-12">
            {/* Left */}
            <div className="order-1">
              <p className="text-xs text-[#888888] uppercase tracking-[0.08em] mb-8">
                ML Engineer · Solo Pipeline · Team Thesis
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                I was reading comments on Indonesian YouTube channels and felt
                genuinely unsettled. Gambling promotion comments flood every
                video — millions of people, including minors, see them every
                day. Nobody was building a real solution. I decided to.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Tag>Python</Tag>
                <Tag>YouTube API v3</Tag>
                <Tag>Qwen3-14b</Tag>
                <Tag>Optuna</Tag>
                <Tag>Multi-threading</Tag>
              </div>

              {/* WHAT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                A complete ML pipeline — from raw data to trained model — built
                almost entirely solo. The goal: a browser extension that
                automatically detects and hides online gambling promotion
                comments on YouTube.
              </p>

              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT I BUILT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  YouTube API v3 scraper with checkpointing and audit log
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Multi-threaded annotation pipeline using Qwen3-14b with
                  homoglyph and leet detection (24 workers)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Comprehensive EDA on 75,000+ real comments
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Production feature extraction pipeline with unicode
                  normalization
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Full hyperparameter optimization with Optuna — 30–50 trials
                  per model across 4 architectures
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Full training and evaluation of Model A, B, C, D with
                  significance testing
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Model C redesign with MLP encoder for apple-to-apple
                  comparison
                </li>
              </ul>

              {/* STAT BLOCK */}
              <StatBlock
                items={[
                  { value: "18,743", label: "lines of code" },
                  { value: "75,000+", label: "comments scraped" },
                  { value: "4", label: "model architectures" },
                ]}
              />

              {/* IMPACT */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                IMPACT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Model trained and evaluated — ready for deployment
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Addresses a real national problem: online gambling spam
                  targeting Indonesian youth
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Proves that a CS student can independently execute a full ML
                  engineering pipeline
                </li>
              </ul>

              {/* STATUS */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                STATUS
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Badge variant="active">ACTIVE THESIS</Badge>
                <span className="text-sm text-[#888888]">
                  Chapter 3 complete · Model trained · Browser extension in
                  progress
                </span>
              </div>

              {/* LESSON LEARNED */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                LESSON LEARNED
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  End-to-end ML is not just modeling — data quality decides
                  everything
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Homoglyph and leet substitution (3j4udi, g4mb1ing) requires
                  purpose-built detection, not keyword matching
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Hyperparameter search is an investment — Optuna saved weeks of
                  manual tuning
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Building a large pipeline solo taught me to document
                  obsessively
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="order-2 space-y-4">
              <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                <Image
                  src="/judigone/cm_model_D.png"
                  alt="Model D Gated Fusion Confusion Matrix"
                  width={800}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                  <Image
                    src="/judigone/cm_model_A.png"
                    alt="Model A Text-Only Baseline"
                    width={400}
                    height={280}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden">
                  <Image
                    src="/judigone/alpha_analysis_final.png"
                    alt="Gate Alpha Analysis"
                    width={400}
                    height={280}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/RickyRudiansyah/JudiGone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors group"
          >
            GitHub
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
            <span className="text-[#F5F5F5]">
              github.com/RickyRudiansyah/JudiGone
            </span>
          </a>
          <Badge variant="active">WORK IN PROGRESS</Badge>
        </div>
      </div>

      <Divider />
    </section>
  );
}
