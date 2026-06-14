"use client";

import Tag from "@/components/ui/Tag";
import Divider from "@/components/ui/Divider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stacks = {
  Languages: ["Python", "TypeScript", "Dart", "SQL"],
  Frameworks: ["Next.js", "Flutter", "React", "Tailwind CSS"],
  "AI / ML": ["PyTorch", "Hugging Face", "Optuna", "scikit-learn", "Ollama"],
  "Cloud & Infra": ["Supabase", "Firebase", "Vercel", "Docker", "GitHub Actions"],
};

export default function TechStack() {
  const revealRef = useScrollReveal(0.1);

  return (
    <section className="py-20 px-[max(24px,6vw)]">
      <div className="max-w-[1100px] mx-auto">
        <div ref={revealRef} className="reveal text-center">
          <h2 className="font-display font-black text-xl uppercase tracking-tight mb-12">
            TECH STACK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[900px] mx-auto">
            {Object.entries(stacks).map(([category, tools]) => (
              <div key={category}>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555] mb-4">
                  {category}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Divider />
      </div>
    </section>
  );
}
