import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { FooterHead } from "./FooterHead";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterHead />
      <Footer />
    </>
  );
};
