"use client";
import { CartContext } from "../context/cart-context";
import { useContext, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { CartAmount } from "../components/CartAmount";
import { NavLink } from "react-router-dom";
import { Heading } from "../components/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const {
    cart,
    removeCartItem,
    increment,
    decrement,
    shipping_fee,
    subtotal_amount,
    clearCartBtn,
  } = useContext(CartContext);

  if (!cart.length) {
    return (
      <>
        <Heading heading="Cart" />
        <div className="flex justify-center items-center h-60">
          <p className="text-4xl text-gray-400">Your Cart is Empty</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Heading heading="Cart" />
      <div className="grid md:grid-cols-2 gap-6 py-2 md:px-14 px-6">
        {/* Cart Items */}
        <div data-aos="fade-right" className="rounded-xl border px-4">
          {cart.map(({ id, name, image, color, sizes, price, amount }) => (
            <div key={id} className="py-4">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <img
                    alt={name}
                    src={`/${image}`}
                    className="w-24 h-20 me-2 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <div className="flex items-center space-x-2 my-1">
                      <span className="text-gray-600 text-sm">Color:</span>
                      <div
                        className="rounded-full w-5 h-5 border"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                    <p className="text-gray-600 text-sm">Size: {sizes}</p>
                  </div>
                </div>
                <button onClick={() => removeCartItem(id)}>
                  <MdDelete className="text-red-600 w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Rs {price}</p>
                <CartAmount
                  amount={amount}
                  increase={() => increment(id)}
                  decrease={() => decrement(id)}
                />
              </div>
              <hr />
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div data-aos="fade-left">
          <div className="rounded-xl border px-4 py-4">
            <h3 className="text-lg font-bold mb-3">Order Summary</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <h2>Subtotal</h2>
              <h2 className="text-right">Rs {subtotal_amount}</h2>
              <h2>Delivery Fee</h2>
              <h2 className="text-right">Rs {shipping_fee}</h2>
              <h2 className="font-bold">Total</h2>
              <h2 className="text-right">
                Rs {shipping_fee + subtotal_amount}
              </h2>
            </div>
            <div className="flex justify-end mt-4">
              <button className="mt-4 duration-300 px-4 py-3 bg-black text-white rounded-lg  border border-black hover:bg-white hover:text-black">
                Go to Checkout
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <NavLink to="/allproducts">
              <button className="duration-300 px-4 py-3 bg-black text-white rounded-lg me-4  border border-black hover:bg-white hover:text-black">
                Continue Shopping
              </button>
            </NavLink>
            <button
              onClick={clearCartBtn}
              className="duration-300 px-4 py-3 bg-black text-white rounded-lg  border border-black hover:bg-white hover:text-black"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
