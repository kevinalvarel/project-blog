import React from "react";

import { Hero } from "./components/Hero";
import { MovingCard } from "./components/MovingCard";
import { Project } from "./components/Project";
import { PostsSection } from "./components/PostsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <PostsSection />
      <MovingCard />
      <Project />
    </>
  );
};

export default Home;
