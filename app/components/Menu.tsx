"use client";
import { useRef, type JSX } from "react";
import { NavLinks } from "../const";
import Link from "next/link";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
export default function Menu({
  activeMenu,
}: {
  activeMenu: boolean;
}): JSX.Element {
  const menuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useGSAP(
    () => {
      if (activeMenu) {
        gsap.fromTo(
          menuRef.current,
          {
            y: "-100%",
          },
          {
            y: "0%",
            ease: "power3.out",
            duration: 0.8,
          },
        );

        const splitLinks = new SplitText(".menu-text", { type: "chars" });

        gsap.from(splitLinks.chars, {
          opacity: 0,
          stagger: {
            each: 0.05,
            from: "random",
          },
        });
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          ease: "power3.in",
          duration: 0.8,
        });
      }
    },
    { dependencies: [activeMenu], scope: menuRef },
  );

  const displayLinks = NavLinks.map((link) => (
    <Link
      key={link.id}
      href={link.href}
      className={`flex w-full items-center text-lg text-white uppercase ${path === link.href ? "opacity-100" : "opacity-60"} `}
    >
      <span className="text-secondary center-element mr-2 drop-shadow-[0_0_10px_var(--color-secondary)]">
        {link.icon && <link.icon />}
      </span>{" "}
      <span className="menu-text mr-auto">{link.name}</span>
      {path === link.href && (
        <span className="bg-secondary inline-block size-2 rounded-full shadow-[0_0_15px_0_var(--color-secondary)]"></span>
      )}
    </Link>
  ));
  return (
    <div
      ref={menuRef}
      className="menu-shadow font-body fixed inset-0 z-30 flex h-dvh w-full flex-col items-start bg-black px-6 pt-50"
    >
      <h2 className="text-main center-element text-2xl font-black">
        {" "}
        <span className="bg-secondary mr-2 inline-block h-12 w-1 rounded-ss-2xl shadow-[0_0_5px_0_var(--color-secondary)]"></span>{" "}
        <span className="menu-text w-36">Select Your Downfall</span>
      </h2>
      <div className="mt-10 flex w-full flex-col gap-4 pl-3 text-lg">
        {displayLinks}
      </div>
    </div>
  );
}
