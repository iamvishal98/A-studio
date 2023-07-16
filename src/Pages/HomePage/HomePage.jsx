import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Clients from "../../components/Clients/Clients";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Project from "../../components/Project/Project";
import ClientReview from "../../components/ClientReview/ClientReview";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Clients />
      <WhatWeDo />
      <Project />
      <ClientReview />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
