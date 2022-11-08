import React from "react";
import creditCard from "../../images/illustrations/credit-card.png";
import SecondaryButton from "../buttons/SecondaryButton";
import { BsCheckCircleFill } from "react-icons/bs";
export default function CreditCardSection() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2  ">
        <img src={creditCard} alt="" />
        <div className="flex justify-center">
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className="text-blue-gradient">NEFA</span>{" "}
              <br />
              Credit Card
            </h2>
            <p className="text-gray">
              Subject to cardholder and rewards terms which will be available{" "}
              <br /> at application.
            </p>
            <ul className="my-6">
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Up to 3% back on purchases
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Earn rewards in bitcoin or any crypto on NEFA
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                No annual fee
              </li>
            </ul>
            <SecondaryButton>Join the waitlist</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
