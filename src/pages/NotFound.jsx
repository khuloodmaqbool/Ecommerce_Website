import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="flex flex-col justify-center items-center py-10"
      >
        <img
          alt="error_img"
          src="/img404.webp"
          className="wifit h-44 mx-auto"
        />
        <h3 className="text-3xl my-3">Oops you are lost.</h3>
        <p className="text-gray-400">
          The page you are looking for was not found.
        </p>
        <NavLink href="/">
          <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg w-fit mt-8 border border-black hover:bg-white hover:text-black ">
            Back to Home
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
