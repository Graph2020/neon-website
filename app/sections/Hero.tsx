import React from "react";
import Destiny from "../components/Destiny";
import FilterModule from "../components/FilterModule";
import Serie from "../components/Serie";
import { series } from "../const";

export default function Hero() {
  const displaySeries = series.map((serie) => (
    <Serie key={serie.id} {...serie} />
  ));
  return (
    <main className="center-element relative min-h-screen w-full flex-col gap-5 overflow-hidden p-10">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      >
        <source src="/videos/neonCar-mobile.mp4" type="video/mp4" />
      </video> */}
      <h1 className="text-title">Neon Watching</h1>
      <Destiny />
      <FilterModule />
      <div className="flex w-full flex-col items-center p-1 md:flex-row md:flex-wrap md:items-baseline">
        {displaySeries}
      </div>
    </main>
  );
}
