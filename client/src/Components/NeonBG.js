import React from "react";

const NeonBackground = () => (
  <>
    <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
    <div className="pointer-events-none fixed top-[10%] left-[5%] w-[420px] h-[420px] bg-cyan-500/20 blur-[140px] animate-glow" />
    <div className="pointer-events-none fixed bottom-[10%] right-[5%] w-[420px] h-[420px] bg-purple-500/20 blur-[140px] animate-glow delay-500" />
  </>
);

export default NeonBackground;