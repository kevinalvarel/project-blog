import React from "react";
import { BlogList } from "./components/BlogList";
import { BlogHero } from "./components/BlogHero";

const page = () => {
  return (
    <div>
      <BlogHero />
      <BlogList />
    </div>
  );
};

export default page;
