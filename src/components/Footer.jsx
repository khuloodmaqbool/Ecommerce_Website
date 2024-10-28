import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="h-4" src="logo.png" alt="logo" />
          </span>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 Glamware —
            <a
              href="https://www.linkedin.com/in/khulood-maqbool-b45aa3255/"
              className="text-gray-400 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @khuloodmaqbool
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/"
              className="text-gray-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              className="ml-3 text-gray-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              className="ml-3 text-gray-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoInstagramAlt />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
