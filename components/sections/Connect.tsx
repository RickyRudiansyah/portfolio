"use client";

import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Connect() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section
      id="connect"
      className="py-[120px] px-[max(24px,6vw)]"
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <div ref={revealRef} className="reveal">
          <h2 className="font-display font-black text-xl uppercase tracking-tight mb-6">
            LET&apos;S CONNECT
          </h2>

          <Divider />

          <p className="text-lg text-[#888888] leading-relaxed max-w-[600px] mx-auto mt-12 mb-16">
            I&apos;m always looking for problems worth solving. If you have
            one, or want to talk about building things that matter — reach out.
          </p>

          {/* Contact grid – 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto mb-16">
            {/* Email */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-3">
                Email
              </p>
              <p className="text-xs text-[#555555] tracking-[0.06em] mb-1">
                ─────
              </p>
              <a
                href="mailto:rickyrudiansyah15@gmail.com"
                className="text-base text-[#F5F5F5] hover:text-[#888888] transition-colors"
              >
                rickyrudiansyah
                <br />
                15@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-3">
                LinkedIn
              </p>
              <p className="text-xs text-[#555555] tracking-[0.06em] mb-1">
                ────────
              </p>
              <a
                href="https://www.linkedin.com/in/ricky-rudiansyah-933344351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#F5F5F5] hover:text-[#888888] transition-colors"
              >
                /in/ricky-rudiansyah-933344351
              </a>
            </div>

            {/* Instagram */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-3">
                Instagram
              </p>
              <p className="text-xs text-[#555555] tracking-[0.06em] mb-1">
                ─────────
              </p>
              <a
                href="https://instagram.com/nuaiman471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#F5F5F5] hover:text-[#888888] transition-colors"
              >
                @nuaiman471
              </a>
            </div>

            {/* GitHub */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-3">
                GitHub
              </p>
              <p className="text-xs text-[#555555] tracking-[0.06em] mb-1">
                ──────
              </p>
              <a
                href="https://github.com/RickyRudiansyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#F5F5F5] hover:text-[#888888] transition-colors"
              >
                RickyRudiansyah
              </a>
            </div>
          </div>

          <Divider />

          {/* Footer */}
          <p className="text-xs text-[#555555] mt-8">
            Ricky Rudiansyah · 2026 · Built with purpose, not just code.
          </p>
        </div>
      </div>
    </section>
  );
}
