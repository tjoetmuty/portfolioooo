import SkillFeat from "../Skill";

const HeroFeat = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="card backdrop-blur-sm p-20 shadow-xl">
        <div className="flex gap-12">
          <div className="w-1/2">
            <h1 className="font-bold  text-[#132440]">
              Tjoet Muty Ahmad👋
            </h1>
            <h2 className="text-5xl bg-clip-text bg-linear-to-r from-black via-[#132440] to-[#FDB5CE] text-transparent font-bold py-4 tracking-widest ">
              FRONTEND DEVELOPER
            </h2>
            <p className="py-6">
              Frontend Developer with 2+ years of experience in building
              responsive and user-friendly web applications using React.js.
              Experienced in developing scalable interfaces, integrating REST
              APIs, and writing clean, maintainable code.
            </p>
          </div>
          <div>
            <SkillFeat/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeat;
