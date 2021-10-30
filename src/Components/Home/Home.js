import React from "react";
import Cover from "./Cover/Cover";
import FAQ from "./FAQ/FAQ";
import Reviews from "./Reviews/Reviews";
import TravelDestination from "./TravelDestination/TravelDestination";

const Home = () => {
  return (
    <>
      <Cover></Cover>
      <TravelDestination></TravelDestination>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </>
  );
};

export default Home;
