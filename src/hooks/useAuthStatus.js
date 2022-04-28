import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useRef } from "react";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false);
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};

export const useAuthListner = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
          setUser(user);
        } else {
          localStorage.removeItem("authUser");
          setUser(null);
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { user };
};
