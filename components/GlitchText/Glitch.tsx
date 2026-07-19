import GlitchText from "../ui/neonblade-ui/glitch-text";


export default function AppGlitchText() {
  return (
    <div className="flex flex-col gap-8 mt-10">
      {/* children-only — text prop is inferred automatically */}
      <h2 className="text-[16px] text-center md:text-2xl lg:text-3xl font-bold font-orbitron uppercase text-white">
        <GlitchText mode="hover">[ BUILD WITH  A MODERN, HIGH-PERFORMANCE STACK ] </GlitchText>
      </h2>
    </div>
  );
}