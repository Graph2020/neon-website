import type { JSX } from "react";

import React from "react";

export default function FilterModule({
  handleFilter,
  handleGenreFilter,
}: {
  handleFilter: (year: "oldest" | "newest" | null) => void;
  handleGenreFilter: (genre: string | null) => void;
}): JSX.Element {
  return (
    <div className="border-main font-headline mr-5 flex h-56 w-full flex-col items-start gap-5 self-end border-l-4 pl-5 sm:h-auto sm:flex-row sm:items-start sm:justify-center sm:gap-10 lg:border-none">
      <div>
        <h2 className="text-lg text-gray-500 uppercase">Filter_module</h2>

        <div className="flex flex-wrap gap-5 sm:flex-nowrap">
          <button onClick={() => handleGenreFilter(null)} className="btn-hero">
            All
          </button>
          <button
            onClick={() => handleGenreFilter("CyberPunk")}
            className="btn-hero"
          >
            CyberPunk
          </button>
          <button
            onClick={() => handleGenreFilter("Tokyo")}
            className="btn-hero"
          >
            Tokyo
          </button>
          <button
            onClick={() => handleGenreFilter("Mecha")}
            className="btn-hero border-pixelyellow text-pixelyellow hover:bg-pixelyellow hover:text-black"
          >
            Mecha
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg text-gray-500 uppercase">Sort_by</h2>

        <select
          className="font-main mt-1 w-fit appearance-none border bg-transparent px-4 py-2 text-white outline-none"
          onChange={(e) =>
            handleFilter(e.target.value as "oldest" | "newest" | null)
          }
        >
          <option className="bg-black text-white" value="">
            Default
          </option>
          <option className="bg-black text-white" value="newest">
            Newest
          </option>
          <option className="bg-black text-white" value="oldest">
            Oldest
          </option>
        </select>
      </div>
    </div>
  );
}
