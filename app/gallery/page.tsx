import React from "react";
import Review from "../components/Review";
import { PiFlowerTulipBold } from "react-icons/pi";

import Carousel from "../components/Carousell";

export default function Gallery() {
  return (
    <section className="page-container font-body">
      <header className="space-y-2 text-center">
        <h1 className="text-title text-blue-300 [--title-color:lightblue]">
          Gallery
        </h1>
        <h3 className="text-secondary font-headline text-2xl md:text-3xl">
          What other people see in our art?
        </h3>
        <div className="my-10 flex flex-col gap-3 md:flex-row">
          <Review
            icon={"🥀"}
            title="Help me"
            review="The worst website plus the worst server streaming, I've never seen such a horrific content."
          />
          <Review
            icon={"🗑️"}
            title="Delete this"
            review='The creator of this website must be the craziest person on earth, I have no words to describe it, just "horrendous"  '
          />
          <Review
            icon={"💀"}
            title="I can't unsee this"
            review="I witnessed, something... unspeakable, how can a human that did this make our eyes suffer so much?"
          />
        </div>
      </header>
      <h2 className="text-secondary font-headline text-lg sm:text-2xl lg:text-3xl">
        These companies hate us!
      </h2>
      <Carousel />
      <Carousel reverse={true} />
    </section>
  );
}
