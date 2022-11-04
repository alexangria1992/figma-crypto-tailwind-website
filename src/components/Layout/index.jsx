import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div className=" mx-auto bg-lime-100 ">
      <Navbar />
      {children}
    </div>
  );
}
