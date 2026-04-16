"use client";
import React, { useState } from "react";
import { JSX } from "react";
import Destiny from "../components/Destiny";
import FilterModule from "../components/FilterModule";
import Serie from "../components/Serie";
import { series } from "../const";
import TitleAnimation from "../animation/TitleAnimation";

export default function Hero(): JSX.Element {
  const [serieYear, setSerieYear] = useState<"oldest" | "newest" | null>(null);
  const [serieGenre, setSerieGenre] = useState<string | null>(null);

  const genreFilter = series.filter(({ genre }) => {
    if (!serieGenre) return true;
    return genre.toLowerCase() === serieGenre.toLowerCase();
  });

  const sortedSeries = [...genreFilter].sort((a, b) => {
    if (serieYear === "oldest") return a.year - b.year;
    if (serieYear === "newest") return b.year - a.year;
    return 0;
  });

  const displaySeries = sortedSeries.map((serie) => (
    <Serie key={serie.id} {...serie} />
  ));

  return (
    <main className="page-container">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      >
        <source src="/videos/neonCar-mobile.mp4" type="video/mp4" />
      </video> */}
      <TitleAnimation>
        <h1 className="text-title flex flex-col sm:flex-row">
          <span className="mr-2 md:mr-10">Neon</span> <span>Watching</span>
        </h1>
      </TitleAnimation>

      <Destiny />
      <FilterModule
        handleFilter={setSerieYear}
        handleGenreFilter={setSerieGenre}
      />
      <div className="flex w-full flex-col items-center gap-5 p-1 md:flex-row md:flex-wrap md:items-stretch md:justify-center">
        {displaySeries}
      </div>
    </main>
  );
}
