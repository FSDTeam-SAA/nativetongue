import { ChartSpline, Plus } from "lucide-react";
import React from "react";
import LiveFeed from "./_components/live-feed";
import Link from "next/link";

const page = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center font-bold gap-2 text-xl">
          <span>
            <ChartSpline className="h-5 w-5" />
          </span>
          <span>Live Feed</span>
        </h1>

        <Link href={"/live-feed/post-pick"}>
          <button className="flex items-center font-bold gap-2 bg-gradient-to-r from-[#329150] to-[#0d4728] hover:bg-gradient-to-r hover:from-[#0d4728] hover:to-[#329150] py-3 px-4 rounded-3xl">
            <span>
              <Plus></Plus>
            </span>

            <span>New Pick</span>
          </button>
        </Link>
      </div>

      <div>
        <LiveFeed />
      </div>
    </div>
  );
};

export default page;
