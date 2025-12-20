import {Outlet} from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

export default function layout() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen mx-auto bg-black">
        <Outlet />
        
      </main>
      <Footer />
   </>
  );
}