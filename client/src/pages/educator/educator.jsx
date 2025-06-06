import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/educator/Navbar";
import Sidebar from "../../Components/educator/Sidebar";
import Footer from "../../Components/educator/Footer";

const educator = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">{<Outlet />}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default educator;
