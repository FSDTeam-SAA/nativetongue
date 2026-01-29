import { ClockCheck, Send, ThumbsUp } from "lucide-react";
import React from "react";

const LiveFeed = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="w-ful p-6 bg-[#151515] rounded-xl border border-gray-800">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white font-semibold text-lg">@jason_bets</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1 ">
              {" "}
              <ClockCheck className="h-4 w-4" /> 15m ago
            </p>
          </div>
          <div className="flex items-center gap-3 text-white border border-gray-600 py-2 px-3 rounded-3xl cursor-pointer">
            <ThumbsUp size={20} className="fill-white/75" />
            <span className="text-sm">+42</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="px-3 py-1.5 border border-gray-700 rounded-3xl text-sm">
            <span className="opacity-80"> Sport:</span>{" "}
            <span className="text-white">NBA</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Lakers have been struggling on the road lately, and with LeBron
          questionable, I love the Celtics to cover here comfortably at home.
          Their defense has been elite over the last 5 games.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Comments Section */}
        <h4 className="font-semibold mb-4 text-gray-600">Comments</h4>

        {/* Comments List */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-white font-medium">court_king</span>
              <span className="text-gray-500 text-xs">court_king</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">court_king</p>
          </div>
        </div>

        {/* Comment Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="flex-1 bg-black/85 text-white rounded-xl px-4 py-3 text-sm focus:outline-none border border-gray-600"
          />
          <button className="bg-gray-800 hover:bg-gray-700 text-blue-400 rounded px-4 py-3 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
