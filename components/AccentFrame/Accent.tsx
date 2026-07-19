import AccentFrame from "../ui/neonblade-ui/accent-frame";


export default function AppAccent() {
  return (
    <>
      {/* Quad corners + dual color + glow */}
      <AccentFrame
        color="cyan"
        mode="quad"
        hoverEffect="trace"
        cornerLength={24}
        cornerThickness={3}
        className="text-white text-center"
      >
        <p className="text-xl text-start">
          Hi, I’m Lenox. Specializing in modern web technologies, I turn complex
          ideas into fast, reliable, and maintainable applications. I bridge the
          gap between seamless user experiences and robust backend systems to
          deliver impact-driven digital solutions.
        </p>
      </AccentFrame>
    </>
  );
}
