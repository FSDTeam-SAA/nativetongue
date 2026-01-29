import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LiveFeedSkeleton = () => {
  return (
    <div
      className="w-full p-6 bg-[#151515] rounded-xl border border-gray-800"
    >
      {/* Header Skeleton */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 bg-gray-700" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4 bg-gray-700" />
            <Skeleton className="h-4 w-20 bg-gray-700" />
          </div>
        </div>
        <Skeleton className="h-10 w-20 rounded-3xl bg-gray-700" />
      </div>

      {/* Tags Skeleton */}
      <div className="flex gap-3 mb-6">
        <Skeleton className="h-8 w-32 rounded-3xl bg-gray-700" />
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full bg-gray-700" />
        <Skeleton className="h-4 w-4/5 bg-gray-700" />
        <Skeleton className="h-4 w-3/4 bg-gray-700" />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-6"></div>

      {/* Comments Section Skeleton */}
      <Skeleton className="h-5 w-24 mb-4 bg-gray-700" />

      {/* Comments List Skeleton */}
      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20 bg-gray-700" />
            <Skeleton className="h-3 w-16 bg-gray-700" />
          </div>
          <Skeleton className="h-4 w-full bg-gray-700" />
        </div>
      </div>

      {/* Comment Input Skeleton */}
      <div className="flex gap-2">
        <Skeleton className="flex-1 h-12 rounded-xl bg-gray-700" />
        <Skeleton className="h-12 w-12 rounded bg-gray-700" />
      </div>
    </div>
  );
};

export default LiveFeedSkeleton;
