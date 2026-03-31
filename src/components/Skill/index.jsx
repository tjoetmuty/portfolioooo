
import { skillS } from "../../constants";

const SkillFeat = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="tracking-widest font-bold text-center text-sm">TECHNICAL SKILLS</h1>
      <hr className="text-gray-200"/>
      <div className="text-xs text-gray-700 flex gap-6">
        {skillS.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-col gap-2">
            <h1 className="italic font-semibold">{item.cates}</h1>
            {item.items.map((items) => (
              <div key={items.name} className="flex items-center gap-2 hover:text-black duration-300">
                <items.icon />
                <p>{items.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillFeat;
