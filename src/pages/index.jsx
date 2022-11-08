import React from "react";
import Layout from "../components/Layout";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection";
import CreditCardSection from "../components/sections/SecuritySection";
import CryptocurrencySection from "../components/sections/CryptocurrencySection";
import HeroSection from "../components/sections/HeroSection";
import PartnerSection from "../components/sections/PartnerSection";
import TradingToolsSections from "../components/sections/TradingToolsSections";
import SecuritySection from "../components/sections/SecuritySection";
import StepSection from "../components/sections/StepSection";
import FaqSection from "../components/sections/FAQSection";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <CreditCardSection />
      <TradingToolsSections />
      <SecuritySection />
      <StepSection />
      <FaqSection />
    </Layout>
  );
}
