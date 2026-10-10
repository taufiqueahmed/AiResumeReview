import { useRef, type ReactNode } from "react";
import { gsap, SplitText, useGSAP } from "~/lib/gsap";

export function SplitHeading({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      SplitText.create(ref.current!, {
        type: "lines,words",
        mask: "lines",     // clips each line so words slide up from beneath it
        autoSplit: true,   // re-splits on resize/font load
        onSplit(self) {
          // returning the tween lets SplitText clean up and re-run it on re-split
          return gsap.from(self.words, {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            },
          });
        },
      });
    },
    { scope: ref }
  );

  return (
    <h1 ref={ref} style={{ fontSize: "4rem", lineHeight: 1.1, color:'black' }}>
      {children}
    </h1>
  );
}