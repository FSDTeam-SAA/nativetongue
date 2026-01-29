"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text 
        bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        COMING SOON
      </motion.h1>
    </div>
  );
}
