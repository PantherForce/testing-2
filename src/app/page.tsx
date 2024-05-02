import React from "react";
import Navbar from "../../components/Navbar";
import SectionOne from "../../components/SectionOne";
import ServiceSection from "../../components/ServiceSection";
import InsightSection from "../../components/InsightSection";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Innovate from "../../components/Innovate";
import Bottom from "../../components/Bottom";
import Competencies from "../../components/Competencies";
import Sectionabout from "../../components/Sectionabout";

const page = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <Sectionabout />
      <Competencies />
      <ServiceSection />

      <Innovate />
      <Bottom />
      <Footer />
    </>
  );
};

export default page;
