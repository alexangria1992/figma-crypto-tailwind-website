import React from "react";

export default function SecondaryButton({ children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className="border-primary border hover:bg-primary hover:text-white transition-colors duration-300 px-10  rounded-full text-primary  py-4 px-8 mx-2"
      {...props}
    >
      {children}
    </button>
  );
}
