import { createContext, useContext, useState } from "react";

const ActivePageContext = createContext(null);

export function ActivePageProvider({ children }) {
  const [activePage, setActivePage] = useState(null);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useActivePage() {
  const context = useContext(ActivePageContext);
  if (!context) {
    throw new Error("useActivePage must be used inside ActivePageProvider");
  }
  return context;
}
