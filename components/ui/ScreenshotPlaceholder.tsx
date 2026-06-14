export default function ScreenshotPlaceholder({
  aspect = "video",
}: {
  aspect?: "video" | "mobile";
}) {
  const aspectClass =
    aspect === "mobile" ? "aspect-[9/16]" : "aspect-[16/10]";

  return (
    <div
      className={`w-full ${aspectClass} bg-[#111111] border border-[#222222] rounded-lg flex items-center justify-center`}
    >
      <span className="font-mono text-[13px] text-[#333333]">
        [screenshot]
      </span>
    </div>
  );
}
