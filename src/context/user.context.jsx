import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../helpers/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  const handleAuthChange = (user) => {
    if(user) {
      createUserDocumentFromAuth(user);
    }
    setCurrentUser(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(handleAuthChange);
    return unsubscribe;
  }, []);

  return <UserContext value={value}>{children}</UserContext>;
};
