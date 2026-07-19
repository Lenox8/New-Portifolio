import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

// Define your timeline events
const events = [
  {
    year: "2023",
    title: "University & Programming Foundations",
    subtitle: "Introduction to Computer Science",
    description: "Started university studies in Computer Programming. Learned fundamental algorithms, logic, and core language types, gaining initial hands-on experience using VisualG and early career tools."
  },
  {
    year: "2024",
    title: "Desktop Application Development",
    subtitle: "2nd Year of University",
    description: "Focused on mastering the Java programming language and building native desktop applications."
  },
  {
    year: "2025",
    title: "Transition to Web & Full-Stack Development",
    subtitle: "3rd Year of University",
    description: "Entered the web ecosystem, mastering HTML, CSS, and JavaScript, before advancing to React and Next.js (building clardiatours.com). Simultaneously expanded into backend development using Node.js, implementing login systems, JWT authentication, Caching methods and backend architecture."
  },
  {
    year: "2026 (May - July)",
    title: "Robotics Engineering Internship",
    subtitle: "STEMMOZ Labs",
    description: "Completed a professional technical internship focused on automated systems. Worked with robotics programming using Avishkaar robots and Rev Robotics, hardware integration with Arduino, automation via Python, and computer vision concepts."
  },
  {
    year: "2026 (Present)",
    title: "Advanced Specialization with NestJS & Next.js",
    subtitle: "Current Focus",
    description: "Deepening expertise in robust software architecture, combining the NestJS ecosystem on the backend with the performance of Next.js on the frontend to build complete, scalable web applications."
  }
];

export function ScrollTimelineExample() {
  return (
    <ScrollTimeline 
      events={events}
      title="My Journey"
      subtitle="Scroll to explore my timeline"
      progressIndicator={true}
      cardAlignment="alternating"
      revealAnimation="fade"
      cardVariant="outlined"
      cardEffect="glow"
      lineColor="#fff"
    />
  )
}