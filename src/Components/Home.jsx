import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Description from "./Description";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MainSection />
      <Description/>
      <Footer/>
    </div>
  );
}
