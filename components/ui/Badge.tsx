type BadgeVariant = "active" | "funded" | "finalist";

const variantStyles: Record<
  BadgeVariant,
  { bg: string; text: string; border: string }
> = {
  active: {
    bg: "bg-[#1A2A1A]",
    text: "text-[#5A9A5A]",
    border: "border-[#2A4A2A]",
  },
  funded: {
    bg: "bg-[#1A1A2A]",
    text: "text-[#5A5AAA]",
    border: "border-[#2A2A4A]",
  },
  finalist: {
    bg: "bg-[#2A1A1A]",
    text: "text-[#AA7A5A]",
    border: "border-[#4A2A2A]",
  },
};

export default function Badge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: BadgeVariant;
}) {
  const s = variantStyles[variant];
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-[0.05em] uppercase px-[10px] py-1 rounded ${s.bg} ${s.text} border ${s.border}`}
    >
      {children}
    </span>
  );
}
