"use client";
import type { JSX } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { titleAnimationAndFilterAnimation } from "../const";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

export default function TitleAnimation({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useGSAP(() => {
    const splitedText = new SplitText(".text-title", { type: "chars" });

    gsap.from(splitedText.chars, {
      ...titleAnimationAndFilterAnimation,
      delay: isMobile ? 0.8 : 0,
    });

    return () => {
      splitedText.revert();
    };
  });
  return <>{children}</>;
}
