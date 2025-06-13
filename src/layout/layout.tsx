import { Outlet } from "react-router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:min-h-72">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
