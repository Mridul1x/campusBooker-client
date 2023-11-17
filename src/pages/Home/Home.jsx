import React from "react";
import Hero from "./Hero";
import Colleges from "../Colleges/Colleges";
import Gallery from "./Gallery";
import Tenstimonials from "./Tenstimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Colleges forHome></Colleges>
      <Gallery></Gallery>
      <Tenstimonials />
    </div>
  );
};

export default Home;
