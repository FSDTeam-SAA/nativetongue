"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0d0d] text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#10b981]/10 rounded-full blur-[120px]" />
      </div>

      {/* Card Wrapper */}
      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#ef4444]/10 rounded-2xl border border-[#ef4444]/20">
            <AlertCircle size={48} className="text-[#ef4444]" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-[120px] mb-10 sm:text-[140px] font-black tracking-tight leading-none text-white/20">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold -mt-6">
          Odds are against you.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-lg">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
          Let&apos;s get you back in the game.
        </p>

        {/* Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#1a1a1a]
                       px-6 py-3 font-semibold hover:bg-gray-800 transition"
          >
            <ChevronLeft size={20} />
            Go Back
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#10b981]
                       px-6 py-3 font-semibold text-black hover:bg-[#059669] transition"
          >
            <Home size={20} />
            Return Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
