import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// will remove later
import { useUserContext } from "../context/user_context";
import { Loading } from "../components";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useUserContext();
  if (checkingStatus) {
    return <Loading />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
