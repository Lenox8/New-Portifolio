import React from "react";
import LineHoverLink from "../ui/line-hover-link";
import Image from "next/image";
import logotipo from "@/public/LOGO.svg";
import { AvatarDemo } from "../Avatar/Avatar";

const Navbar = () => {
  return (
    <nav className="w-full mx-auto border-b border-white/40 px-6 py-4 flex items-center justify-between">
      <div className="shrink-0">
        <h2 className="text-xl font-bold tracking-tight text-white sr-only">
          Logotipo
        </h2>
        <Image src={logotipo} alt="logotipo" />
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <li>
          <LineHoverLink
            href="/"
            variant="scribble"
            className="text-md font-medium tracking-wider"
          >
            HOME
          </LineHoverLink>
        </li>

        <li>
          <LineHoverLink
            href="/about"
            variant="scribble"
            className="text-md font-medium tracking-wider"
          >
            ABOUT
          </LineHoverLink>
        </li>

        <li>
          <LineHoverLink
            href="/services"
            variant="scribble"
            className="text-md font-medium tracking-wider"
          >
            SERVICES
          </LineHoverLink>
        </li>

        <li>
          <LineHoverLink
            href="/contact"
            variant="scribble"
            className="text-md font-medium tracking-wider"
          >
            CONTACT
          </LineHoverLink>
        </li>
      </ul>
      <div className="shrink-0 ">
        <span><AvatarDemo /></span>
      </div>
    </nav>
  );
};

export default Navbar;
