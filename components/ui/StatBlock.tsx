type StatItem = {
  value: string;
  label: string;
};

export default function StatBlock({ items }: { items: StatItem[] }) {
  return (
    <div className="flex flex-wrap gap-6 md:gap-12 my-8">
      {items.map((item) => (
        <div key={item.label}>
          <span className="block text-[26px] md:text-[36px] font-extrabold text-[#F5F5F5]">
            {item.value}
          </span>
          <span className="block text-xs text-[#888888] uppercase tracking-[0.06em] mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
