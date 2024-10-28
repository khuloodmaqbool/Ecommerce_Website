import { FilterContext } from "../context/filter-context";
import { useContext, useState } from "react";
import { TiTick } from "react-icons/ti";
import { LuListFilter } from "react-icons/lu";
import { Heading } from "../components/Heading";
import { NavLink } from "react-router-dom";
const AllProduct = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const {
    FilterProducts,
    AllProducts,
    handleFilterChange,
    clearFilterBtn,
    sorting,
    filter: { text, category, dress_style, sizes, colors },
  } = useContext(FilterContext);

  const getProductsValues = (data, item) => {
    let getValues;
    if (item) {
      getValues = data.map((crntEle) => crntEle[item]);
    }
    if (item == "sizes" || item == "colors") {
      getValues = getValues.flat();
    }
    return ["All", ...new Set(getValues)];
  };

  const Category = getProductsValues(AllProducts, "category");
  const DressStyles = getProductsValues(AllProducts, "dress_style");
  const SizesValues = getProductsValues(AllProducts, "sizes");
  const ColorsValues = getProductsValues(AllProducts, "colors");

  if (!AllProducts && !FilterProducts) {
    return (
      <>
        <div className="flex justify-center w-full h-screen items-center">
          <div className="loader"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex mt-10">
        <div className="sidebar  flex flex-col w-1/4 p-4 border border border-gray-200 rounded-xl mx-4  md:block lg:block hidden sticky top-0 h-fit">
          <div className="flex justify-between">
            <h5 className="font-bold text-xl">Filters</h5>
            <LuListFilter />
          </div>

          <hr className="my-3" />

          <div>
            <h5 className="my-2 font-bold">Category</h5>
            {Category.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="category"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3 font-bold" />

          <div>
            <h5 className="my-2 font-bold">Dress Style</h5>
            {DressStyles.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="dress_style"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == dress_style
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3" />
          <div>
            <h5 className="my-2 font-bold">Sizes</h5>
            {SizesValues.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="sizes"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == sizes
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3" />
          <div>
            <h5 className="my-2 font-bold">Colors</h5>

            <div className="flex flex-wrap">
              {ColorsValues.map((crntEle) => {
                if (crntEle == "All") {
                  return (
                    <button
                      key={crntEle}
                      name="colors"
                      value={crntEle}
                      onClick={handleFilterChange}
                      className="w-6 h-6 m-1"
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={crntEle}
                    name="colors"
                    value={crntEle}
                    onClick={handleFilterChange}
                    className="w-8 h-8 rounded-full border border-slate-300 m-1 flex items-center justify-center"
                    style={{ backgroundColor: crntEle }}
                  >
                    {crntEle == colors ? (
                      <TiTick style={{ color: "lightgray" }} />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={clearFilterBtn}
            className="mt-8 mb-5 py-2 px-4 bg-black text-white rounded-full"
          >
            Clear Filter
          </button>
        </div>

        <div className="md:w-9/12 lg:w-9/12 w-full">
          <div className="flex justify-between flex-wrap items-center px-4">
            <Heading heading="ALL PRODUCTS" />

            <input
              placeholder="Search"
              name="text"
              value={text}
              type="text"
              className="border border-slate-200 my-4 py-2 px-4 rounded-full lg:w-2/6 md:w-3/5 sm:w-4/5 w-full focus:outline-none"
              onChange={handleFilterChange}
            />

            <div className="flex gap-4">
              <select name="" onChange={sorting}>
                <option value="default">By default</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
              </select>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  <LuListFilter className="md:hidden lg:hidden block w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {FilterProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {FilterProducts.map((crnt) => {
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
          ) : (
            <div className="text-4xl flex justify-center items-center h-64 text-gray-400">
              <h3>Products Not Found</h3>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80`}
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="mb-4 text-base font-semibold text-gray-500"
        >
          Info
        </h5>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <div className="flex flex-col w-full p-4 border border border-gray-200 rounded-xl ">
          <div className="flex justify-between">
            <h5 className="font-bold text-xl">Filters</h5>
            <LuListFilter />
          </div>

          <hr className="my-3" />

          <div>
            <h5 className="my-2 font-bold">Category</h5>
            {Category.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="category"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3 font-bold" />

          <div>
            <h5 className="my-2 font-bold">Dress Style</h5>
            {DressStyles.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="dress_style"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == dress_style
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3" />
          <div>
            <h5 className="my-2 font-bold">Sizes</h5>
            {SizesValues.map((crntEle) => {
              return (
                <button
                  key={crntEle}
                  name="sizes"
                  value={crntEle}
                  onClick={handleFilterChange}
                  className={`m-1 py-2 px-4 rounded-full ${
                    crntEle == sizes
                      ? "bg-black text-white"
                      : "bg-gray-100 text-grey-500"
                  } `}
                >
                  {crntEle}
                </button>
              );
            })}
          </div>
          <hr className="my-3" />
          <div>
            <h5 className="my-2 font-bold">Colors</h5>

            <div className="flex flex-wrap">
              {ColorsValues.map((crntEle) => {
                if (crntEle == "All") {
                  return (
                    <button
                      key={crntEle}
                      name="colors"
                      value={crntEle}
                      onClick={handleFilterChange}
                      className="w-6 h-6 m-1"
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={crntEle}
                    name="colors"
                    value={crntEle}
                    onClick={handleFilterChange}
                    className="w-8 h-8 rounded-full border border-slate-300 m-1 flex items-center justify-center"
                    style={{ backgroundColor: crntEle }}
                  >
                    {crntEle == colors ? (
                      <TiTick style={{ color: "lightgray" }} />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={clearFilterBtn}
            className="mt-8 mb-5 py-2 px-4 bg-black text-white rounded-full"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
