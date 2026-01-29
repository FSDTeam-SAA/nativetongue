import React from "react";
import PostPickForm from "./_components/post-pick-form";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const page = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white/90">New Pick</h1>

          <div className="flex items-center text-sm text-gray-400 mt-1">
            <Link href={"/live-feed"} className="hover:text-white">
              <p>Live Feed</p>
            </Link>
            <p>
              <ChevronRight />
            </p>
            <Link href={"/live-feed/post-pick"} className="hover:text-white">
              <p>New Pick</p>
            </Link>
          </div>
        </div>

        <Link href={"/live-feed"}>
          <button className="border border-gray-700 py-3 px-4 rounded-lg">
            Back to Feed
          </button>
        </Link>
      </div>
      <PostPickForm />
    </div>
  );
};

export default page;
