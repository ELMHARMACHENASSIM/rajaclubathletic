import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-[100%]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
