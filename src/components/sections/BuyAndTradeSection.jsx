import React from "react";
import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../buttons/PrimaryButton";
import { BsChevronDown } from "react-icons/bs";
export default function BuyAndTradeSection() {
  return (
    <div className="container mx-auto  bg-yellow-900 py-32">
      <div className="grid grid-cols-2 bg-lime-600 gap-10">
        <div className="flex items-center bg-fuchsia-800 pr-36">
          <div className="max-w-xl bg-orange-600">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & Trade on the <br /> original crypto exchange
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>

            <div className="flex justify-between gap-6  bg-blue mb-6">
              <div className="border border-primary rounded-2xl py-4 px-10 flex items-center ">
                <div className="border-r border-primary pr-6">
                  <small className="text-primary">Amount</small>
                </div>
                <input
                  type="text"
                  value="5,000"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
                <img
                  src="/cryptocurrencies/usd.svg"
                  className="inline-b mr-2"
                  alt=""
                />
                <span className="mr-4">USD</span>
                <span>
                  <BsChevronDown />
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-6  bg-blue mb-6">
              <div className="border border-primary rounded-2xl py-4 px-10 flex items-center ">
                <div className="border-r border-primary pr-6">
                  <small className="text-primary">Amount</small>
                </div>
                <input
                  type="text"
                  value="0.10901"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
                <img
                  src="/cryptocurrencies/btc.svg"
                  className="inline-b mr-2"
                  alt=""
                />
                <span className="mr-4">BTC</span>
                <span>
                  <BsChevronDown />
                </span>
              </div>
            </div>

            <PrimaryButton className="w-full">Buy Now</PrimaryButton>
          </div>
        </div>

        <div className="bg-teal-300">
          <img src={buyIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
