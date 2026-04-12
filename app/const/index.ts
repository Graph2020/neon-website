import { nanoid } from "nanoid";
import type { LinkType } from "../types/type";
import type { SerieProps } from "../types/type";
const NavLinks: LinkType[] = [
  {
    name: "Home",
    href: "/",
    id: nanoid(),
  },
  {
    name: "Gallery",
    href: "/gallery",
    id: nanoid(),
  },
  {
    name: "Premiere",
    href: "/premiere",
    id: nanoid(),
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

export { NavLinks, series };
