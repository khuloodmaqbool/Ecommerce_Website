import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/main-context";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const { productsData } = useContext(AppContext);

  const product = productsData.find((crnt) => crnt.id.toString() === id);

  if (!product) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            src={`/${product.image}`}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            width={400}
            height={400}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              GLAM WARE
            </h2>
            <h1
              style={{ fontFamily: "Anybody" }}
              className="text-gray-900 text-5xl title-font font-black mb-1"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-2">
              <h5 className="text-4xl font-semibold text-black">
                Rs{product.price}
              </h5>
              <del className="text-4xl font-semibold text-gray-500">
                Rs{product.price * 2}
              </del>
              <p className="text-sm font-normal rounded-full bg-red-100 px-3 py-2 text-red-500 w-fit">
                -50%
              </p>
            </div>
            <p className="leading-relaxed">
              {product.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi soluta aliquam accusamus enim autem
              quibusdam adipisci.
            </p>

            <div className="flex flex-col mt-3 pb-5 border-b-2 border-gray-100 mb-5">
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
