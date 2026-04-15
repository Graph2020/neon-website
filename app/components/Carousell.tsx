import Image from "next/image";
import type { JSX } from "react";

export default function Carousel({
  reverse = false,
}: {
  reverse?: boolean;
}): JSX.Element {
  const displayIcons = Array.from({ length: 10 }).map((_, index) => {
    return (
      <div className="relative size-32 shrink-0" key={index}>
        <Image
          fill={true}
          className="size-12 object-contain"
          src={`/icons/company-logo-${index + 1}.png`}
          alt={`company logo ${index + 1}`}
        />
      </div>
    );
  });

  return (
    <div className="-my-10 flex overflow-hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`inner-div font-body flex w-max shrink-0 gap-5 pr-5 ${reverse ? "reverse-carousel-animation" : "carousel-animation"}`}
        >
          {displayIcons}
        </div>
      ))}
    </div>
  );
}
