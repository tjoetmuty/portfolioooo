import { useEffect } from "react";
import { navbarItems } from "../../constants";
import Aos from "aos";
import 'aos/dist/aos.css';


const NavbarFeat = () => {
  useEffect(()=> {
    Aos.init()
  }, [])
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-50" data-aos="fade-down" data-aos-duration="1000">
      <div className="navbar backdrop-blur-sm shadow-md rounded-full py-2 border border-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navbarItems.map((item) => (
                <a href={item.scroll} key={item.id} className="text-gray-300 hover:text-black duration-300">{item.name}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 flex gap-6">
            {navbarItems.map((item) => (
              <div key={item.id}>
                <a href={item.scroll} className="font-extrabold text-gray-700 hover:text-black duration-300">{item.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn bg-transparent rounded-full" href={import.meta.env.VITE_CV} target="_blank">Reach me out</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarFeat;
