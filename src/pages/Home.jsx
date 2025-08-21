import bgVideo from "../assets/images/other/vd/vd.mp4";
import img from "../assets/images/news/img.jpg";
import img1 from "../assets/images/news/img1.jpg";
import img2 from "../assets/images/news/img2.jpg";
import img3 from "../assets/images/news/img3.jpg";
import img4 from "../assets/images/news/img4.jpg";
import img5 from "../assets/images/news/img5.jpg";
import img6 from "../assets/images/news/img6.jpg";
import rca from "../assets/images/teams/rca.png";
import wac from "../assets/images/teams/wac.png";
import far from "../assets/images/teams/far.png";
import ut from "../assets/images/teams/ut.png";
import inwi from "../assets/images/teams/inwi.png";
import jersImg from "../assets/images/jersey/img.jpg";
import jersShop from "../assets/images/jersey/shop.png";
import jers2 from "../assets/images/jersey/j2.png";
import jers3 from "../assets/images/jersey/j3.png";
import jers4 from "../assets/images/jersey/j4.png";
import jers5 from "../assets/images/jersey/j5.png";
import rajaAcad from "../assets/images/news/academy.jpg";
import playVd from "../assets/images/other/playVideo.svg";
import galleryIcon from "../assets/images/other/galleryIcon.svg";
import rcaPal from "../assets/images/news/rajapal.jpg";
import rcaLeg from "../assets/images/news/legend.jpg";
import rcaApp from "../assets/images/news/appl.png";
import rcaBook1 from "../assets/images/book/book1.png";
import rcaBook2 from "../assets/images/book/book1.png";
import rcaBook3 from "../assets/images/book/book1.png";
import anker from "../assets/images/spn/anker.png";
import anp from "../assets/images/spn/ANP.png";
import atasanad from "../assets/images/spn/atasanad.png";
import guichet from "../assets/images/spn/guichet.png";
import blanc from "../assets/images/spn/logo-blanc.png";
import marsa from "../assets/images/spn/Marsa.png";
import nordar from "../assets/images/spn/nor-dar.png";
import sofac from "../assets/images/spn/sofac.png";
import umbro from "../assets/images/spn/umbro.png";
import sportm from "../assets/images/spn/sportm.png";
import kayna from "../assets/images/spn/kayna.png";
import changan from "../assets/images/spn/changan.png";
import { Carousel } from "flowbite-react";
import SwipeMatchs from "./components/SwipeMatchs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Players from "./components/Players";
const Home = () => {
  return (
    <>
      <div className="pt-[50px] select-none">
        {/* Background Video */}
        <section className="w-[100%] h-[90vh]">
          <div className="w-[100%] h-[100%] relative ">
            <div className="bg-[#0000007a] absolute top-[0] left-[0] w-[100%] h-[100%] z-[99] "></div>
            <video
              src={bgVideo}
              autoPlay
              loop
              muted
              className="absolute top-[0] left-[0] w-[100%] h-[100%] object-cover"
              id="background-video"
            ></video>
            <div className=" Mycontainer  h-[100%]  flex justify-start items-center">
              <div className=" w-[100%]   flex justify-start items-start flex-col z-[100] gap-[10px]">
                <h1 className="font-pB text-white text-[40px]">
                  The official 2024/2025 Kit: “Take the Lead”
                </h1>
                <p className="font-pL text-white">
                  To connect the glorious past with the promising present, Umbro
                  and Raja Casablanca draw inspiration <br />
                  from this spirit to design the official Raja Casablanca jersey
                  for the 2024/2025 season.
                </p>
                <p className="font-ar text-white">
                  لنربط الماضي المجيد بالحاضر الواعد، أمبرو والرجاء الرياضي
                  يستلهمان من هذه الروح تصميم القميص الرسمي للرجاء الرياضي لموسم
                  2024/2025
                </p>
                <a
                  href=""
                  className="bg-green font-pR text-white px-[20px] py-[10px] no-underline rounded-[5px]"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Matches & Standing */}
        <section className="py-[20px] bg-dark">
          <div className="Mycontainer">
            <div className="w-[100%] h-[70vh] flex gap-[10px]">
              <div className="w-[70%] h-[100%] carousel-container">
                <Carousel>
                  {/* Item 1  */}
                  <div className=" w-[100%]  h-[100%] relative duration-700 ease-in-out">
                    <div className="absolute  text-white w-[100%] z-10 bottom-[30px] p-[20px] flex justify-between items-center gap-[5px]">
                      <div>
                        <h1 className="text-[20px] font-pL border-s-[3px] border-green ps-[10px]">
                          14 August 2024
                        </h1>
                        <h1 className="text-[40px] font-pB">
                          hello raja casablanca{" "}
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aut, autem.
                        </p>
                      </div>
                      <div>
                        <a
                          href=""
                          className=" border-white text-white border-[1px] py-[10px] px-[20px] no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <img
                      src={img}
                      className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                      alt="..."
                    />
                  </div>
                  {/* Item 2  */}
                  <div className=" w-[100%]  h-[100%] relative duration-700 ease-in-out">
                    <div className="absolute  text-white w-[100%] z-10 bottom-[30px] p-[20px] flex justify-between items-center gap-[5px]">
                      <div>
                        <h1 className="text-[20px] font-pL border-s-[3px] border-green ps-[10px]">
                          14 August 2024
                        </h1>
                        <h1 className="text-[40px] font-pB">
                          hello raja casablanca{" "}
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aut, autem.
                        </p>
                      </div>
                      <div>
                        <a
                          href=""
                          className=" border-white text-white border-[1px] py-[10px] px-[20px] no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <img
                      src={img1}
                      className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                      alt="..."
                    />
                  </div>
                  {/* Item 3  */}
                  <div className=" w-[100%]  h-[100%] relative duration-700 ease-in-out">
                    <div className="absolute  text-white w-[100%] z-10 bottom-[30px] p-[20px] flex justify-between items-center gap-[5px]">
                      <div>
                        <h1 className="text-[20px] font-pL border-s-[3px] border-green ps-[10px]">
                          14 August 2024
                        </h1>
                        <h1 className="text-[40px] font-pB">
                          hello raja casablanca{" "}
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aut, autem.
                        </p>
                      </div>
                      <div>
                        <a
                          href=""
                          className=" border-white text-white border-[1px] py-[10px] px-[20px] no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <img
                      src={img2}
                      className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                      alt="..."
                    />
                  </div>
                  {/* Item 4  */}
                  <div className=" w-[100%]  h-[100%] relative duration-700 ease-in-out">
                    <div className="absolute  text-white w-[100%] z-10 bottom-[30px] p-[20px] flex justify-between items-center gap-[5px]">
                      <div>
                        <h1 className="text-[20px] font-pL border-s-[3px] border-green ps-[10px]">
                          14 August 2024
                        </h1>
                        <h1 className="text-[40px] font-pB">
                          hello raja casablanca{" "}
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aut, autem.
                        </p>
                      </div>
                      <div>
                        <a
                          href=""
                          className=" border-white text-white border-[1px] py-[10px] px-[20px] no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <img
                      src={img3}
                      className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                      alt="..."
                    />
                  </div>
                  {/* Item 5  */}
                  <div className=" w-[100%]  h-[100%] relative duration-700 ease-in-out">
                    <div className="absolute  text-white w-[100%] z-10 bottom-[30px] p-[20px] flex justify-between items-center gap-[5px]">
                      <div>
                        <h1 className="text-[20px] font-pL border-s-[3px] border-green ps-[10px]">
                          14 August 2024
                        </h1>
                        <h1 className="text-[40px] font-pB">
                          hello raja casablanca{" "}
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aut, autem.
                        </p>
                      </div>
                      <div>
                        <a
                          href=""
                          className=" border-white text-white border-[1px] py-[10px] px-[20px] no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className="overlay"></div>
                    <img
                      src={img4}
                      className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                      alt="..."
                    />
                  </div>
                </Carousel>
              </div>
              <div className="w-[30%] h-[100%] flex justify-between items-center flex-col gap-[10px] bg-white shadow-[0px_10px_20px_0px_#00000015]  overflow-hidden">
                {/* matches  */}
                <div className="w-[100%] h-[50%]  flex justify-center items-center flex-col gap-[15px] text-dark">
                  <div className="cont flex justify-between items-center ">
                    <h1 className="border-s-[3px] border-green px-[5px] font-pB text-[25px] m-0">
                      Last Match
                    </h1>
                    <a
                      href=""
                      className="border-green border-[1px] py-[5px] px-[10px] text-green no-underline"
                    >
                      See The Details
                    </a>
                  </div>
                  <div className="w-[100%] flex justify-center items-center flex-col pt-[20px]">
                    <div className=" cont flex justify-between items-center ">
                      <div className="w-[100px] h-[130px]">
                        <img
                          src={rca}
                          alt=""
                          className="w-[100%] h-[100%] object-contain"
                        />
                      </div>
                      <div className="w-[30%] flex flex-col justify-center items-center gap-[5px]">
                        <img
                          src={inwi}
                          alt=""
                          className="w-[40px] h-[50px] object-contain invert"
                        />
                        <h1 className="text-[25px] font-pB ">2-1</h1>
                        <p className="font-pR text-[15px] flex items-center gap-[5px]">
                          <FontAwesomeIcon icon={faClock} />
                          <span>Full Time</span>
                        </p>
                      </div>
                      <div className="w-[100px] h-[130px]">
                        <img
                          src={ut}
                          alt=""
                          className="w-[100%] h-[100%] object-contain "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* standings  */}
                <div className="w-[100%] h-[50%] border-t-[1px] border-dark flex justify-center items-center flex-col gap-[15px] text-dark">
                  <div className="cont flex justify-start items-center ">
                    <h1 className="border-s-[3px] border-green px-[5px] font-pB text-[25px] m-0">
                      Standings
                    </h1>
                    <span>|</span>
                    <a
                      href=""
                      className="underline px-[5px] font-pR text-green "
                    >
                      See all Standings
                    </a>
                  </div>
                  <table className="Mycontainer ">
                    <thead className=" text-[20px] ">
                      <tr>
                        <th className="text-start py-[5px]" scope="col">
                          Teams
                        </th>
                        <th className="text-center py-[5px]" scope="col">
                          MP
                        </th>
                        <th className="text-center py-[5px]" scope="col">
                          W
                        </th>
                        <th className="text-center py-[5px]" scope="col">
                          D
                        </th>
                        <th className="text-center py-[5px]" scope="col">
                          L
                        </th>
                        <th
                          className="text-end py-[5px] text-green"
                          scope="col"
                        >
                          Pts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b-[1px] border-dark  ">
                        <th className="text-start flex items-center gap-[10px] py-[5px]">
                          <img
                            src={rca}
                            alt=""
                            srcSet=""
                            className="w-[20px] h-[30px] object-contain"
                          />{" "}
                          RCA
                        </th>
                        <th className=" py-[5px]">30</th>
                        <th className=" py-[5px]">21</th>
                        <th className=" py-[5px]">09</th>
                        <th className=" py-[5px]">00</th>
                        <th className="text-end py-[5px] text-green">72</th>
                      </tr>
                      <tr className="border-b-[1px] border-dark  ">
                        <th className="text-start flex items-center gap-[10px] py-[5px]">
                          <img
                            src={far}
                            alt=""
                            srcSet=""
                            className="w-[20px] h-[30px] object-contain"
                          />{" "}
                          FAR
                        </th>
                        <th className=" py-[5px]">30</th>
                        <th className=" py-[5px]">22</th>
                        <th className=" py-[5px]">05</th>
                        <th className=" py-[5px]">03</th>
                        <th className="text-end py-[5px] text-green">71</th>
                      </tr>
                      <tr className="border-b-[1px] border-dark ">
                        <th className="text-start flex items-center gap-[10px] py-[5px]">
                          <img
                            src={wac}
                            alt=""
                            srcSet=""
                            className="w-[20px] h-[30px] object-contain"
                          />{" "}
                          RSB
                        </th>
                        <th className="py-[5px]">30</th>
                        <th className="py-[5px]">14</th>
                        <th className="py-[5px]">10</th>
                        <th className="py-[5px]">06</th>
                        <th className="text-end py-[5px] text-green">52</th>
                      </tr>
                      <tr>
                        <th className="text-start flex items-center gap-[10px] py-[5px]">
                          <img
                            src={ut}
                            alt=""
                            srcSet=""
                            className="w-[20px] h-[30px] object-contain"
                          />{" "}
                          UT
                        </th>
                        <th className="py-[5px]">30</th>
                        <th className="py-[5px]">12</th>
                        <th className="py-[5px]">08</th>
                        <th className="py-[5px]">10</th>
                        <th className="text-end py-[5px] text-green">44</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Calendar */}
        <section className="py-[20px] select-none">
          <div className="Mycontainer">
            {" "}
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Calendar</h1>
              </div>
              <a href="" className=" text-green underline font-pR ">
                See more Calendar{" "}
              </a>
            </div>
          </div>
          <div>
            <SwipeMatchs />
          </div>
        </section>
        {/* Breaking News */}
        <section className="py-[20px]">
          <div className="Mycontainer pt-[40px] ">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Breaking News</h1>
              </div>
              <a href="" className=" text-green underline font-pR">
                See more News{" "}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-[20px] py-[20px]">
              <div className=" w-[100%] h-[300px] relative duration-700 ease-in-out">
                <div className="absolute  text-white w-[100%] z-10 bottom-[5px] p-[20px] flex justify-start items-start flex-col gap-[10px]">
                  <div>
                    <h1 className="text-[15px] font-pL border-s-[3px] border-green ps-[10px]">
                      14 August 2024
                    </h1>
                    <h1 className="text-[15px] font-pB">
                      hello raja casablanca{" "}
                    </h1>
                    <p className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
                      className=" border-white text-white border-[1px] py-[5px] px-[10px] no-underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="overlay"></div>
                <img
                  src={img2}
                  className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center "
                  alt="..."
                />
              </div>
              <div className=" w-[100%] h-[300px] relative duration-700 ease-in-out">
                <div className="absolute  text-white w-[100%] z-10 bottom-[5px] p-[20px] flex justify-start items-start flex-col gap-[10px]">
                  <div>
                    <h1 className="text-[15px] font-pL border-s-[3px] border-green ps-[10px]">
                      14 August 2024
                    </h1>
                    <h1 className="text-[15px] font-pB">
                      hello raja casablanca{" "}
                    </h1>
                    <p className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
                      className=" border-white text-white border-[1px] py-[5px] px-[10px] no-underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="overlay"></div>
                <img
                  src={img4}
                  className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                  alt="..."
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
              <div className=" w-[100%] h-[250px] relative duration-700 ease-in-out">
                <div className="absolute  text-white w-[100%] z-10 bottom-[5px] p-[20px] flex justify-start items-start flex-col gap-[10px]">
                  <div>
                    <h1 className="text-[15px] font-pL border-s-[3px] border-green ps-[10px]">
                      14 August 2024
                    </h1>
                    <h1 className="text-[15px] font-pB">
                      hello raja casablanca{" "}
                    </h1>
                    <p className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
                      className=" border-white text-white border-[1px] py-[5px] px-[10px] no-underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="overlay"></div>
                <img
                  src={img1}
                  className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                  alt="..."
                />
              </div>
              <div className=" w-[100%] h-[250px] relative duration-700 ease-in-out">
                <div className="absolute  text-white w-[100%] z-10 bottom-[5px] p-[20px] flex justify-start items-start flex-col gap-[10px]">
                  <div>
                    <h1 className="text-[15px] font-pL border-s-[3px] border-green ps-[10px]">
                      14 August 2024
                    </h1>
                    <h1 className="text-[15px] font-pB">
                      hello raja casablanca{" "}
                    </h1>
                    <p className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
                      className=" border-white text-white border-[1px] py-[5px] px-[10px] no-underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="overlay"></div>
                <img
                  src={img5}
                  className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                  alt="..."
                />
              </div>
              <div className=" w-[100%] h-[250px] relative duration-700 ease-in-out">
                <div className="absolute  text-white w-[100%] z-10 bottom-[5px] p-[20px] flex justify-start items-start flex-col gap-[10px]">
                  <div>
                    <h1 className="text-[15px] font-pL border-s-[3px] border-green ps-[10px]">
                      14 August 2024
                    </h1>
                    <h1 className="text-[15px] font-pB">
                      hello raja casablanca{" "}
                    </h1>
                    <p className="text-[15px]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div>
                    <a
                      href=""
                      className=" border-white text-white border-[1px] py-[5px] px-[10px] no-underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="overlay"></div>
                <img
                  src={img6}
                  className="absolute top-0 left-0  block w-[100%] h-[100%] object-cover object-center"
                  alt="..."
                />
              </div>
              
            </div>
          </div>
        </section>
        {/* shop */}
        <section className="py-[20px] ">
          <div className="Mycontainer pt-[40px] overflow-hidden ">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB  text-[25px] m-0">Shop</h1>
              </div>
            </div>
            <div className="w-[100%] bg-dark p-[10px] relative ">
              <div className="absolute top-0 left-0 z-[1] opacity-[0.7] w-[100%] h-[100%]">
                <img
                  src={jersShop}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="w-[100%] h-[500px] flex justify-between items-center relative z-[2]">
                <div className="w-[30%]  h-[100%] flex justify-center items-start flex-col gap-[10px] p-[20px] ">
                  <h1 className="font-pB text-[40px] text-white">Raja Shop</h1>
                  <p className="font-pR text-[20px] text-white">
                    New online store. Same passion.
                  </p>
                  <a
                    href=""
                    className="font-pB text-[30px]  bg-white text-black py-[5px] px-[15px] no-underline rounded-[5px]"
                  >
                    CHECK IT OUT
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[450px] grid grid-cols-5 gap-[20px] py-[20px] ">
              <div className="w-[100%] h-[100%] shadow-[0px_10px_20px_0px_#00000015] relative group ">
                <div className="bg-dark w-[35px] h-[35px] rounded-full flex justify-center items-center absolute z-[2] top-[10px] right-[10px]">
                  <FontAwesomeIcon
                    className=" text-white text-[15px]"
                    icon={faHeart}
                  />
                </div>
                <div className="w-[100%]  absolute top-[0px] left-[0px] z-[1]">
                  <img
                    src={jers5}
                    alt=""
                    className="w-[100%]h-[100%] object-contain"
                  />
                </div>
                <div className="w-[100%]  bg-white absolute bottom-[0px] left-[0px] z-[3] p-[10px] hidden justify-start items-start flex-col gap-[15px]   group-hover:flex hover:transition-all">
                  <div className=" w-[100%] flex justify-between items-center ">
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XS
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      S
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      M
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      L
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XL
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XXL
                    </button>
                  </div>
                  <p className="font-pL m-0">THIRD KIT 2024/25</p>
                  <div className="w-[100%] flex justify-between items-center">
                    <span className="font-pB text-green">230Dh</span>
                    <button className="bg-dark text-white py-[5px] px-[10px] overflow-hidden rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[100%] shadow-[0px_10px_20px_0px_#00000015] relative group ">
                <div className="bg-dark w-[35px] h-[35px] rounded-full flex justify-center items-center absolute z-[2] top-[10px] right-[10px]">
                  <FontAwesomeIcon
                    className=" text-white text-[15px]"
                    icon={faHeart}
                  />
                </div>
                <div className="w-[100%]  absolute top-[0px] left-[0px] z-[1]">
                  <img
                    src={jers2}
                    alt=""
                    className="w-[100%]h-[100%] object-contain"
                  />
                </div>
                <div className="w-[100%]  bg-white absolute bottom-[0px] left-[0px] z-[3] p-[10px] hidden justify-start items-start flex-col gap-[15px]   group-hover:flex hover:transition-all">
                  <div className=" w-[100%] flex justify-between items-center ">
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XS
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      S
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      M
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      L
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XL
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XXL
                    </button>
                  </div>
                  <p className="font-pL m-0">THIRD KIT 2024/25</p>
                  <div className="w-[100%] flex justify-between items-center">
                    <span className="font-pB text-green">230Dh</span>
                    <button className="bg-dark text-white py-[5px] px-[10px] overflow-hidden rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[100%] shadow-[0px_10px_20px_0px_#00000015] relative group ">
                <div className="bg-dark w-[35px] h-[35px] rounded-full flex justify-center items-center absolute z-[2] top-[10px] right-[10px]">
                  <FontAwesomeIcon
                    className=" text-white text-[15px]"
                    icon={faHeart}
                  />
                </div>
                <div className="w-[100%]  absolute top-[0px] left-[0px] z-[1]">
                  <img
                    src={jers3}
                    alt=""
                    className="w-[100%]h-[100%] object-contain"
                  />
                </div>
                <div className="w-[100%]  bg-white absolute bottom-[0px] left-[0px] z-[3] p-[10px] hidden justify-start items-start flex-col gap-[15px]   group-hover:flex hover:transition-all">
                  <div className=" w-[100%] flex justify-between items-center ">
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XS
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      S
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      M
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      L
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XL
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XXL
                    </button>
                  </div>
                  <p className="font-pL m-0">THIRD KIT 2024/25</p>
                  <div className="w-[100%] flex justify-between items-center">
                    <span className="font-pB text-green">230Dh</span>
                    <button className="bg-dark text-white py-[5px] px-[10px] overflow-hidden rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[100%] shadow-[0px_10px_20px_0px_#00000015] relative group ">
                <div className="bg-dark w-[35px] h-[35px] rounded-full flex justify-center items-center absolute z-[2] top-[10px] right-[10px]">
                  <FontAwesomeIcon
                    className=" text-white text-[15px]"
                    icon={faHeart}
                  />
                </div>
                <div className="w-[100%]  absolute top-[0px] left-[0px] z-[1]">
                  <img
                    src={jers4}
                    alt=""
                    className="w-[100%]h-[100%] object-contain"
                  />
                </div>
                <div className="w-[100%]  bg-white absolute bottom-[0px] left-[0px] z-[3] p-[10px] hidden justify-start items-start flex-col gap-[15px]   group-hover:flex hover:transition-all">
                  <div className=" w-[100%] flex justify-between items-center ">
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XS
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      S
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      M
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      L
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XL
                    </button>
                    <button className="border-[1px] border-dark w-[40px] h-[30px] flex justify-center items-center cursor-pointer overflow-hidden rounded-[5px]">
                      XXL
                    </button>
                  </div>
                  <p className="font-pL m-0">THIRD KIT 2024/25</p>
                  <div className="w-[100%] flex justify-between items-center">
                    <span className="font-pB text-green">230Dh</span>
                    <button className="bg-dark text-white py-[5px] px-[10px] overflow-hidden rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[100%] bg-[#000000c7] shadow-[0px_10px_20px_0px_#00000015] relative">
                <img
                  src={jersImg}
                  alt=""
                  className="w-[100%] h-[100%] absolute top-[0] left-[0] object-cover opacity-[0.5]"
                />
                <div className="absolute bottom-[20px] right-[10px] z-10">
                  <a
                    href=""
                    className="border-white border-[1px] px-[20px] py-[10px] text-white flex justify-center items-center gap-[15px] overflow-hidden rounded-[5px] no-underline"
                  >
                    Show Store{" "}
                    <FontAwesomeIcon
                      className=" text-white"
                      icon={faArrowRight}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Academy */}
        <section className="py-[20px] ">
          <div className="Mycontainer pt-[40px] ">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Raja Academy</h1>
              </div>
            </div>

            <div className="w-[100%] shadow-[0px_10px_20px_0px_#00000015]">
              <div className="w-[100%] h-[500px]">
                <img
                  src={rajaAcad}
                  alt=""
                  className="w-[100%] h-[100%] object-cover object-top"
                />
              </div>
              <div className=" w-[100%]  text-center flex justify-center items-center flex-col gap-[10px] py-[10px] bg-white">
                <h1 className="font-pB text-[30px]">Raja Academy</h1>
                <p className="font-pR">
                  Raja Academy is the set of projects dedicated to the
                  involvement of an U18 target audience in sporting activities
                </p>
                <a
                  href=""
                  className="font-pB bg-green text-white px-[20px] py-[10px] overflow-hidden rounded-[5px]"
                >
                  Discover more
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section className="py-[20px] h-[100%]">
          <div className="Mycontainer pt-[40px] h-[100%] ">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Gallery</h1>
              </div>
            </div>
            <div className="w-[100%] bg-black h-[100%] p-[20px]">
              <div className="flex items-center gap-[15px] ">
                <div className="mainTitle">
                  <h1 className="font-pR text-white text-[25px] m-0">Videos</h1>
                </div>
                <a href="" className=" text-white underline font-pR">
                  See more Videos{" "}
                </a>
              </div>
              <div className="w-[100%] p-[10px] grid grid-cols-4 gap-[20px] ">
                <div className="w-[100%] col-span-2 row-span-2 bg-dark">
                  <div className="w-[100%] relative">
                    <img
                      src={playVd}
                      alt=""
                      srcSet=""
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    />
                    <img src={img1} alt="" className="w-[100%]" />
                  </div>
                  <div className=" px-[20px] py-[20px]">
                    <p className="text-white text-[15px]">12 August 2024</p>
                    <h1 className="text-white text-[20px] font-pB">
                      Raja Club Fans
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] bg-dark">
                  <div className="w-[100%] h-[250px] relative">
                    <img
                      src={playVd}
                      alt=""
                      srcSet=""
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    />
                    <img
                      src={img5}
                      alt=""
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className=" px-[20px] py-[20px] ">
                    <p className="text-white text-[15px]">12 August 2024</p>
                    <h1 className="text-white text-[20px] font-pB">
                      Raja Club Fans
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] bg-dark">
                  <div className="w-[100%] h-[250px] relative">
                    <img
                      src={playVd}
                      alt=""
                      srcSet=""
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    />
                    <img
                      src={img2}
                      alt=""
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className=" px-[20px] py-[20px]  ">
                    <p className="text-white text-[15px]">12 August 2024</p>
                    <h1 className="text-white text-[20px] font-pB">
                      Raja Club Fans
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] bg-dark">
                  <div className="w-[100%] h-[250px] relative">
                    <img
                      src={playVd}
                      alt=""
                      srcSet=""
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    />
                    <img
                      src={img6}
                      alt=""
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className=" px-[20px] py-[20px] ">
                    <p className="text-white text-[15px]">12 August 2024</p>
                    <h1 className="text-white text-[20px] font-pB">
                      Raja Club Fans
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] bg-dark">
                  <div className="w-[100%] h-[250px] relative">
                    <img
                      src={playVd}
                      alt=""
                      srcSet=""
                      className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    />
                    <img
                      src={img3}
                      alt=""
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className=" px-[20px] py-[20px] ">
                    <p className="text-white text-[15px]">12 August 2024</p>
                    <h1 className="text-white text-[20px] font-pB">
                      Raja Club Fans
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <div className="flex items-center gap-[15px] ">
                  <div className="mainTitle">
                    <h1 className="font-pR text-white text-[25px] m-0 ">
                      Photos
                    </h1>
                  </div>
                </div>
                <div className="w-[100%] p-[10px] ">
                  <div className="w-[100%]  grid grid-cols-4  gap-[20px]">
                    <div className="w-[100%] h-[100%] relative">
                      <img
                        src={galleryIcon}
                        alt=""
                        srcSet=""
                        className="absolute right-[20px] bottom-[20px] cursor-pointer"
                      />
                      <img
                        src={img1}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="w-[100%] h-[100%] relative">
                      <img
                        src={galleryIcon}
                        alt=""
                        srcSet=""
                        className="absolute right-[20px] bottom-[20px] cursor-pointer"
                      />
                      <img
                        src={img2}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="w-[100%] h-[100%] relative">
                      <img
                        src={galleryIcon}
                        alt=""
                        srcSet=""
                        className="absolute right-[20px] bottom-[20px] cursor-pointer"
                      />
                      <img
                        src={img3}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="w-[100%] h-[100%] relative">
                      <img
                        src={galleryIcon}
                        alt=""
                        srcSet=""
                        className="absolute right-[20px] bottom-[20px] cursor-pointer"
                      />
                      <img
                        src={img4}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex justify-center items-center h-[100%] pt-[20px]">
                  {" "}
                  <a
                    href=""
                    className="bg-green text-white px-[30px] py-[10px] underline"
                  >
                    See more Photos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Players */}
        <section className="py-[20px] h-[100%] bg-dark">
          <div className="Mycontainer pt-[40px] h-[100%]">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] text-white m-0">Squad</h1>
              </div>
            </div>
          </div>
          <Players />
        </section>
        {/* club */}
        <section className="py-[20px] h-[100%]">
          <div className="Mycontainer pt-[40px] h-[100%]">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Club</h1>
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-2 gap-[20px]">
              <div className="w-[100%] h-[400px] relative ">
                <div className="bg-[#0000009d] w-[100%] h-[100%] absolute top-0 left-0 z-50"></div>
                <img
                  src={rcaPal}
                  alt=""
                  srcSet=""
                  className="w-[100%] h-[100%] object-cover absolute top-0 left-0"
                />
                <div className="w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99] text-white text-center flex justify-center items-center flex-col gap-[10px]">
                  <h1 className="font-pB text-[30px]">Palmares</h1>
                  <p className="font-pL text-[thinpx]">
                    A blast from the past: the great victories and unforgettable
                    successes
                  </p>
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px]"
                  >
                    Discover more
                  </a>
                </div>
              </div>
              <div className="w-[100%] h-[400px] relative ">
                <div className="bg-[#0000009d] w-[100%] h-[100%] absolute top-0 left-0 z-50"></div>
                <img
                  src={rcaLeg}
                  alt=""
                  srcSet=""
                  className="w-[100%] h-[100%] object-cover absolute top-0 left-0"
                />
                <div className="w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99] text-white text-center flex justify-center items-center flex-col gap-[10px]">
                  <h1 className="font-pB text-[30px]">LEGENDS</h1>
                  <p className="font-pL text-[thinpx]">
                    All the stars from the Rossonero history
                  </p>
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px]"
                  >
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rca App */}
        <section className="py-[20px] h-[100%]">
          <div className="Mycontainer pt-[40px] h-[100%]">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">RCA App</h1>
              </div>
            </div>
            <div className="w-[100%] shadow-[0px_10px_20px_0px_#00000015]">
              <div className="w-[100%] h-[100%] ">
                <img
                  src={rcaApp}
                  alt=""
                  srcSet=""
                  className="w-[100%] h-[100%] object-cover "
                />
                <div className="w-[100%]  bg-white  text-center flex justify-center items-center flex-col gap-[5px] py-[15px]">
                  <h1 className="font-pB text-[30px]">RCA OFFICIAL APP</h1>
                  <p className="font-pL text-[thinpx]">
                    Download Raja&apos;s official App to immerse yourself fully
                    in the Rossoneri world
                  </p>
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px]"
                  >
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team library */}
        <section className="py-[20px] h-[100%]">
          <div className="Mycontainer pt-[40px] h-[100%]">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Team library</h1>
              </div>
            </div>
            <div className="w-[100%] grid grid-cols-3 gap-[20px]">
              <div className="w-[100%] bg-white shadow-[0px_10px_20px_0px_#00000010]">
                <div className="w-[100%] h-[300px]  relative">
                  <div className="bg-[#0000006b] w-[100%] h-[100%] absolute top-0 left-0 z-50"></div>
                  <img
                    src={rcaBook1}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="w-[100%] h-[150px]  p-[15px]">
                  <h1 className="font-pB pb-[5px] text-[20px]">
                    L&apos;ÉPOPÉE DU RAJA
                  </h1>
                  <p>
                    The Raja was born on September 23, 2021 at the start of an
                    initial delivery, “The pope of Raja… the glory of the world”
                    that relates to his history and other historical realities
                    related to his creation.
                  </p>
                </div>
              </div>
              <div className="w-[100%] bg-white shadow-[0px_10px_20px_0px_#00000010]">
                <div className="w-[100%] h-[300px]  relative">
                  <div className="bg-[#0000006b] w-[100%] h-[100%] absolute top-0 left-0 z-50"></div>
                  <img
                    src={rcaBook2}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="w-[100%] h-[150px]  p-[15px]">
                  <h1 className="font-pB pb-[5px] text-[20px]">
                    The saga of hope, paths of glory
                  </h1>
                  <p>
                    The title of the latest edition deals with the history and
                    achievements of the team, and it is the result of great work
                    to dig into history and recall immortal moments in the
                    glorious history of Raja Sports Club.
                  </p>
                </div>
              </div>
              <div className="w-[100%] bg-white shadow-[0px_10px_20px_0px_#00000010]">
                <div className="w-[100%] h-[300px]  relative">
                  <div className="bg-[#0000006b] w-[100%] h-[100%] absolute top-0 left-0 z-50"></div>
                  <img
                    src={rcaBook3}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                  <a
                    href=""
                    className="font-pB bg-green text-white px-[20px] py-[10px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="w-[100%] h-[150px]  p-[15px]">
                  <h1 className="font-pB pb-[5px] text-[20px]">
                    Raja The Legend
                  </h1>
                  <p>
                    The Raja Casablanca football team , in coordination with one
                    of its former members, Samir Shawqi , presented his new
                    book, “ The Legend ,” which chronicles the brilliance of the
                    Rajawi team in the Club World Cup...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Partners */}
        <section className="py-[20px] h-[100%]">
          <div className="Mycontainer  h-[100%] py-[40px]">
            <div className="flex items-center gap-[15px] ">
              <div className="mainTitle">
                <h1 className="font-pB text-[25px] m-0">Partners</h1>
              </div>
            </div>
            <div className="w-[100%]  text-center font-pB text-[20px] py-[10px]">
              <h1 className="py-[10px]">Officiel Partners</h1>
              <div className="flex justify-center items-center gap-[30px]">
                {" "}
                <div className="w-[100px] h-[auto]">
                  <img
                    src={umbro}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1]  transition-[0.5s] invert "
                  />
                </div>
                <div className="w-[100px] h-[auto]">
                  <img
                    src={marsa}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1]  transition-[0.5s] invert "
                  />
                </div>
              </div>
            </div>
            <div className=" w-[50%] ms-auto me-auto h-[1px] my-[10px] bg-green"></div>
            <div className="w-[100%]  text-center font-pR text-[20px] py-[10px]">
              <h1 className="">Our Partners</h1>
              <div className="flex justify-center items-center gap-[30px]">
                <div className="w-[80px] h-[auto]">
                  <img
                    src={anp}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1]  transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={anker}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1]  transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={blanc}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1]  transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={atasanad}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={guichet}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={nordar}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={sofac}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={kayna}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={sportm}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
                <div className="w-[80px] h-[auto]">
                  <img
                    src={changan}
                    alt=""
                    className="w-[100%] h-[100%] opacity-[0.4] hover:opacity-[1] transition-[0.5s] invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
