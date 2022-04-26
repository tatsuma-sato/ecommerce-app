import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
createRoot(container).render(
  <React.StrictMode>
    <ProductsProvider>
      <Router>
        <App />
      </Router>
    </ProductsProvider>
  </React.StrictMode>
);
