"use client";
import React, { useRef } from "react";
import Review from "../components/Review";
import Carousel from "../components/Carousell";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { expCards, imageArray } from "../const";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import WorkShowCase from "../components/WorkShowCase";
import TitleAnimation from "../animation/TitleAnimation";
import MiniHeadlines from "../animation/MiniHeadlines";
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
          backgroundSize: "100% 0%",
          backgroundRepeat: "no-repeat",
        },
        {
          backgroundSize: "100% 100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );

      const icons = gsap.utils.toArray(".company-icon");

      icons.forEach((icon: any) => {
        gsap.from(icon, {
          scale: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
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
    <section className="page-container font-body overflow-x-hidden overflow-y-hidden">
      <header className="space-y-2 text-center">
        <TitleAnimation>
          <h1 className="text-title text-blue-300 [--title-color:lightblue]">
            Gallery
          </h1>
        </TitleAnimation>
        <MiniHeadlines>
          <h2 className="mini-title">What other people see in our art?</h2>
        </MiniHeadlines>

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

      <MiniHeadlines>
        <h2 className="mini-title text-center">These companies hate me!</h2>
      </MiniHeadlines>

      <Carousel />
      <Carousel reverse={true} />

      <TitleHeader
        title="Please take a look at my work in other companies"
        sub="💼 My Experience"
      />

      <div ref={containerRef} className="flex w-full justify-between gap-3">
        <div className="flex flex-1 flex-col gap-3">{displayCompanyCards}</div>

        <div className="mr-2 hidden flex-1 flex-col justify-around gap-3 sm:flex lg:hidden">
          {imageArray.map((imagePath, index) => (
            <Image
              key={index}
              src={`${imagePath}`}
              alt={"awfull website"}
              width={500}
              height={500}
              className="min-h-0 w-full flex-1 object-contain"
            />
          ))}
        </div>

        <WorkShowCase />

        <span
          ref={spanRef}
          className="via-secondary relative flex w-2 shrink-0 flex-col items-center gap-3 rounded-full bg-gradient-to-b from-rose-700 to-emerald-500 bg-no-repeat md:mr-5"
        >
          {expCards.map(({ company: CompanyIcon, logoColor }, index) => (
            <div key={index} className="flex flex-1 flex-col justify-center">
              <div className="company-icon center-element size-6 shrink-0 rounded-full bg-slate-900 text-2xl text-white sm:size-12">
                {CompanyIcon && <CompanyIcon style={{ color: logoColor }} />}
              </div>
            </div>
          ))}
        </span>
      </div>
    </section>
  );
}
