"use client";

import { useContext, useEffect } from "react";
import { MenuContext } from "@/app/menu-provider";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isMenuActive, setIsMenuActive } = useContext(MenuContext);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    isMenuActive && setIsMenuActive(false);
  }, [pathname, searchParams]);

  return null;
}
