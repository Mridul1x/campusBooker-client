import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Overlay from "../../components/Overlay";
import { Link } from "react-router-dom";

// Sample data for text and corresponding images
const data = [
  {
    text: "Welcome to University A",
    image:
      "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "Discover University B",
    image:
      "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "Explore College C",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2] space-y-5 text-white">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            {data[index].text}
          </h1>
          <p className="text-xl font-semibold">
            The Leading Online Solution for Booking, Payments, Facility
            Management, Events and more.
          </p>
          <Link
            to="/"
            className="btn me-4 text-white text-lg btn-primary rounded-3xl"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="btn text-white text-lg btn-outline y rounded-3xl"
          >
            Book a demo
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
