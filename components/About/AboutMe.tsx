import React from "react";
import Typing from "../Typing/Typing";

const AboutMe = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-16 py-4 flex flex-col gap-10 mb-30">
      <h1 className="text-black/65 font-semibold">[ ABOUT ]</h1>
      <h2 className="text-[47px] tracking-normal font-semibold max-w-6xl">
        Specializing in modern web technologies, I turn complex ideas into fast,
        reliable, and maintainable applications.
      </h2>
      <p className="text-sm tracking-normal font-exlight">
        <Typing />
      </p>
    </section>
  );
};

export default AboutMe;
