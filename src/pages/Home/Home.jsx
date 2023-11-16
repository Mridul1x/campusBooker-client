import React from "react";
import Hero from "./Hero";
import Colleges from "../Colleges/Colleges";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Colleges forHome></Colleges>
    </div>
  );
};

export default Home;
