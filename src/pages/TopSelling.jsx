import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/main-context";
import AOS from "aos";
import "aos/dist/aos.css";

import { Heading } from "../components/Heading";

const TopSelling = () => {
  const { topSellProducts, loadingState } = useContext(AppContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  if (loadingState) {
    return (
      <>
        <Heading heading="TOP SELLING" />
        <div className="loader mx-auto my-28 md:w-20 md:h-20 w-16 h-16 "></div>
      </>
    );
  }

  return (
    <>
      <Heading heading="TOP SELLING" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4  w-11/12 mx-auto">
        {topSellProducts.map((crnt) => {
          return (
            <NavLink to={`/product/${crnt.id}`} key={crnt.id}>
              <div
                data-aos="fade-up"
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={`/${crnt.image}`}
                  className="w-full h-52 object-cover rounded-md"
                  alt={crnt.name}
                />
                <p className="mt-2 text-lg font-semibold">{crnt.name}</p>

                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-semibold text-black text-lg">
                    Rs {crnt.price}
                  </h5>
                  <del className="font-semibold text-gray-500">
                    Rs{crnt.price * 2}
                  </del>
                  <p className="text-sm font-normal rounded-full bg-red-100 px-2 py-1 text-red-500 w-fit">
                    -50%
                  </p>
                </div>
                <NavLink to={`/product/${crnt.id}`}>
                  <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg w-full  border border-black hover:bg-white hover:text-black">
                    View Now
                  </button>
                </NavLink>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default TopSelling;
