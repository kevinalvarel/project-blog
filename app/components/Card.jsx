import { HoverEffect } from "./ui/AceternityCards";

export function Card() {
  return (
    <>
      <div className="text-3xl font-semibold mx-auto pt-10 justify-center flex">
        <h1>Latest Blog</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/1",
  },
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/2",
  },
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/3",
  },
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/4",
  },
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/5",
  },
  {
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at beatae quae quasi esse ex magnam ut vel, id ducimus!",
    link: "/6",
  },
];
