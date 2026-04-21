import React from "react";
import VideoScroll from "../components/VideoScroll";
import Sword from "../components/Sword";

export default function Premiere() {
  return (
    <section className="relative -mt-20 w-full bg-black">
      <VideoScroll />

      {/* content of a page  */}

      <div className="page-container z-0">
        <video
          className="absolute inset-0 -z-10 h-full w-full bg-center object-cover opacity-50"
          src="/videos/pixel-art-snow.mp4"
          autoPlay
          muted
          loop
        />

        <div className="mt-24">
          <h1 className="text-title [--title-color:lightblue]">
            The Ice Sword
          </h1>
          <h2 className="mini-title">The worst movie you&apos;ll ever see</h2>
        </div>

        <div>
          <div>
            <p className="font-body text-white-50 text-center text-lg">
              What do you know about despair? And the evil villian that bring
              demise everywhere? I betcha, you know nothing, because you
              haven&apos;t seen this absolute cinema production that gonna ruin
              your entire life! So what are you waiting for? DIVE INTO STORY
              RIGHT NOW
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <Sword
            title="Protagonist"
            description="Ice sword strive to have peaceful live in his realm but one day fire
          sword decided to melt down his kingdom!"
            imageUrl="/images/protagonist-sword.png"
            firstColor="from-secondary"
            secondColor="via-sky-400"
            thirdColor="to-blue-200"
            textColor="text-indigo-600"
          />
          <Sword
            title="Antagonist"
            description="hahaha I'm evil be afraid of me foolish ice sword hahah ahah I'm so cool soooo cool tremble before meeee"
            imageUrl="/images/antagonist-sword.png"
            firstColor="from-orange-600"
            secondColor="via-red-500"
            thirdColor="to-red-400"
            textColor="text-orange-200"
          />
        </div>
      </div>
    </section>
  );
}
