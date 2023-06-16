"use client";

import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext({
  isMenuActive: false,
  setIsMenuActive: (active: boolean) => {},
});

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <MenuContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </MenuContext.Provider>
  );
}
