import React from "react";

import { Hero } from "./components/Hero";
import { MovingCard } from "./components/MovingCard";
import { Project } from "./components/Project";

const Home = () => {
  return (
    <>
      <Hero />
      <MovingCard />
      <Project />
    </>
  );
};

export default Home;
