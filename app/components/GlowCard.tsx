import type { JSX } from "react";
import type { ExpCard } from "../types/type";

import Image from "next/image";

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
  return (
    <div className="review-card">
      <div className="flex flex-col gap-3">
        <Image
          src={starImage}
          className="-my-6 -ml-2.5 h-auto w-20 object-cover object-left sm:w-28"
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
          <span className="text-base sm:text-lg" style={{ color: spanColor }}>
            {companyName}
          </span>
        )}
        {personImage && (
          <Image src={personImage} alt="Person" width={32} height={32} />
        )}
        {personName && (
          <span className="text-base sm:text-lg" style={{ color: spanColor }}>
            {" "}
            {personName}
          </span>
        )}
      </h2>
    </div>
  );
}
