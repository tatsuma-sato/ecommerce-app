import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { useAuthListner } from "./hooks/useAuthStatus";
import {
  AboutPage,
  HomePage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  SignInPage,
  SignUpPage,
} from "./pages";

function App() {
  const { user } = useAuthListner();

  return (
    <>
      <AuthWrapper>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/checkout" element={<PrivateRoute />}>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </AuthWrapper>
    </>
  );
}

export default App;
