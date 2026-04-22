"use client";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function MiniHeadlines({
  children,
}: {
  children: React.ReactNode;
}) {
  const textRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!textRef.current) return;

    // Query only within this specific component instance to avoid conflicts
    const targetElement =
      textRef.current.querySelector(".mini-title") || textRef.current;
    const splitedText = new SplitText(targetElement, { type: "words" });

    gsap.from(splitedText.words, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power3.out",
      delay: isMobile ? 0.8 : 0,

      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });
  });
  return <div ref={textRef}>{children}</div>;
}
