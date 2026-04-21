"use client";
import { useRef, type JSX } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Destiny(): JSX.Element {
  const destenyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(destenyRef.current, {
      y: -20,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
    });
  });
  return (
    <div
      ref={destenyRef}
      className="center-element font-body w-72 bg-slate-900 p-5 text-xl text-gray-600 uppercase md:w-96 lg:w-lg"
    >
      Select your destiny
    </div>
  );
}
