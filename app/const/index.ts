import Image from "next/image";

import { nanoid } from "nanoid";
import type { ExpCard, LinkType, ModelsType } from "../types/type";
import type { SerieProps } from "../types/type";

import { RiNetflixFill } from "react-icons/ri";
import { GiFilmProjector } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io";
import { NetflixModel } from "../components/models/NetflixModel";
import { FacebookModel } from "../components/models/FacebookModel";
import { NikeModel } from "../components/models/NikeModel";

import { IoHomeSharp } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
const NavLinks: LinkType[] = [
  {
    name: "Home",
    href: "/",
    id: nanoid(),
    icon: IoHomeSharp,
  },
  {
    name: "Gallery",
    href: "/gallery",
    id: nanoid(),
    icon: RiGalleryFill,
  },
  {
    name: "Premiere",
    href: "/premiere",
    id: nanoid(),
    icon: MdLocalMovies,
  },
];

const series: SerieProps[] = [
  {
    title: "Cyberpunk 2077: Edgerunners",
    description: "In a city obsessed with technology and body modification.",
    genre: "CyberPunk",
    imageUrl: "/images/cyberpunk.png",
    spanColor: "#FF6F91",
    spanTextColor: "#FFFFFF",
    id: nanoid(),
    year: 2022,
  },
  {
    title: "Ghost in the Shell: SAC_2045",
    description:
      "In the year 2045, the world is in a state of sustainable war.",
    genre: "Mecha",
    imageUrl: "/images/crystal.png",
    spanColor: "#45B7D1",
    spanTextColor: "#FFFFFF",
    id: nanoid(),
    year: 2020,
  },
  {
    title: "Psycho-Pass",
    description: "In a future society, the Sibyl System is a powerful network.",
    genre: "Mecha",
    imageUrl: "/images/mecha.png",
    spanColor: "#FF9671",
    spanTextColor: "#FFFFFF",
    id: nanoid(),
    year: 2012,
  },
  {
    title: "Attack on Titan",
    description: "In a world where humanity is on the brink of extinction.",
    genre: "Tokyo",
    imageUrl: "/images/sakura.png",
    spanColor: "#D65DB1",
    spanTextColor: "#000000",
    id: nanoid(),
    year: 2013,
  },
  {
    title: "Neon Genesis Evangelion",
    description:
      "In a post-apocalyptic world, teenagers are recruited to pilot giant mechs.",
    genre: "CyberPunk",
    imageUrl: "/images/neon.png",
    spanColor: "#D65DB1",
    spanTextColor: "#FFFFFF",
    id: nanoid(),
    year: 1995,
  },
];

const expCards: ExpCard[] = [
  {
    starImage: "/one-star.png",
    review:
      "This guy, was the biggest nightmare that we worked with, how did we even stumble upon him? Someone, curse this day! I will never forgive myself for letting him into team",
    company: RiNetflixFill,
    companyName: "Netflix",
    logoColor: "#E50914",
    spanColor: "#FFFFFF",
  },
  {
    starImage: "/one-star.png",
    review:
      "I remember my company one day asked this guy to make some simple website for us, I wish I didn't remember, yet I remember so vividly the hatred that I felt towards him..",
    company: GiFilmProjector,
    companyName: "Hollywood",
    logoColor: "#FFFFFF",
    spanColor: "#FFFFFF",
  },
  {
    starImage: "/one-star.png",
    review:
      "Somehow this guy appeared in our company, If I knew what disaster awaits I would take actions for him to dissapear. I thought I was peacefull guy, then I met this individual",
    company: IoLogoAndroid,
    companyName: "Android",
    logoColor: "#3DDC84",
    spanColor: "#FFFFFF",
  },
];

const imageArray = [
  "/images/awfull-1.png",
  "/images/awfull-2.png",
  "/images/awfull-3.png",
];

const modelsElements: ModelsType[] = [
  {
    id: nanoid(),
    companyName: "Netflix",
    hateReason: "Slandered me",
    model: NetflixModel,
    scale: 60,
  },
  {
    id: nanoid(),
    companyName: "Facebook",
    hateReason: "Hired hitman to kill me",
    model: FacebookModel,
    scale: 2,
  },
  {
    id: nanoid(),
    companyName: "Nike",
    hateReason: "Cursed me",
    model: NikeModel,
    scale: 1,
  },
];

export const titleAnimationAndFilterAnimation = {
  opacity: 0,
  y: 50,
  stagger: 0.1,
  ease: "power3.out",
};

export {
  NavLinks,
  series,
  expCards,
  imageArray,
  modelsElements,
  titleAnimationAndFilterAnimation,
};
