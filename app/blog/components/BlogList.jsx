"use client";
import data from "@/public/dummy.json";
import { HoverEffect } from "@/components/ui/AceternityCards";

export function BlogList() {
  return (
    <>
      <div className="text-3xl font-semibold mx-auto pt-10 justify-center flex">
        <h1>Latest Blog</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={data.blog} />
      </div>
    </>
  );
}
