import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Overlay from "../../components/Overlay";
import { Link } from "react-router-dom";

// Sample data for text and corresponding images
const data = [
  {
    text: "University of Reginaxa",
    image:
      "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "University of Hellford",
    image:
      "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "University of Denmark",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "University of Redburn",
    image:
      "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "University of Milestone",
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-building-front-park_181624-9836.jpg?size=626&ext=jpg&ga=GA1.1.1760257368.1697747471&semt=ais",
  },
  {
    text: "University of Tufferton",
    image:
      "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?size=626&ext=jpg&ga=GA1.1.1760257368.1697747471&semt=ais",
  },
];

// Hero component
const Hero = () => {
  // State to track the current index of the data array
  const [index, setIndex] = useState(0);

  // Spring animation for fading in/out
  const props = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.9 },

    reset: true,
    config: config.molasses,
    onRest: () => {
      // Change the index when the animation completes
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    },
  });

  return (
    <div className="w-full h-[calc(100vh-4rem)] relative ">
      <animated.div style={props} className="w-full h-full">
        <img
          src={data[index].image}
          className="w-full h-full object-cover"
          alt={data[index].text}
        />
        <Overlay />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-center z-[2] space-y-5 text-white">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            {data[index].text}
          </h1>
          <p className="text-xl font-semibold">
            The Leading Online Solution for Booking, Payments, Facility
            Management, Events and more.
          </p>
          <Link
            to="/"
            className="btn md:me-4 w-full md:w-auto   text-white text-lg btn-accent rounded-3xl"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="btn w-full md:w-auto text-white text-lg btn-outline  rounded-3xl"
          >
            Book a demo
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
