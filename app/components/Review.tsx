"use client";
import type { JSX } from "react";
import React from "react";
import { ReviewProps } from "../types/type";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Review({
  icon,
  title,
  review,
}: ReviewProps): JSX.Element {
  const reviewRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(reviewRef.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: reviewRef.current,
        start: "top 80%",
      },
    });
  });
  return (
    <div
      ref={reviewRef}
      className="font-body flex flex-1 flex-col items-start gap-3 rounded-xl bg-slate-900/80 p-2 lg:px-5 lg:py-10"
    >
      <span className="inline-block text-2xl">{icon}</span>
      <h2 className="text-xl font-medium text-white">{title}</h2>
      <p className="text-start text-gray-500">{review}</p>
    </div>
  );
}
