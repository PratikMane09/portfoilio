import React from "react";
//import Portfolio from "./Component/Portfolio";
import Navbar from "./Component/Navbar";
import "./App.css";
import Home from "./Component/Home";
import IntroPage from "./Component/Intro";
import SkillsSection from "./Component/SkillBox";
import PortfolioSection from "./Component/Project";
import ContactSection from "./Component/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <IntroPage />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;
