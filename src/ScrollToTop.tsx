import { useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
