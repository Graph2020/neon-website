import type { JSX } from "react";
import React from "react";
import { ReviewProps } from "../types/type";

export default function Review({
  icon,
  title,
  review,
}: ReviewProps): JSX.Element {
  return (
    <div className="font-body flex flex-1 flex-col items-start gap-3 rounded-xl bg-slate-900/80 p-2 lg:px-5 lg:py-10">
      <span className="inline-block text-2xl">{icon}</span>
      <h2 className="text-xl font-medium text-white">{title}</h2>
      <p className="text-start text-gray-500">{review}</p>
    </div>
  );
}
