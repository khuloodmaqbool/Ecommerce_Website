import { useContext } from "react";
import { HeroSection } from "../components/HeroSection";
import { Heading } from "../components/Heading";
import { AppContext } from "../context/main-context";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { newArrivalProducts, topSellProducts, loadingState } =
    useContext(AppContext);

  const topSelling = topSellProducts.slice(0, 4);
  const newArrival = newArrivalProducts.slice(0, 4);
  const imgStyles = `h-40 md:h-56 w-full object-cover bg-gray-200 rounded-lg`;

  const items = [
    { title: "Formal", src: "/dress1.webp", span: false },
    { title: "Party", src: "/dress2.webp", span: true },
    { title: "Gym", src: "/dress3.webp", span: true },
    { title: "Casual", src: "/dress4.webp", span: false },
  ];

  const brandName = [
    { img: "versace.png", imgAlt: "versace" },
    { img: "zara.png", imgAlt: "zara" },
    { img: "gucci.png", imgAlt: "gucci" },
    { img: "prada.png", imgAlt: "prada" },
    { img: "calvin.png", imgAlt: "calvin" },
  ];

  return (
    <>
      <HeroSection />

      {/* Brand Name  */}
      <div className="flex justify-around bg-black md:h-36 h-30 py-5 items-center mb-16 flex-wrap gap-6 rotate-2">
        {brandName.map((crnt) => {
          return (
            <img
              key={crnt.imgAlt}
              width={100}
              height={100}
              className="w-fit lg:h-8 md:h-7 h-5 "
              src={`/${crnt.img}`}
              alt={crnt.imgAlt}
            />
          );
        })}
      </div>

      {/* new arrival  */}
      <Heading heading="NEW ARRIVAL" />
      {loadingState ? (
        <div className="loader mx-auto my-28 md:w-20 md:h-20 w-16 h-16 "></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4  w-11/12 mx-auto">
          {newArrival.map((crnt) => {
            return (
              <NavLink to={`/product/${crnt.id}`} key={crnt.id}>
                <div
                  data-aos="fade-up"
                  className="duration-300 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow "
                >
                  <img
                    src={`/${crnt.image}`}
                    width={400}
                    height={400}
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
      )}

      <NavLink className="flex justify-center my-10" href="/newarrival">
        <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg border border-black hover:bg-white hover:text-black">
          View More
        </button>
      </NavLink>

      <hr className="mt-8" />

      {/* top selling  */}
      <Heading heading="TOP SELLING" />

      {loadingState ? (
        <div className="loader mx-auto my-28 md:w-20 md:h-20 w-16 h-16 "></div>
      ) : (
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4  w-11/12 mx-auto"
        >
          {topSelling.map((crnt) => {
            return (
              <NavLink to={`/product/${crnt.id}`} key={crnt.id}>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={`/${crnt.image}`}
                    width={400}
                    height={400}
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
                    <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg w-full border border-black hover:bg-white hover:text-black ">
                      View Now
                    </button>
                  </NavLink>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}

      <NavLink className="flex justify-center my-10" href="/topselling">
        <button className="mx-auto duration-300 px-4 py-3 bg-black text-white rounded-lg  border border-black hover:bg-white hover:text-black ">
          View More
        </button>
      </NavLink>

      {/* Image Gallery  */}
      <div className="bg-gray-100 py-8 w-11/12 mx-auto rounded-xl">
        <Heading heading="FILTER BY DRESS STYLES" />

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 px-8 mt-8 ">
          {items.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={`${
                item.span ? "lg:col-span-2 md:col-span-2" : ""
              } bg-gray-200 h-40 md:h-56 rounded-lg relative`}
            >
              <h5 className="absolute p-4 text-xl font-semibold">
                {item.title}
              </h5>

              <NavLink to="allproducts">
                <img
                  src={item.src}
                  alt={`${item.title} Image`}
                  className={imgStyles}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
