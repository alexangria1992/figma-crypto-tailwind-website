import React from "react";
import logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar() {
  return (
    <div className="fixed top-0 py-8 flex  justify-between  items-center">
      <div className="flex  mr-6 bg-pink-50 items-center ">
        <img src={logo} className="mr-6" alt="" />
        <nav className="flex ">
          <a href="/" className="mx-4 hover:text-primary">
            Cryptocurrency
          </a>
          <a href="/" className="mx-4 hover:text-primary">
            Exchanges
          </a>
          <a href="/" className="mx-4 hover:text-primary">
            Watchlist
          </a>
          <a href="/" className="mx-4 hover:text-primary">
            NFT
          </a>
          <a href="/" className="mx-4 hover:text-primary">
            Portfolios
          </a>
          <a href="/" className="mx-4 hover:text-primary">
            Product
          </a>
        </nav>
      </div>
      <div className="flex">
        <SecondaryButton>Sign In</SecondaryButton>

        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
  );
}
