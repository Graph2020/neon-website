import type { JSX } from "react";
import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-main font-body center-element h-48 w-full flex-col gap-5 border-t-2 p-2 text-center text-base text-white md:gap-3 lg:flex-row lg:justify-start xl:gap-5 xl:pl-16">
      <h2 className="text-main font-main text-xl">Neon Catalog</h2>
      <p>&copy; 2026 Neon Catalog. All rights reserved.</p>
      <div className="grid grid-cols-2 gap-3 md:flex">
        <p>privacy policy</p>
        <p>terms of service</p>
        <p>contact us</p>
        <p>about us</p>
      </div>
    </footer>
  );
}
