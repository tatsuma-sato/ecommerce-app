import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import { keyframes } from "styled-components";

const Hero = () => {
  return (
    <Wrapper
      className="section-center"
      style={{ margin: "0", width: "100vw", maxWidth: "100vw" }}
    >
      <article className="content">
        <div className="hero">
          <div className="hero-slider">
            <ul>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </li>
            </ul>
            <div className="hero-text">
              <h1>Expore our furniture</h1>
              <p>Choose from +100 options</p>
              <Link to="/products" className="btn">
                shop now
              </Link>
            </div>
          </div>
        </div>

      </article>

    </Wrapper>
  );
};

const slider = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Wrapper = styled.section`
  min-height: 60vh;
  .content {
    width: 100%;
    height: 100%;
  }

  .hero {
    height: 100%;
    width: 100%;
  }

  .hero-slider {
    position: relative;
    height: 100%;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      animation-iteration-count: infinite;
      animation-duration: 14s;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .hero-slider ul li:nth-child(1) {
    animation-name: ${slider};
    animation-delay: -2s;
  }
  .hero-slider ul li:nth-child(2) {
    animation-name: ${slider};
    animation-delay: 5s;
    opacity: 0;
  }

  /* .hero-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;
    width: 100vw;

    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .hero-img2 {
    height: 100%;
    width: 100vw;
    position: relative;

    animation-duration: 5s;
    animation-delay: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://cdn.shopify.com/s/files/1/0417/5442/7545/files/area-rugs-banne_1944x.jpg?v=1595123853");
  } */
  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-white);
    font-size: 1rem;
  }
  @media (max-width: 992px) {
    .content {
      height: 60vh;
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
