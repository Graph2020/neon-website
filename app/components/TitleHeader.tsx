import type { JSX } from "react";

import React from "react";

export default function TitleHeader({
  title,
  sub,
}: {
  title: string;
  sub: string;
}): JSX.Element {
  return (
    <div className="center-element mt-10 w-full flex-col gap-3 text-center">
      <h2 className="text-secondary font-headline text-2xl sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <span className="inline-block rounded-full bg-slate-900 p-2 text-white/90">
        {sub}
      </span>
    </div>
  );
}
