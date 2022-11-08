import React from "react";
import Layout from "../components/Layout";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection";
import CreditCardSection from "../components/sections/CreditCardSection";
import CryptocurrencySection from "../components/sections/CryptocurrencySection";
import HeroSection from "../components/sections/HeroSection";
import PartnerSection from "../components/sections/PartnerSection";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <CreditCardSection />
    </Layout>
  );
}
