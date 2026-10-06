import { useEffect, useRef } from "react";
import { londonFilm } from "@/data/site";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.playbackRate = 0.62;

    const playVideo = async () => {
      try {
        await video.play();
        console.log("HERO VIDEO PLAYING");
      } catch (error) {
        console.error("HERO VIDEO PLAY FAILED:", error);
      }
    };

    playVideo();

    video.addEventListener("playing", () => {
      console.log("HERO VIDEO PLAYING EVENT");
    });

    video.addEventListener("timeupdate", () => {
      console.log("HERO VIDEO TIME:", video.currentTime);
    });

    video.addEventListener("error", () => {
      console.error("HERO VIDEO ERROR:", video.error);
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={londonFilm.src}
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08] brightness-[0.86]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,6,7,0.82) 0%, rgba(5,6,7,0.55) 34%, rgba(5,6,7,0.16) 66%, rgba(5,6,7,0.04) 100%), linear-gradient(180deg, rgba(5,6,7,0.45) 0%, rgba(5,6,7,0.05) 32%, rgba(5,6,7,0.18) 66%, rgba(5,6,7,0.92) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_170px_rgba(6,8,11,0.55)]" />
    </div>
  );
}