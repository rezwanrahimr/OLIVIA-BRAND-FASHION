import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase.init";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Current User
  useEffect(() => {
    const release = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => release();
  }, []);

  //  SignOut
  const handleSignOut = () => {
    return signOut(auth);
  };
  const authInfo = { user, isLoading, handleSignOut };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContext;
