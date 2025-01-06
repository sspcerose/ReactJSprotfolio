import "./App.css";
import React from "react";
import Navigation from "./components/navigation";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import ProjectSection from "./pages/ProjectSection";
import ContactSection from "./pages/ContactSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
