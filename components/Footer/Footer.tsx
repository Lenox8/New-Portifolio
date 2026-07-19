"use client"
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Footer, { DiscordIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "../ui/neonblade-ui/footer";


const socialLinks = [
  { label: "GitHub",   href: "https://github.com/lenox8",   icon: <GithubIcon /> },
  { label: "Facebook",  href: "https://web.facebook.com/profile.php?id=100090053387904",  icon: <FaFacebook /> },
  { label: "Instagram",  href: "https://www.instagram.com/lenox.x86",  icon: <FaInstagram /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lenoxmucumbi", icon: <LinkedInIcon /> },
];

const linkGroups = [
  {
    title: "Product",
    links: [
      { label: "Components", href: "/components" },
      { label: "CLI Tool",   href: "/docs" },
      { label: "Templates",  href: "#" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "API Reference",   href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",   href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function AppFooter() {
  return (
    <>
      {/* Centered */}
      <Footer
        variant="centered"
        color="cyan"
        logoText="Lenox.dev"
        navLinks={[
          { label: "Home", href: "#" },
          { label: "Services",       href: "#services" },
          { label: "About",       href: "#about" },
          { label: "Contact",    href: "#contact" },
        ]}
        socialLinks={socialLinks}
        copyright="© {year} Lenox.dev · All rights reserved."
      />


    </>
  );
}