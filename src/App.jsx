import { motion, useScroll } from "motion/react";
import React from "react";
import NavbarFeat from "./components/Navbar";
import HeroFeat from "./components/Hero";
import ProjectsFeat from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-linear-to-r from-[#FDB5CE] to-75% py-4 px-28">
      <motion.div
      className="z-50"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <NavbarFeat />
      <HeroFeat />
      <ProjectsFeat/>
      <Experience/>
      <Footer/>
    </div>
  );
};

export default App;
