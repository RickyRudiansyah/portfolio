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
                DUO PROJECT · Ricky (data pipeline + all ML experiments) · Sinclair (labeling coordination + thesis writing)
              </p>

              {/* WHY */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHY
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-8">
                I was watching a YouTube video about cars when I noticed the
                comments were full of online gambling promotions. Millions of
                Indonesians — including children — see this every single day. I
                looked for tools that solved this. Nothing good existed. So I
                decided to build one.
              </p>

              {/* HOW */}
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                HOW
              </p>
              <p className="text-base text-[#F5F5F5] leading-relaxed mb-4">
                My first instinct was to filter by keywords. But spammers are
                smart — they deliberately misspell words like
                &apos;j.u.d.i&apos; or &apos;g4mbling&apos; to bypass simple
                filters. So I had to think like a spammer first.
                <br />
                <br />
                I collected 75,000+ real comments from YouTube and used an AI
                model to label them consistently — because doing it manually
                would take months and produce inconsistent results. Once I had
                reliable labeled data, I built and tested four different
                detection approaches, ran hundreds of automated experiments to
                find the best settings for each, and compared them all against
                the same standard.                 The goal wasn&apos;t to pick the most
                complex model. It was to find the most accurate one.
                <br />
                <br />
                Sinclair and I had very different roles, but we made a point
                of staying in sync throughout. Before I ran any experiment, I&apos;d
                walk Sinclair through what I was planning to try and why — not
                to get permission, but to get a second opinion. Sometimes he&apos;d
                catch an assumption I hadn&apos;t questioned. Sometimes I&apos;d
                explain my reasoning and realize mid-sentence that it didn&apos;t
                hold up.
                <br />
                <br />
                After every major experiment, I&apos;d update him on what the
                results actually meant in plain language — not the numbers, but
                what they told us about the problem. This back-and-forth kept
                the technical work and the academic writing aligned. I wasn&apos;t
                just running experiments in isolation. Every decision had to
                make sense to someone outside the code.
              </p>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                STACK
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
                A browser extension that automatically detects and hides online
                gambling promotion comments on YouTube. It catches spammers even
                when they disguise their words with dots, numbers, or unusual
                characters. Out of every 100 gambling comments, it catches 93.
                Out of every 100 normal comments, it only misflags less than 1.
              </p>

              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-2">
                WHAT I BUILT
              </p>
              <ul className="space-y-2 text-base text-[#F5F5F5] leading-relaxed mb-8">
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Automatically collected 75,000+ real YouTube comments as
                  training data
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Built a system to label every comment consistently using AI —
                  because manual labeling at this scale would be unreliable
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Designed and tested four different detection models to find
                  the most accurate approach
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Built a system that recognizes deliberate misspellings and
                  character tricks spammers use to hide their content
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Ran hundreds of automated experiments to tune each model to
                  its best performance
                </li>
              </ul>

              {/* STAT BLOCK */}
              <StatBlock
                items={[
                  { value: "93%", label: "spam detected" },
                  { value: "99.6%", label: "normal comments safe" },
                  { value: "75K+", label: "comments trained on" },
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
                  Catches 93% of gambling spam comments — including disguised
                  ones
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Less than 1% of normal comments get incorrectly flagged
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Addresses a real national issue: gambling ads targeting
                  Indonesian youth through YouTube comments
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  The entire pipeline — from data collection to trained model —
                  was built almost entirely solo
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Managed a clear division of labor in a two-person thesis team
                  — technical ownership on one side, academic writing on the
                  other
                </li>
              </ul>
              </div>

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
                  Good data matters more than a complex model — if your training
                  data is wrong, your results will be wrong too
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Always think like the person trying to break your system, not
                  just the person using it
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Automating the search for best settings saved weeks of manual
                  guesswork
                </li>
                <li className="flex gap-2">
                  <span className="text-[#888888]">·</span>
                  Building something large alone forces you to be organized and
                  disciplined
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
