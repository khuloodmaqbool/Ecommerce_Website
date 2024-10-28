import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const FooterHead = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="bg-black px-5 py-8 my-8 rounded-2xl md:w-4/5  w-11/12  mx-auto flex lg:justify-around justify-start flex-wrap"
      >
        <h2
          style={{ fontFamily: "Anybody" }}
          className="text-white font-black pe-3 mb-3  sm:text-4xl text-3xl lg:text-5xl "
        >
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFER
        </h2>

        <div className="flex flex-col md:w-80 w-full">
          <input
            className="rounded-lg px-5 py-2 md:w-80 w-full"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="bg-black text-white border border-white px-3 py-2 rounded-lg mt-4 px-6 w-fit hover:bg-zinc-800">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};
