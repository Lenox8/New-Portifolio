"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaDiscord,
    FaWhatsapp,
} from "react-icons/fa";

export interface SocialItem {
    letter: string;
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
}

interface SocialFlipButtonProps {
    items?: SocialItem[];
    className?: string;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
    platform?: string;
    plataform?: string;
    href?: string;
}

const platformMap: Record<string, { letter: string; icon: React.ReactNode; label: string }> = {
    github: { letter: "G", icon: <FaGithub />, label: "Github" },
    twitter: { letter: "T", icon: <FaTwitter />, label: "Twitter" },
    linkedin: { letter: "L", icon: <FaLinkedin />, label: "LinkedIn" },
    instagram: { letter: "I", icon: <FaInstagram />, label: "Instagram" },
    facebook: { letter: "F", icon: <FaFacebook />, label: "Facebook" },
    discord: { letter: "D", icon: <FaDiscord />, label: "Discord" },
    whatsapp: { letter: "W", icon: <FaWhatsapp />, label: "WhatsApp" },
    email: { letter: "E", icon: <FaEnvelope />, label: "Email" },
};

const defaultItems: SocialItem[] = [
    { letter: "C", icon: <FaGithub />, label: "Github", href: "#" },
    { letter: "O", icon: <FaTwitter />, label: "Twitter", href: "#" },
    { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "#" },
    { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "#" },
    { letter: "C", icon: <FaEnvelope />, label: "Email", href: "#" },
    { letter: "T", icon: <FaDiscord />, label: "Discord", href: "#" },
];

const SocialFlipNode = ({
    item,
    index,
    isHovered,
    setTooltipIndex,
    tooltipIndex,
    itemClassName,
    frontClassName,
    backClassName,
}: {
    item: SocialItem;
    index: number;
    isHovered: boolean;
    setTooltipIndex: (val: number | null) => void;
    tooltipIndex: number | null;
    itemClassName?: string;
    frontClassName?: string;
    backClassName?: string;
}) => {
    const Wrapper = item.href ? "a" : "div";
    const wrapperProps = item.href
        ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
        : { onClick: item.onClick };

    return (
        <Wrapper
            {...wrapperProps}
            className={cn("relative h-10 w-10 cursor-pointer", itemClassName)}
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setTooltipIndex(index)}
            onMouseLeave={() => setTooltipIndex(null)}
        >
            <AnimatePresence>
                {isHovered && tooltipIndex === index && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        animate={{ opacity: 1, y: -45, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 z-50 whitespace-nowrap rounded-lg bg-neutral-950/90 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md"
                    >
                        {item.label}
                        {/* Arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-neutral-950 border-r border-b border-white/10" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    delay: index * 0.06,
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front - Letter (Efeito Vidro Fosco Escuro) */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-base font-bold text-white shadow-inner backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10",
                        frontClassName
                    )}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {item.letter}
                </div>

                {/* Back - Icon (Destaque Sutil ao Virar) */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded-sm bg-white text-base text-neutral-950 font-bold border border-white shadow-md",
                        backClassName
                    )}
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    {item.icon}
                </div>
            </motion.div>
        </Wrapper>
    );
};

export default function SocialFlipButton({
    items,
    className,
    itemClassName,
    frontClassName,
    backClassName,
    platform,
    plataform,
    href,
}: SocialFlipButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

    const targetPlatform = (platform ?? plataform ?? "").toLowerCase();
    const matched = platformMap[targetPlatform];

    const resolvedItems = items ?? (platform || plataform || href
        ? [
              {
                  letter: matched ? matched.letter : (platform ?? plataform ?? "S").charAt(0).toUpperCase(),
                  icon: matched ? matched.icon : <FaEnvelope />,
                  label: matched ? matched.label : (platform ?? plataform ?? "Social"),
                  href,
              },
          ]
        : defaultItems);

    return (
        <div className={cn("inline-flex items-center justify-center", className)}>
            {/* Container Principal com Efeito Glassmorphism */}
            <div
                className="group relative flex items-center justify-center gap-2 rounded-2xl border border-white bg-neutral-950/20 p-2.5 shadow-2xl backdrop-blur-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setTooltipIndex(null);
                }}
            >
                {/* Border Lines Container - Linhas de animação sutil em branco */}
                <div className="absolute -inset-px overflow-hidden rounded-2xl pointer-events-none">
                    {/* Animated Top Border Line */}
                    <motion.div
                        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Animated Bottom Border Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                {resolvedItems.map((item, index) => (
                    <SocialFlipNode
                        key={index}
                        item={item}
                        index={index}
                        isHovered={isHovered}
                        setTooltipIndex={setTooltipIndex}
                        tooltipIndex={tooltipIndex}
                        itemClassName={itemClassName}
                        frontClassName={frontClassName}
                        backClassName={backClassName}
                    />
                ))}
            </div>
        </div>
    );
}