import { Outlet } from "react-router";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
