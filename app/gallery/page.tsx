"use client";
import React, { useRef } from "react";
import Review from "../components/Review";
import Carousel from "../components/Carousell";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { expCards } from "../const";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!spanRef.current || !containerRef.current) return;

      gsap.fromTo(
        spanRef.current,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            markers: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  const displayCompanyCards = expCards.map((card) => (
    <GlowCard
      key={card.review}
      starImage={card.starImage}
      review={card.review}
      company={card.company}
      companyName={card.companyName}
      logoColor={card.logoColor}
      spanColor={card.spanColor}
    />
  ));
  return (
    <section className="page-container font-body">
      <header className="space-y-2 text-center">
        <h1 className="text-title text-blue-300 [--title-color:lightblue]">
          Gallery
        </h1>
        <h3 className="text-secondary font-headline text-2xl md:text-3xl">
          What other people see in our art?
        </h3>

        <div className="my-10 flex flex-col gap-3 md:flex-row">
          <Review
            icon={"🥀"}
            title="Help me"
            review="The worst website plus the worst server streaming, I've never seen such a horrific content."
          />
          <Review
            icon={"🗑️"}
            title="Delete this"
            review='The creator of this website must be the craziest person on earth, I have no words to describe it, just "horrendous"  '
          />
          <Review
            icon={"💀"}
            title="I can't unsee this"
            review="I witnessed, something... unspeakable, how can a human that did this make our eyes suffer so much?"
          />
        </div>
      </header>

      <h2 className="text-secondary font-headline text-lg sm:text-2xl lg:text-3xl">
        These companies hate me!
      </h2>

      <Carousel />
      <Carousel reverse={true} />

      <TitleHeader
        title="Please take a look at my work in other companies"
        sub="💼 My Experience"
      />

      <div ref={containerRef} className="flex w-full gap-3">
        <div className="flex w-full flex-col gap-3">{displayCompanyCards}</div>
        <span
          ref={spanRef}
          className="via-main w-2 shrink-0 scale-y-0 rounded-full bg-gradient-to-b from-rose-700 to-emerald-500"
        ></span>
      </div>
    </section>
  );
}
