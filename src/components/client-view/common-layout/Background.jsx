"use client";

import { motion } from "framer-motion";

export default function Background() {

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">

      {/* Ambient Glow */}

      <div className="absolute -top-60 -left-60 h-[650px] w-[650px] rounded-full bg-orange-500/10 blur-[170px]" />

      <div className="absolute top-1/3 -right-56 h-[550px] w-[550px] rounded-full bg-orange-400/8 blur-[170px]" />

      <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/6 blur-[150px]" />

      {/* Mesh Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Radial Highlight */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(249,115,22,.08), transparent 55%)",
        }}
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.8) .6px, transparent .6px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.45) 100%)",
        }}
      />
    </div>
  );
}
