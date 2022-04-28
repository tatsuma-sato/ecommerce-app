import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const SecondHero = () => {
  return (
    <Hero className="section-center">
      <div className="hero-img">
        <div className="hero-text">
          <h1>Expore our furniture</h1>
          <p>Choose from +100 options</p>
          <Link to="/products" className="btn">
            shop now
          </Link>
        </div>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  min-height: 60vh;
  margin: 0;

  .hero-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://cdn.shopify.com/s/files/1/0417/5442/7545/files/area-rugs-banne_1944x.jpg?v=1595123853");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;
    min-height: 85vh;
    width: 100vw;
  }
  .hero-text {
    text-align: center;
    position: absolute;
    max-width: 400px;
    top: 30%;
    left: 75%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    color: var(--clr-primary-5);
    padding: 45px 0px;
    background-color: var(--clr-grey-9);
  }
  @media (max-width: 992px) {
    .hero-text {
      min-width: 300px;
    }
  }
`;

export default SecondHero;
