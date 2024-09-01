import React, { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  return (
    <OverlayContext.Provider value={{ isOverlayActive, setIsOverlayActive }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => useContext(OverlayContext);
