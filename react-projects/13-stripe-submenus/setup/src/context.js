import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [submenu, setSubmenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSub = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setSubmenu(true);
  };

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSub = () => {
    setSubmenu(false);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        submenu,
        sidebar,
        closeSidebar,
        closeSub,
        openSidebar,
        openSub,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
