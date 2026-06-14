export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs bg-[#1A1A1A] text-[#AAAAAA] border border-[#2A2A2A] px-[10px] py-1 rounded whitespace-nowrap hover:bg-[#222222] transition-colors">
      {children}
    </span>
  );
}
