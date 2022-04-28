import React, { useContext, useEffect } from "react";
import { useAuthListner, useAuthStatus } from "../hooks/useAuthStatus";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { user } = useAuthListner();

  useEffect(() => {}, [loggedIn, checkingStatus]);

  return (
    <UserContext.Provider value={{ user, loggedIn, checkingStatus }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
