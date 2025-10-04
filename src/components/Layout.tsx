import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow mt-16 bg-[#2e211b] ">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
