"use client";
import type { JSX } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { titleAnimationAndFilterAnimation } from "../const";

gsap.registerPlugin(SplitText);

export default function TitleAnimation({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  useGSAP(() => {
    const splitedText = new SplitText(".text-title", { type: "chars" });

    gsap.from(splitedText.chars, {
      ...titleAnimationAndFilterAnimation,
    });

    return () => {
      splitedText.revert();
    };
  });
  return <>{children}</>;
}
