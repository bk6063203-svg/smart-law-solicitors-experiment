export function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#050607]">
      <img
        src="/images/hero-london.jpg"
        alt="Night view of the London skyline with The Shard illuminated."
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.14] brightness-[0.82]"
        loading="eager"
        fetchPriority="high"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,6,7,0.86) 0%, rgba(5,6,7,0.60) 36%, rgba(5,6,7,0.22) 68%, rgba(5,6,7,0.08) 100%), linear-gradient(180deg, rgba(5,6,7,0.45) 0%, rgba(5,6,7,0.06) 32%, rgba(5,6,7,0.20) 66%, rgba(5,6,7,0.94) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(6,8,11,0.6)]" />
    </div>
  );
}