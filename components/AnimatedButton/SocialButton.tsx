import SocialFlipButton, {
  SocialItem,
} from "@/components/ui/social-flip-button";
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export function SocialFlipButtonDemo() {
  const contactItems: SocialItem[] = [
    {
      letter: "C",
      icon: <FaGithub />,
      label: "Github",
      href: "https://github.com/lenox8",
    },
    {
      letter: "O",
      icon: <FaDiscord />,
      label: "Discord",
      href: "https://discord.gg/seu-link",
    },
    {
      letter: "N",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/+258847072832",
    },
    {
      letter: "T",
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/lenox.x86",
    },
    {
      letter: "A",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lenoxmucumbi",
    },
    {
      letter: "C",
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=100090053387904",
    },
    {
      letter: "T",
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:lenoxmucumbe14@gmail.com",
    },
  ];

  return (
    <div className="">
      <SocialFlipButton items={contactItems} />
    </div>
  );
}
