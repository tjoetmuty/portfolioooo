import { useEffect } from "react";
import SkillFeat from "../Skill";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroFeat = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto my-32">
      <div className="flex flex-col gap-6">
        <div
          className="card backdrop-blur-sm p-20 shadow-xl"
          id="Home"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-xs md:text-sm lg:text-md  text-[#132440]">Tjoet Muty Ahmad👋</h1>
              <h2 className="text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-linear-to-r from-black via-[#132440] to-[#FDB5CE] text-transparent font-bold py-4 tracking-widest ">
                FRONTEND DEVELOPER
              </h2>
              <p className="py-6">
                Frontend Developer with 2+ years of experience in building
                responsive and user-friendly web applications using React.js.
                Experienced in developing scalable interfaces, integrating REST
                APIs, and writing clean, maintainable code.
              </p>
            </div>
            <div className="hidden lg:block">
              <SkillFeat />
            </div>
          </div>
        </div>
        <div className="card bg-[#FDB5CE] card-sm shadow-sm" data-aos="fade-up"
          data-aos-duration="900">
          <div className="card-body">
            <h2 className="text-md font-semibold">
              (Bachelor's Degree) Informatics Engineering - Universitas Tadulako
            </h2>
            <p>08/2022 - 12/2025 | Cumlaude | 3.86/4.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeat;
