"use client";
import type { JSX } from "react";

import React, { useRef } from "react";
import MiniHeadlines from "../animation/MiniHeadlines";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function TitleHeader({
  title,
  sub,
}: {
  title: string;
  sub: string;
}): JSX.Element {
  const titleRef = useRef(null);
  useGSAP(
    () => {
      if (!titleRef.current) return;

      gsap.from(".span-work", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: titleRef },
  );

  return (
    <div
      ref={titleRef}
      className="center-element mt-10 w-full flex-col gap-3 text-center"
    >
      <MiniHeadlines>
        <h2 className="mini-title lg:text-4xl">{title}</h2>
      </MiniHeadlines>
      <span className="span-work inline-block rounded-full bg-slate-900 p-2 text-white/90">
        {sub}
      </span>
    </div>
  );
}
