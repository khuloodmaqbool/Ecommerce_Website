import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../context/cart-context";

export const Header = () => {
  const { total_cart_item } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const list_styles = `px-3 py-2 font-medium`;

  return (
    <nav className="sticky top-2 z-40 lg:px-9 md:px-9 px-3">
      <div className="bg-black mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 border border-gray-200 md:rounded-full lg:rounded-full mt-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <div className="flex-shrink-0">
              <img
                src="logo.png"
                className="lg:h-4 md:h-4 h-3 lg:ps-1 md:ps-1 ps-3"
                alt="Logo"
              />
            </div>
          </NavLink>

          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-orange_color text-orange_color"
                        : "text-white hover:text-orange_color"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allproducts"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-orange_color text-orange_color"
                        : "text-white hover:text-orange_color"
                    }`
                  }
                >
                  All Products
                </NavLink>
                <NavLink
                  to="/newarrival"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-orange_color text-orange_color"
                        : "text-white hover:text-orange_color"
                    }`
                  }
                >
                  New Arrival
                </NavLink>
                <NavLink
                  to="/topselling"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-orange_color text-orange_color"
                        : "text-white hover:text-orange_color"
                    }`
                  }
                >
                  Top Selling
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <NavLink className="relative" to="/cart">
              <div className="w-4 h-4 ms-4 p-3 rounded-full bg-orange_color text-white absolute flex justify-center items-center left-2 bottom-3 text-sm">
                {total_cart_item}
              </div>
              <MdOutlineShoppingCart
                style={{ color: "white" }}
                className="h-8 w-8"
              />
            </NavLink>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-black`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-orange_color text-orange_color"
                  : "text-white hover:text-orange_color"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allproducts"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-orange_color text-orange_color"
                  : "text-white hover:text-orange_color"
              }`
            }
          >
            All Products
          </NavLink>
          <NavLink
            to="/newarrival"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-orange_color text-orange_color"
                  : "text-white hover:text-orange_color"
              }`
            }
          >
            New Arrival
          </NavLink>
          <NavLink
            to="/topselling"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-orange_color text-orange_color"
                  : "text-white hover:text-orange_color"
              }`
            }
          >
            Top Selling
          </NavLink>

          <NavLink className="relative" to="/cart">
            <div className="w-4 h-4 p-2 rounded-full bg-orange_color text-white absolute flex justify-center items-center left-7 bottom-6 text-sm">
              {total_cart_item}
            </div>
            <MdOutlineShoppingCart
              style={{ color: "white" }}
              className="h-10 w-10 ps-3"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
