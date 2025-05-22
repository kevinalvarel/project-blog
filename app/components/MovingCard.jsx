"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/AceternityMovingCard";

export function MovingCard() {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="my-10">
        <h1 className="text-2xl font-semibold">Famous Quotes</h1>
      </div>
      <div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles Anime",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles Chicken",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles Arip",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles Elah",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles FF",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus in recusandae dolorem quaerat minima! Numquam voluptatibus quod, deleniti eveniet officia rem beatae vero quo molestiae nemo, assumenda vitae voluptates.",
    name: "Charles Leclerc",
    title: "A Tale of Two Cities",
  },
];
