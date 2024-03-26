"use client";

import { createContext, useState } from "react";

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

export const ActiveSectionContext = createContext({
  activeId: 1,
  setActiveId: (id: number) => {},
});

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeId, setActiveId] = useState(1);

  return (
    <ActiveSectionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
