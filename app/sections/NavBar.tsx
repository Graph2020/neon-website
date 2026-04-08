"use client";
import type { JSX } from "react";
import { GiVineFlower } from "react-icons/gi";
import { NavLinks } from "../const";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavBar(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="font-main relative flex h-20 w-full items-center justify-between border-b-4 border-b-white p-2 sm:p-5">
      <div className="flex items-center gap-3">
        <div className="icon-container">
          <GiVineFlower />
        </div>
        <h2 className="text-main text-base">NEON ARCHIVE</h2>
      </div>

      {/* menu burger */}
      <button className="relative flex cursor-pointer flex-col gap-2 sm:hidden">
        <span className="absolute top-1/2 left-1/2 size-12 -translate-1/2 sm:pointer-fine:hidden"></span>
        <span className="butger-line"></span>
        <span className="butger-line"></span>
        <span className="butger-line"></span>
      </button>

      <ul className="hidden gap-3 sm:flex md:pr-5 lg:pr-18">
        {NavLinks.map((navlink) => {
          // make link pink color when active
          const isActive = pathname === navlink.href;
          const navClass = isActive
            ? "nav-link hover:text-white text-main"
            : "nav-link";
          return (
            <li key={navlink.id} className={navClass}>
              <Link href={navlink.href}>{navlink.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden size-12 bg-[url('/giphy.gif')] bg-cover bg-center md:block"></div>
    </nav>
  );
}
