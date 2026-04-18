import Image from "next/image";
import type { JSX } from "react";

import React from "react";
import { SwordProps } from "../types/type";

export default function Sword({
  title,
  description,
  imageUrl,
  firstColor = "from-gray-700",
  secondColor = "via-gray-500",
  thirdColor = "to-gray-300",
  textColor = "text-white",
}: SwordProps): JSX.Element {
  return (
    <div
      className={`flex flex-1 flex-col gap-4 rounded-xl bg-linear-90 ${firstColor} ${secondColor} ${thirdColor} p-4 text-center ${textColor} sm:flex-row sm:items-center sm:text-start`}
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl sm:w-1/2">
        <Image
          src={imageUrl}
          alt="Protagonist Sword"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 sm:w-1/2">
        <h3 className="font-main text-xl">{title}</h3>
        <p className="font-headline text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
