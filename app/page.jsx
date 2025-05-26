import React from "react";

import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { MovingCard } from "./components/MovingCard";
import { Project } from "./components/Project";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <MovingCard />
      <Project />
    </>
  );
};

export default Home;
