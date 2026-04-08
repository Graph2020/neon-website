import type { JSX } from "react";
import React from "react";

export default function FilterModule(): JSX.Element {
  return (
    <div className="border-main font-body mr-5 flex h-56 w-full flex-col items-start gap-5 self-end border-l-4 pl-5 sm:h-auto sm:flex-row sm:items-start sm:justify-center sm:gap-10 lg:border-none">
      <div>
        <h2 className="text-lg text-gray-500 uppercase">Filter_module</h2>

        <div className="flex flex-wrap gap-5 sm:flex-nowrap">
          <button className="btn-hero">All</button>
          <button className="btn-hero">CyberPunk</button>
          <button className="btn-hero">Tokyo</button>
          <button className="btn-hero border-pixelyellow text-pixelyellow hover:bg-pixelyellow hover:text-black">
            Mecha
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg text-gray-500 uppercase">Sort_by</h2>

        <select
          className="font-main mt-1 w-fit appearance-none border bg-transparent px-4 py-2 text-white outline-none"
          name=""
          id=""
        >
          <option className="bg-black text-white" value="">
            Newest
          </option>
          <option className="bg-black text-white" value="">
            Oldest
          </option>
        </select>
      </div>
    </div>
  );
}
