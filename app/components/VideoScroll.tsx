"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

// FIX 1: Tell GSAP to completely ignore small mobile UI resizes (like the address bar hiding)
ScrollTrigger.config({ ignoreMobileResize: true });

export default function VideoScroll() {
  // FIX 2: We removed `useMediaQuery`. It causes hydration issues and stale data in GSAP.
  // We will handle mobile detection directly inside the GSAP function below!

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const frameCount = 192;
  const images = useRef<HTMLImageElement[]>([]);

  const imageSequence = useRef({ frame: 0 });

  useEffect(() => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/images/frames/frame_${i.toString().padStart(4, "0")}.jpg`;
      images.current.push(img);
    }
  }, []);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      const render = () => {
        const img = images.current[imageSequence.current.frame];
        if (img && img.complete) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        }
      };

      if (images.current.length > 0) {
        images.current[0].onload = render;
      }

      const splitFirstParagraph = new SplitText("#first", { type: "words" });
      const splitSecondParagraph = new SplitText("#second", { type: "words" });

      const textAnimationConfig = {
        opacity: 0,
        y: 20,
        stagger: {
          each: 0.1,
          from: "random" as const,
        },
      };

      gsap.from(splitFirstParagraph.words, {
        ...textAnimationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top-=50",
          end: "top top-=300",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(splitSecondParagraph.words, {
        ...textAnimationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top-=400",
          end: "top top-=650",
          toggleActions: "play reverse play reverse",
        },
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top-=600",
          end: "top top-=1200",
          scrub: 1,
        },
      });

      titleTl
        .fromTo(
          titleRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1 },
        )
        .to(titleRef.current, {
          scale: 15,
          opacity: 0,
          duration: 1,
          ease: "power2.in",
        });

      gsap.to(imageSequence.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // FIX 3: Pass a function here. GSAP will dynamically check the screen size
          // to determine the scroll duration without causing React state bugs.
          end: () => (window.innerWidth <= 768 ? "+=2000" : "+=4000"),
          scrub: 1,
          pin: true,
        },
        onUpdate: () => render(),
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      // FIX 4: Changed `h-[100dvh]` to `h-[100vh]`.
      // Added `overflow-hidden` so your zooming title doesn't break the page width.
      className="font-headline relative h-[100vh] w-full overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute h-full w-full object-cover opacity-80"
      />
      <p
        id="first"
        className="text-secondary absolute top-1/3 left-1/2 text-lg md:text-2xl lg:text-3xl"
      >
        Are you ready?
      </p>
      <p
        id="second"
        className="text-secondary absolute right-1/2 bottom-1/3 text-lg md:text-2xl lg:text-3xl"
      >
        For a journey
      </p>
      <h1
        ref={titleRef}
        className="text-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl [--title-color:lightblue] md:text-9xl"
      >
        BEHOLd
      </h1>
    </div>
  );
}
