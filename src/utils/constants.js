import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const aboutUs = [
  {
    id: 1,
    icon: <FaInstagram />,
    image:
      "https://images.unsplash.com/photo-1615471618985-97108e2ba478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    text: "go to our instagram",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    image:
      "https://images.unsplash.com/photo-1616048056617-93b94a339009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    text: "check our location",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const colorsArray = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#000",
  "ffb900",
  "#A52A2A",
  "#808080",
  "#FF00FF",
];

export const getRandomColors = () => {
  let colorArr = [];
  let randomNum = Math.floor(Math.random() * 5);
  if (randomNum === 0) randomNum = 1;
  colorArr = colorsArray.slice(0, randomNum);

  return colorArr;
};

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const fetchAllProductsUrl =
  "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=19971&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US";

export const fetchSingleProductUrl =
  "https://asos2.p.rapidapi.com/products/v3/detail?lang=en-US&store=US&sizeSchema=US&currency=USD&id=";

export const getCategory = (name) => {
  const tempName = name.toLowerCase();

  if (tempName.includes("t-shirt")) return "T-shirts";
  if (tempName.includes("top")) return "Tops";
  if (tempName.includes("socks")) return "Socks";
  if (tempName.includes("jeans")) return "Jeans";

  return "Others";
};

const companyArr = [
  "adidas",
  "Nike",
  "H&M",
  "ZARA",
  "UNIQLO",
  "MUJI",
  "HOLLISTER",
];

export const getCompany = () => {
  let randomNum = Math.floor(Math.random() * 6);
  return companyArr[randomNum];
};
