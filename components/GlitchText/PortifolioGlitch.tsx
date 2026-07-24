import GlitchText from "../ui/neonblade-ui/glitch-text";


export default function AppPortifolioGlitch() {
  return (
    <div className="flex flex-col gap-8 mt-10">
      {/* children-only — text prop is inferred automatically */}
      <h2 className="text-[16px] text-center md:text-2xl lg:text-3xl font-bold font-orbitron uppercase text-white">
        <GlitchText mode="hover">[ PORTIFOLIO] </GlitchText>
      </h2>
    </div>
  );
}