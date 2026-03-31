import React, { useEffect } from "react";
import { projectItems } from "../../constants";
import Aos from "aos";
import 'aos/dist/aos.css';

const ProjectsFeat = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="flex flex-col gap-4 pb-12">
      <h1 id="Project" className="tracking-widest font-bold text-center text-sm">
        FEATURED PROJECTS
      </h1>
      <hr className="text-gray-200" />
      <div className="flex flex-col lg:flex-row gap-10 justify-between" data-aos="fade-up" data-aos-duration="1000">
        {projectItems.map((item) => (
        <div className="card bg-base-100 w-auto shadow-md"  key={item.id}>
          <figure className="px-10 pt-10">
            <img
              src={item.img}
              alt="project photo"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-md">{item.title}</h2>
            {item.status === "Finished" ? (
              <div className="badge badge-soft badge-success">Finished</div>
            ) : (
              <div className="badge badge-soft badge-secondary">In Progress</div>
            )}
            <p>
              {item.desc}
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-[#FDB5CE] text-white"><a href={item.link} target="_blank">for detail</a></button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFeat;
