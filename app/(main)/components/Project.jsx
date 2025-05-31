"use client";

import { Tabs } from "@/components/ui/AceternityTabs";
import Image from "next/image";

export function Project() {
  const tabs = [
    {
      title: "Project 1",
      value: "project1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-800 bg-[linear-gradient(180deg,#dbd9d9,#d6d6d6)] dark:text-neutral-300 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
          <p>Project 1</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Project 2",
      value: "project2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-800 bg-[linear-gradient(180deg,#dbd9d9,#d6d6d6)] dark:text-neutral-300 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
          <p>Project 2</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Project 3",
      value: "project3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-800 bg-[linear-gradient(180deg,#dbd9d9,#d6d6d6)] dark:text-neutral-300 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
          <p>Project 3</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Project 4",
      value: "project4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-800 bg-[linear-gradient(180deg,#dbd9d9,#d6d6d6)] dark:text-neutral-300 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
          <p>Project 4</p>
          <DummyContent4 />
        </div>
      ),
    },
  ];

  return (
    <div className="my-40">
      <div className="flex mx-auto justify-center my-10">
        <h1 className="text-2xl font-semibold">Project</h1>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <Image
      src="/AnimeList.png"
      alt="Project 1"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent2 = () => {
  return (
    <Image
      src="/Ecommerce.png"
      alt="Project 2"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent3 = () => {
  return (
    <Image
      src="/onebe.png"
      alt="Project 3"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent4 = () => {
  return (
    <Image
      src="/course.png"
      alt="Project 4"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
