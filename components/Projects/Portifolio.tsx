"use client"
import React from "react";
import AppPortifolioGlitch from "../GlitchText/PortifolioGlitch";
import BorderBeamCornerCutCard from "../ui/neonblade-ui/border-beam-corner-cut-card";
import {  ExternalLink, Code2 } from "lucide-react";
import { BsGithub } from "react-icons/bs";


const projects = [
  {
    id: 1,
    title: "Vet Landing Page",
    description: "A Vet Landing Page that allows users to explore the wide range of veterinary services we offer. This website is designed to be fully responsive, intuitive, and easy to navigate, ensuring a smooth and enjoyable user experience across all devices",
    image: "/2.webp", 
    stacks: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Lenox8/Veterinariat",
    liveUrl: "https://veterinaria-beige-omega.vercel.app",
  },
  {
    id: 2,
    title: "Real Estate Landing Page",
    description: "Real estate landing page that provide services through intuitive interfaces",
    image: "/4.webp",
    stacks: ["ReactjS", "Tailwind Css"],
    githubUrl: "https://github.com/Lenox8/Real-Estate",
    liveUrl: "https://real-estate-maputo.vercel.app", // In case there is no live demo (e.g., hardware project)
  },
  {
    id: 3,
    title: "Isdb web repository",
    description: "A web application designed to store, manage, and provide easy access to academic articles. It allows users to publish, search, and explore scientific content through a clean and intuitive interface. {On developing}",
    image: "/3.webp",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Spring 19"],
    githubUrl: null,
    liveUrl: "https://isdb-web-repository.vercel.app/",
  },
  {
    id: 4,
    title: "Clardia Tours Tour Landing page",
    description: "A tour landing page that provides tour packages in Mozambique, through responsive and intuitive interfaces",
    image: "/1.webp",
    stacks: ["Tailwind Css", "NextJs", "TypeScript", "Shadcn"],
    githubUrl: null,
    liveUrl: "https://www.clardiatours.com/",
  },
  {
    id:5,
    title: "AI Spam/Ham Classifier (Learning Agent)",
    subtitle: "Supervised Machine Learning & Natural Language Processing",
    image: "/dataset-cover.webp",
    description:
      "An intelligent agent using Multinomial Naive Bayes that improves performance over time. It cleans raw text, extracts term frequencies, and persists trained probability models for real-time inference.",
    stacks: ["Python 3.11", "Scikit-Learn", "Pandas", "Naive Bayes", "Joblib", "NLP"],
    githubUrl: "https://github.com/Lenox8/SMS-Spam-Classifier",
    liveUrl: null,
  },
  {
  id: 6,
  title: "BookStore Microservices",
  description: "Distributed e-commerce architecture for bookstore management, built with decoupled microservices and event-driven communication. [ on developing ]",
   image: "/BookStore.webp",
  stacks: ["NestJs", "Sequelize", "TypeScript", "MySQL", "RabbitMQ", "Redis"],
  githubUrl: "https://github.com/Lenox8/-BookStore-Microservice",
  liveUrl: null,
}
];

const Portifolio = () => {
  return (
    <div className="w-full mx-auto px-4 py-2 md:px-16 mb-30">
      <h1 className="mb-12 text-center">
        <AppPortifolioGlitch />
      </h1>

      {/* Grid de Projetos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-5">
        {projects.map((project, index) => (
          <BorderBeamCornerCutCard
            key={`${project.id}-stack-${index}`}
            variant="single"
            beamColor="cyan"
            corner="top-right"
            bgColor="black"
            glowIntensity="low"
            size="sm"
            className="h-full flex flex-col justify-between overflow-hidden group border border-slate-800/80 hover:border-cyan-500/50 transition-colors duration-300"
          >
            <div className="p-2 flex flex-col h-full justify-between">
              <div>
                {/* Imagem Ilustrativa do Projeto */}
                <div className="relative w-full h-48 md:h-56 mb-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback visual caso a imagem não carregue
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Título e Descrição */}
                <div className="px-2">
                  <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2 mb-2">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div>
                {/* Stacks / Tecnologias Usadas */}
                <div className="px-2 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/*  GitHub & Live Preview */}
                <div className="px-2 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                    >
                      {/* <Github className="w-4 h-4" /> */}
                      {<BsGithub className="w-4 h-4"/>}
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="text-xs text-slate-600">Private Repo</span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black transition-all duration-300"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </BorderBeamCornerCutCard>
        ))}
      </div>
    </div>
  );
};

export default Portifolio;