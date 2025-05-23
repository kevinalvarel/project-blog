"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/AceternityCards";

export function Card() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/dummy.json");
      const json = await res.json();
      setProject(json);
    };

    fetchData();
  }, []);

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
