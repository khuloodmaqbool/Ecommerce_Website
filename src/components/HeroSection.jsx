import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font px-8">
        <div className="container mx-auto flex px-5 pt-20 pb-16 md:flex-row flex-col items-center">
          <div
            data-aos="fade-right"
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1
              style={{ fontFamily: "Anybody" }}
              className="sm:text-4xl text-3xl lg:text-6xl mb-4 font-black text-black"
            >
              Discover Quality Products at Unbeatable Prices!
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover the latest trends in fashion, cutting-edge electronics,
              and a wide array of products curated just for you. From stylish
              clothing to must-have gadgets, we have something for everyone.
            </p>
            <div className="flex justify-center">
              <NavLink to="/allproducts">
                <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg w-full  border border-black hover:bg-white hover:text-black">
                  Explore Now
                </button>
              </NavLink>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative"
          >
            <div
              style={{ backgroundColor: "rgba(244, 128, 76, 1)" }}
              className="absolute rounded-full z-0 top-1/2 left-1/2 blur-3xl -translate-x-1/2 -translate-y-1/2            
                 lg:w-60 lg:h-60  md:w-56 md:w-56 sm:w-40 sm:w-40 w-28 h-28"
            ></div>
            <img
              className="object-cover object-center rounded z-10 relative"
              alt="hero"
              src="heroimage.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};
