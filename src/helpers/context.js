import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const manageNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <AppContext.Provider
      value={{ mobileNavbar, manageNavbar, inputSearch, setInputSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
