"use client";
import type { JSX } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function TitleAnimation({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  useGSAP(() => {
    const splitedText = new SplitText(".text-title", { type: "chars" });

    gsap.from(splitedText.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      splitedText.revert();
    };
  });
  return <>{children}</>;
}
