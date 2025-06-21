import { Outlet } from "react-router";

import Footer from "../components/footer";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
  return (
    <ScrollToTop>
      <div className="min-h-screen bg-slate-50">
        <Outlet />
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
