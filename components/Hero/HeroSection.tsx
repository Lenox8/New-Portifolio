import React from "react";
import { SocialFlipButtonDemo } from "../AnimatedButton/SocialButton";
import AppAccent from "../AccentFrame/Accent";
import AppBadge from "../Badge/Badge";
// import Typing from "../Typing/Typing";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-16 py-4 mt-15  flex flex-col gap-10 mb-40">
      <h1 className="text-[45px]  md:text-[70px] lg:text-[98px] max-w-5xl tracking-normal select-none font-semibold">
        Architecting the <span className="text-white">Modern Web</span>
      </h1>
      <div className="flex mb-15">
        <SocialFlipButtonDemo />
      </div>
      {/* BADGE */}

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <AppBadge />
        </div>
        <div className="flex self-end max-w-3xl">
          <AppAccent />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
