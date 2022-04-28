import React from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  SecondHero,
} from "../components";
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SecondHero />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
