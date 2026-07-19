import AppFooter from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import Navbar from "@/components/NavigationBar/Navbar";
import CardsNeon from "@/components/ServicesProvided/Services";
import { StackMarquee } from "@/components/Slider/Slider";
import { ScrollTimelineExample } from "@/components/TimelineProjects/TimeLine";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="grow">
          <HeroSection />
          <CardsNeon />
          <StackMarquee />
          <ScrollTimelineExample />
        </div>
        <AppFooter />
      </main>
    </>
  );
}