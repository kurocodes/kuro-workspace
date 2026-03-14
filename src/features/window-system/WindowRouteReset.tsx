import { useLocation } from "react-router-dom";
import { useWindowManager } from "./useWindowManager";
import { useEffect } from "react";

export default function WindowRouteReset() {
  const { pathname } = useLocation();
  const { clear } = useWindowManager();

  useEffect(() => {
    clear();
  }, [pathname, clear]);

  return null;
}
