import { useEffect, useRef, useState, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { useSite } from "@/context/SiteContext";

export function PageTransition({
  routeKey,
  children,
}: {
  routeKey: string;
  children: ReactNode;
}) {
  const { reducedMotion, lenisRef } = useSite();
  const [display, setDisplay] = useState(children);
  const [covering, setCovering] = useState(false);
  const first = useRef(true);
  const childrenRef = useRef(children);
  childrenRef.current = children;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      setDisplay(childrenRef.current);
      return;
    }

    if (reducedMotion) {
      setDisplay(childrenRef.current);
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
      return;
    }

    setCovering(true);
    const timer = window.setTimeout(() => {
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
      setDisplay(childrenRef.current);
      setCovering(false);
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    }, 520);

    return () => window.clearTimeout(timer);
  }, [routeKey, reducedMotion, lenisRef]);

  return (
    <>
      <div className={covering ? "curtain is-covering" : "curtain"} aria-hidden="true" />
      <div key={routeKey}>{display}</div>
    </>
  );
}
