"use client";
import { useRef, type JSX } from "react";
import type { ExpCard } from "../types/type";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function GlowCard({
  starImage,
  review,
  company: Icon,
  companyName,
  logoColor,
  spanColor,
  personName,
  personImage,
}: ExpCard): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      opacity: 0,
      x: -50,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <div ref={cardRef} className="review-card">
      <div className="flex flex-col gap-3">
        <Image
          src={starImage}
          className="-my-6 -ml-2.5 h-auto w-28 object-cover object-left sm:w-32"
          alt="Star"
          width={100}
          height={12}
        />
        <p className="text-start text-white/90">{review}</p>
      </div>
      <h2 className="flex items-center text-xl font-medium text-white">
        {Icon && (
          <Icon style={{ color: logoColor }} className="shrink-0 text-3xl" />
        )}{" "}
        {Icon && (
          <span className="span-review" style={{ color: spanColor }}>
            {companyName}
          </span>
        )}
        {personImage && (
          <Image src={personImage} alt="Person" width={32} height={32} />
        )}
        {personName && (
          <span className="span-review" style={{ color: spanColor }}>
            {" "}
            {personName}
          </span>
        )}
      </h2>
    </div>
  );
}
