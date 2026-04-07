import { nanoid } from "nanoid";
import type { LinkType } from "../types/type";

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

export { NavLinks };
