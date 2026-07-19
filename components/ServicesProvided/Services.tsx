import { Cpu, Monitor, Server, Zap } from "lucide-react";
import NeonGlowCornerCutCard from "../ui/neonblade-ui/neon-glow-corner-cut-card";
import AppGlitchText from "../GlitchText/Glitch";

export default function CardsNeon() {
  return (
    <section className="flex flex-col gap-10 items-center  px-4 py-10  mb-30">
      {/* title */}
      <h1 className="text-[16px] md:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-white">
        [ Technical Expertise ]
      </h1>
      <p className="text-[24px] text-center text-gray-400 mt-2 max-w-xl mx-auto">
        Robust, scalable solutions focused on performance and user experience
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 px-4 mb-5">
        <NeonGlowCornerCutCard
          title="High-end Interfaces"
          description="Development of fluid SPA/SSR applications focused on responsive UX/UI, SEO, and web performance using Next.js and Tailwind CSS."
          colorA="cyan"
          colorB="pink"
          hoverEffect="gradient"
          icon={<Monitor className="w-full h-full" />}
        />
        <NeonGlowCornerCutCard
          title="Solid Architecture"
          description="Development of robust APIs, microservices, and resilient systems with Node.js and NestJS, prioritizing security and maintainability."
          colorA="cyan"
          colorB="pink"
          hoverEffect="gradient"
          icon={<Server className="w-full h-full" />}
        />
        <NeonGlowCornerCutCard
          title="Database & Cache"
          description="Design of efficient relational and non-relational database schemas, along with query optimization using intelligent caching strategies."
          colorA="cyan"
          colorB="pink"
          hoverEffect="gradient"
          icon={<Cpu className="w-full h-full" />}
        />
        <NeonGlowCornerCutCard
          title="System Integration"
          description="Event-driven asynchronous integration, messaging systems, and automation that accelerate processes and ensure high availability."
          colorA="cyan"
          colorB="pink"
          hoverEffect="gradient"
          icon={<Zap className="w-full h-full" />}
        />
      </div>
      <div className="mx-auto flex flex-col items-center gap-5">
        <AppGlitchText />
      </div>
    </section>
  );
}
