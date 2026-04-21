import type { JSX } from "react";
import type { SerieProps } from "../types/type";

import Image from "next/image";
import React, { useRef } from "react";
import { CiPlay1 } from "react-icons/ci";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Serie({
  title,
  genre,
  description,
  imageUrl,
  spanColor,
  spanTextColor,
}: SerieProps): JSX.Element {
  const serieRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(serieRef.current, {
        opacity: 0,
        y: 50,
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: serieRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: serieRef },
  );

  return (
    <div
      ref={serieRef}
      className="serie-item font-body mt-10 flex h-full w-fit flex-col items-center gap-5"
    >
      <div className="relative h-96 w-64 shrink-0 overflow-hidden border border-white">
        <span
          style={{ backgroundColor: spanColor, color: spanTextColor }}
          className="bg-main absolute top-5 left-5 z-10 inline-block px-2 text-white"
        >
          {genre}
        </span>
        <Image
          className="object-cover object-center p-2 transition-transform duration-300 hover:scale-105"
          src={imageUrl}
          alt="serie"
          fill={true}
        />
      </div>

      <div className="flex w-64 flex-1 flex-col gap-1.5 bg-white p-3.5 text-black">
        <h1 className="font-main">{title}</h1>
        <p>{description}</p>
        <button className="bg-main center-element mt-auto w-full gap-2 py-2 uppercase">
          <CiPlay1 className="" /> <span className="mr-2">Watch Now</span>
        </button>
      </div>
    </div>
  );
}
