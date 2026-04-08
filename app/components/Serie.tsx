import Image from "next/image";
import type { JSX } from "react";
import React from "react";

export default function Serie(): JSX.Element {
  return (
    <div className="flex h-120 w-full flex-col gap-5">
      <div className="relative h-[80%] border border-white p-1">
        <span className="absolute top-5 left-5">genre</span>
        <Image
          className="object-cover object-center"
          src="/images/image.png"
          alt="serie"
          fill={true}
        />
      </div>

      <div className="flex h-1/2 w-full flex-col gap-5 bg-white p-5 text-black">
        <h1>Serie Title</h1>
        <p>Short description</p>
        <button className="bg-main w-full py-2 uppercase">Watch Now</button>
      </div>
    </div>
  );
}
