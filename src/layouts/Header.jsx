import { Link } from "react-router-dom";
import rajaLogo from "../assets/images/logos/logoraja.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faThreads,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Time from "./components/Time";

import snp3 from "../assets/images/spn/Marsa.png"
import snp4 from "../assets/images/spn/umbro.png"
import { useEffect, useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
    <div  className={`pt-[50px] ${!showHeader ? "hidden" : "" } fixed top-0 left-0 w-full z-[9999] transition-transform duration-500 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="fixed top-0 left-0 w-[100%] z-[9999]">
        <div className="bg-white w-[100%] h-[50px] ">
          <div className="Mycontainer h-[100%] flex justify-between items-center  border-green border-b-[1px] border-opacity-[0.5]">
            <div className="flex h-[100%] justify-start items-center gap-[10px] w-[40%]">
               
                <img src={snp3} alt=""
                    className="h-[30px] w-[60px] object-contain invert"/>
                <img src={snp4} alt=""
                    className="h-[30px] w-[60px] object-contain invert"/>                           
            </div>
            <div className="flex items-center justify-center flex-col text-dark">
              <Time/>
            </div>
            <div className="flex h-[100%] justify-end items-center gap-[10px] w-[40%] text-dark">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faThreads} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
        <header className=" bg-white h-[80px] w-[100%] poppins-regular text-dark">
          <div className="Mycontainer h-[100%] flex justify-between items-center gap-[30px] relative">
          <div className="bg-green h-[100%] flex px-[20px] items-center">
              <div className="logo w-[auto] h-[60px] bg-green">
              <img src={rajaLogo} alt="" className="w-[100%] h-[100%]" />
            </div>
          </div>
          
            <div className="flex justify-between items-center flex-1">
              <ul className="flex h-[100%] justify-center gap-[5px] items-center font-pL">
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/news"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    News
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/matches"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Matches
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/shop"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Shop
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/squads"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Squads
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/tickets"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Tickets
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/media"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    Media
                  </Link>
                </li>
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/About"}
                    className="p-[10px] text-dark text-[15px] no-underline"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <ul className="flex h-[100%] justify-center gap-[20px] items-center">
                <li className="h-[100%] flex justify-center items-center">
                  <Link
                    to={"/login"}
                    className="px-[15px] py-[5px] text-white bg-dark  text-[15px] no-underline "
                  >
                    <FontAwesomeIcon icon={faUser} className="text-white me-[5px]"/> <span>Login</span>
                  </Link>
                </li>
            
              </ul>
            </div>
          </div>
        </header>
      </div>
   
    </div>
    </>
  );
};

export default Header;
