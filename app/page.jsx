import React from "react";

import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { MovingCard } from "./components/MovingCard";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <MovingCard />
    </>
  );
};

export default Home;
