import React from "react";
import { Navbar } from "../components";
import {
  Header,
  AboutUs,
  WhyCA,
  Incentives,
  Expectation,
  FAQ,
  ContactUs,
  Sponsors,
} from "./";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <WhyCA />
      <Incentives />
      <Expectation />
      <FAQ />
      <ContactUs />
      <Sponsors />
    </>
  );
};

export default LandingPage;
