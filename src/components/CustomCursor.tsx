import { useEffect, useRef } from "react";
import { useSite } from "@/context/SiteContext";

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useSite();

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const node = ring.current;
    if (!node) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let frame = 0;
    let visible = false;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        node.classList.add("is-on");
      }
      const target = event.target as HTMLElement | null;
      const hot = Boolean(target?.closest("a, button, input, textarea, select, label"));
      node.classList.toggle("is-hot", hot);
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      node.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = window.requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    frame = window.requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
