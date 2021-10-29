import React from "react";
import Cover from "./Cover/Cover";
import Reviews from "./Reviews/Reviews";
import TravelDestination from "./TravelDestination/TravelDestination";

const Home = () => {
  return (
    <>
      <Cover></Cover>
      <TravelDestination></TravelDestination>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
