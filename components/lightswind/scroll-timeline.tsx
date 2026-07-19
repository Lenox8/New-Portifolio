"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description: "Description of the achievement or milestone reached.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-primary/30",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "outlined",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < events.length) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x: cardAlignment === "left" ? -100 : cardAlignment === "right" ? 100 : index % 2 === 0 ? -100 : 100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.7,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: false, margin: "-100px" },
    };
  };

  const getConnectorClasses = () => {
    const baseClasses = cn("absolute left-1/2 transform -translate-x-1/2", lineColor);
    const widthStyle = `w-[${progressLineWidth}px]`;
    switch (connectorStyle) {
      case "dots": return cn(baseClasses, "w-1 rounded-full");
      case "dashed":
        return cn(baseClasses, widthStyle, `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`);
      case "line":
      default:
        return cn(baseClasses, widthStyle);
    }
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
    
    // Customização do tema escuro com bordas roxas neon
    const variantClasses = {
      default: "bg-card border shadow-sm",
      elevated: "bg-card border border-border/40 shadow-md",
      outlined: "bg-neutral-950/70 backdrop-blur-md border-2 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      filled: "bg-primary/10 border border-primary/30",
    };
    
    const effectClasses = {
      none: "",
      glow: "hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]",
      shadow: "hover:shadow-lg hover:-translate-y-1",
      bounce: "hover:scale-[1.02] active:scale-[0.98]",
    };

    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+20px)]"
          : "lg:ml-[calc(50%+20px)]"
        : cardAlignment === "left"
        ? "lg:mr-auto lg:ml-0"
        : "lg:ml-auto lg:mr-0";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      alignmentClassesDesktop,
      "w-full lg:w-[calc(50%-40px)]"
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        darkMode ? "bg-background text-foreground" : "",
        className
      )}
    >
      <div className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">
          {title}
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pb-24">
        <div className="relative mx-auto">
          <div className={cn(getConnectorClasses(), "h-full absolute top-0 z-10")}></div>

          {progressIndicator && (
            <>
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                  boxShadow: `0 0 15px rgba(99,102,241,0.5), 0 0 25px rgba(168,85,247,0.3)`,
                }}
              />
              <motion.div
                className="absolute z-20"
                style={{
                  top: progressHeight,
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                    boxShadow: `0 0 15px 4px rgba(168, 85, 247, 0.6), 0 0 25px 8px rgba(99, 102, 241, 0.4)`,
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20">
            {events.map((event, index) => {
              const yOffset = useTransform(
                smoothProgress,
                [0, 1],
                [parallaxIntensity * 100, -parallaxIntensity * 100]
              );
              return (
                <div
                  key={event.id || index}
                  ref={(el) => { timelineRefs.current[index] = el; }}
                  className={cn(
                    "relative flex items-center mb-20 py-4 flex-col lg:flex-row",
                    cardAlignment === "alternating"
                      ? index % 2 === 0 ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"
                      : cardAlignment === "left" ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"
                  )}
                >
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-30 left-1/2 -translate-x-1/2">
                    <motion.div
                      className={cn(
                        "w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors duration-300",
                        index <= activeIndex ? "border-purple-500 bg-neutral-950" : "border-neutral-700 bg-neutral-900"
                      )}
                      animate={index <= activeIndex ? {
                        scale: [1, 1.2, 1],
                        boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 14px rgba(168,85,247,0.8)", "0 0 0px rgba(168,85,247,0)"]
                      } : {}}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                    />
                  </div>

                  <motion.div
                    className={cn(getCardClasses(index), "mt-12 lg:mt-0")}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-100px" }}
                    style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                  >
                    {/* Alterado para transparente para herdar a variante dark/purple */}
                    <Card className="bg-transparent border-none h-full w-full">
                      <CardContent className="p-6">
                        {dateFormat === "badge" ? (
                          <div className="flex items-center mb-2">
                            {event.icon || <Calendar className="h-4 w-4 mr-2 text-purple-400" />}
                            <span className={cn("text-sm font-bold text-purple-400")}>
                              {event.year}
                            </span>
                          </div>
                        ) : (
                          <p className="text-lg font-bold text-purple-400 mb-2">{event.year}</p>
                        )}
                        <h3 className="text-xl font-bold mb-1 text-neutral-100">
                          {event.title}
                        </h3>
                        {event.subtitle && (
                          <p className="text-purple-300/80 font-medium text-sm mb-2">
                            {event.subtitle}
                          </p>
                        )}
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};