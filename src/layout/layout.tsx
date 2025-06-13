import { Outlet } from "react-router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-full">
      <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
