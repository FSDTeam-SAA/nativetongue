import Image from "next/image";
import React from "react";
import Header from "../_components/header";

const bettors = [
  { id: 1, name: "BankrollKing", profit: "$4,987", strengths: ["NHL", "NBA", "NFL"], img: "/image1.png" },
  { id: 2, name: "BetMaster3000", profit: "$3,456", strengths: ["MLB", "NHL", "Soccer"], img: "/image4.png" },
  { id: 3, name: "BankrollKing", profit: "$4,987", strengths: ["NHL", "NBA", "NFL"], img: "/image2.png" },
  { id: 4, name: "BetMaster3000", profit: "$3,456", strengths: ["MLB", "NHL", "Soccer"], img: "/image3.png" },
  { id: 5, name: "BankrollKing", profit: "$4,987", strengths: ["NHL", "NBA", "NFL"], img: "/image2.png" },
  { id: 6, name: "BetMaster3000", profit: "$3,456", strengths: ["MLB", "NHL", "Soccer"], img: "/image5.png" },
  { id: 7, name: "BankrollKing", profit: "$4,987", strengths: ["NHL", "NBA", "NFL"], img: "/image6.png" },
  { id: 8, name: "BetMaster3000", profit: "$3,456", strengths: ["MLB", "NHL", "Soccer"], img: "/image7.png" },
];

const Leaderboard = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8 font-sans">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Leaderboard</h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Follow the sharpest bettors
          </p>
        </header>

        {/* Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button className="px-5 py-2 rounded-full border border-[#22c55e] bg-[#064e3b]/30 text-[#22c55e] font-medium text-sm whitespace-nowrap">
            Top ROI
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 text-sm whitespace-nowrap hover:bg-gray-800 transition">
            Hottest
          </button>
          <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-300 text-sm whitespace-nowrap hover:bg-gray-800 transition">
            All Sports
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bettors.map((bettor) => (
            <div
              key={bettor.id}
              className="bg-[#1a1a1a] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-transparent hover:border-gray-800 transition shadow-xl"
            >

              {/* Left Content */}
              <div className="space-y-4">

                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  <Image
                    src={bettor.img}
                    alt={bettor.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-700"
                  />
                  <h3 className="text-lg sm:text-xl font-bold">
                    {bettor.name}
                  </h3>
                </div>

                {/* Info */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    Profit ·{" "}
                    <span className="text-[#22c55e] font-semibold">
                      {bettor.profit}
                    </span>
                  </p>

                  {/* Strengths */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                      Strengths
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {bettor.strengths.map((sport) => (
                        <span
                          key={sport}
                          className="px-3 py-1 border border-[#2A2A2A] rounded-full text-xs text-gray-300"
                        >
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              {/* Follow Button */}
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white w-full sm:w-auto px-6 py-2 rounded-full font-semibold text-sm transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Leaderboard;
