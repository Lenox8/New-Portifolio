"use client"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" I specialize in system architecture and scalable web engineering. Frombackend services to frontend performance, I approach development with structure, clarity, and long-term thinking."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} style={{ fontSize: "22px", fontWeight: "medium" }} />;
}