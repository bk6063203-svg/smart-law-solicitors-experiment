import { useEffect, useRef, useState } from "react";
import { londonFilm } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const { reducedMotion } = useSite();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || failed) return;
    video.playbackRate = 0.62;
    const play = video.play();
    if (play) {
      play.catch(() => setFailed(true));
    }
  }, [reducedMotion, failed]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      <img
        src={londonFilm.poster}
        alt=""
        className="h-full w-full scale-105 object-cover grayscale contrast-[1.08] brightness-[0.86]"
        fetchPriority="high"
      />
      {!reducedMotion && !failed ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08] brightness-[0.86] transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={londonFilm.poster}
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = 0.62;
          }}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
        >
          <source src={londonFilm.src} type="video/mp4" />
        </video>
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,6,7,0.82) 0%, rgba(5,6,7,0.55) 34%, rgba(5,6,7,0.16) 66%, rgba(5,6,7,0.04) 100%), linear-gradient(180deg, rgba(5,6,7,0.45) 0%, rgba(5,6,7,0.05) 32%, rgba(5,6,7,0.18) 66%, rgba(5,6,7,0.92) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_170px_rgba(6,8,11,0.55)]" />
    </div>
  );
}
