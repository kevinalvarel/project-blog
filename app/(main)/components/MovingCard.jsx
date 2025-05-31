"use client";

import { InfiniteMovingCards } from "@/components/ui/AceternityMovingCard";
import data from "@/public/dummy.json";
import React from "react";

export function MovingCard() {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="my-10">
        <h1 className="text-2xl font-semibold">Famous Quotes</h1>
      </div>
      <div>
        <InfiniteMovingCards
          items={data.quotes}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
