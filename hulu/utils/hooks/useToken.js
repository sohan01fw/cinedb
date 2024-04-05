import { getAuth, getIdToken, onIdTokenChanged } from "firebase/auth";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

const useToken = () => {
  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const idToken = await getIdToken(user);
        // Update the cookie with the new ID token
        Cookies.set("auth", idToken);
      } else {
        // User is signed out, remove the cookie
        Cookies.remove("auth");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  return;
};

export default useToken;
