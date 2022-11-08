import React from "react";
import faq from "../../images/illustrations/faq.png";
import SecondaryButton from "../buttons/SecondaryButton";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export default function FaqSection() {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-2  ">
        <img src={faq} alt="" />
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <ul className="my-6">
              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">
                  <h2 className="font-bold">Why should I choose NEFA?</h2>
                  <BsChevronUp />
                </div>

                <p className="text-gray">
                  We're industry pioneers, having been in the cryptocurrency
                  industry since 2016. We've facilitated more than 21 billion
                  USD worth of transactions on our exchange for customers in
                  over 40 countries. Today, we're trusted by over 8 million
                  customers around the world and have received praise for our
                  easy-to-use app, secure wallet, and range of features.
                </p>
              </li>

              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">
                  <h2 className="font-bold">How secure is NEFA?</h2>
                  <BsChevronDown />
                </div>
              </li>

              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">
                  <h2 className="font-bold">
                    Do I have to buy a whole Bitcoin?
                  </h2>
                  <BsChevronDown />
                </div>
              </li>

              <li className="mb-3 border-b border-lightgray pb-3">
                <div className="flex justify-between py-3">
                  <h2 className="font-bold">How do I actually buy Bitcoin?</h2>
                  <BsChevronDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
