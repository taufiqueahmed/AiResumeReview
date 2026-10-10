import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "~/lib/gsap";

export function Reveal({ children, y = 40 }: { children: ReactNode; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}