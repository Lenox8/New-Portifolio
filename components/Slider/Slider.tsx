import React from "react";
import SlidingLogoMarquee, { SlidingLogoMarqueeItem } from "../lightswind/sliding-logo-marquee";
import { 
  SiJavascript, SiNestjs, SiNodedotjs, SiNextdotjs, 
  SiReact, SiC, SiTailwindcss, SiMysql, 
  SiMongodb, SiDocker, SiRedis, SiTypescript, 
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5
} from "react-icons/si";

export function StackMarquee() {

const logos: SlidingLogoMarqueeItem[] = [
  { id: "js", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiJavascript size={42} className="text-yellow-400" /> JavaScript</div> },
  { id: "ts", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiTypescript size={42} className="text-blue-500" /> TypeScript</div> },
  { id: "next", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiNextdotjs size={42} className="text-white" /> Next.js</div> },
  { id: "react", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiReact size={42} className="text-cyan-400" /> React</div> },
  { id: "node", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiNodedotjs size={42} className="text-green-500" /> Node.js</div> },
  { id: "nest", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiNestjs size={42} className="text-red-600" /> NestJS</div> },
  { id: "tailwind", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiTailwindcss size={42} className="text-cyan-400" /> Tailwind</div> },
  { id: "docker", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiDocker size={42} className="text-blue-400" /> Docker</div> },
  { id: "mysql", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiMysql size={42} className="text-blue-300" /> MySQL</div> },
  { id: "mongo", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiMongodb size={42} className="text-green-400" /> MongoDB</div> },
  { id: "redis", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiRedis size={42} className="text-red-500" /> Redis</div> },
  { id: "c", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiC size={42} className="text-blue-600" /> C</div> },
  { id: "express", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiExpress size={42} className="text-white" /> Express</div> },
  { id: "git", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiGit size={42} className="text-orange-500" /> Git</div> },
  { id: "github", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiGithub size={42} className="text-white" /> GitHub</div> },
  { id: "html", content: <div className="flex items-center gap-2 text-white text-lg font-medium"><SiHtml5 size={42} className="text-orange-600" /> HTML5</div> },
];

  return (
    <div className="w-full py-4 mb-15">
      <SlidingLogoMarquee
        items={logos}
        speed={1.5}              
        height="100px"              
        enableBlur={true}          
        blurIntensity={3}          
        pauseOnHover={true}       
        showControls={false}       
        showGridBackground={false} 
      />
    </div>
  );
}