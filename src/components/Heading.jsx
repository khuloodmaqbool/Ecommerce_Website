import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Heading = ({ heading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <h1
        data-aos="fade-up"
        style={{ fontFamily: "Anybody" }}
        className="text-gray-900 title-font font-black mb-4 mt-6 text-center sm:text-4xl text-3xl lg:text-5xl "
      >
        {heading}
      </h1>
    </>
  );
};
