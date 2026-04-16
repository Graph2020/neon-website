"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef, useState, type JSX } from "react";
import Image from "next/image";

import { expCards, imageArray } from "../const";
import MiniHeadlines from "../animation/MiniHeadlines";
export default function WorkShowCase(): JSX.Element {
  const displayImages = imageArray.map((imagePath, index) => (
    <Image
      key={index}
      src={`${imagePath}`}
      alt={"awfull website"}
      width={500}
      height={500}
      className="min-h-0 w-full flex-1 object-contain"
    />
  ));

  const [activeImage, setActiveImage] = useState<string>(imageArray[0]);

  const imageRef = useRef<HTMLImageElement>(null);

  const xMove = useRef<gsap.QuickToFunc>(null);
  const yMove = useRef<gsap.QuickToFunc>(null);

  useGSAP(() => {
    if (!imageRef.current) return;

    xMove.current = gsap.quickTo(imageRef.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    yMove.current = gsap.quickTo(imageRef.current, "y", {
      duration: 0.5,
      ease: "power3.out",
    });
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !xMove.current || !yMove.current) return;

    xMove.current(e.clientX - 250);
    yMove.current(e.clientY - 300);
  };

  const handleMouseEnter = (imagePath: string) => {
    setActiveImage(imagePath);

    gsap.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="hidden w-full flex-col items-center justify-around lg:flex"
    >
      <Image
        ref={imageRef}
        src={activeImage}
        alt="Active"
        width={500}
        height={500}
        className="pointer-events-none fixed top-0 left-0 z-50 scale-0 rounded-xl object-cover opacity-0 shadow-2xl"
      />
      {expCards.map(({ companyName }, index) => (
        <MiniHeadlines key={index}>
          <p
            onMouseEnter={() => handleMouseEnter(imageArray[index])}
            onMouseLeave={handleMouseLeave}
            className="font-main cursor-pointer text-center text-3xl font-bold text-white"
          >
            My work at {companyName}
          </p>
        </MiniHeadlines>
      ))}
    </div>
  );
}

// {Array.from({ length: 3 }).map((_, index) => (
//             <Image
//               key={index}
//               src={`/images/awfull-${index + 1}.png`}
//               alt={"awfull website"}
//               width={500}
//               height={500}
//               className="min-h-0 w-full flex-1 object-contain"
//             />
//           ))}
