// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import rcaLogo from "../../assets/images/teams/rca.png";
import inwiLogo from "../../assets/images/teams/inwi.png";
import farLogo from "../../assets/images/teams/far.png";
import locLogo from "../../assets/images/other/loc.png";
import calLogo from "../../assets/images/other/cal.png";
import wacLogo from "../../assets/images/teams/wac.png";
import utLogo from "../../assets/images/teams/ut.png";
import cafLogo from "../../assets/images/teams/caf.png";
import trnLogo from "../../assets/images/teams/trn.png";
import tetLogo from "../../assets/images/teams/tet.png";
import ocsLogo from "../../assets/images/teams/ocs.png";

const SwipeMatchs = () => {
  return (
    <>
      <div className="Mycontainer cursor-move">
        <Swiper
    
          slidesPerView={"auto"}
          spaceBetween={30}
       
          className="mySwiper"
      
        >
          <SwiperSlide>
            <div className="h-[100%] w-[400px] border-[#00800060] border-[0.5px] bg-white">
              <div className="w-[100%] flex justify-start items-center flex-col shadow-[0px_10px_20px_0px_#00000015]  overflow-hidden">
                <div className="w-[100%]   select-none">
                  <div className="cont h-[170px] flex justify-between items-center gap-[20px]">
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={rcaLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                    <div className="w-[30px] h-[60px]">
                      <img
                        src={cafLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none invert"
                      />
                    </div>
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={farLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-white text-dark pt-[10px]">
                  <div className="cont flex justify-between items-cente">
                    <h1 className="text-[15px] font-pR">Botola Pro</h1>
                    <h1 className="text-[15px] font-pR">Matchday 2</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pB   text-[20px]">
                      Raja Club Athletic
                    </h1>
                    <h1 className="font-pR  text-[20px]">AS Far</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={calLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Wednesday, Sep 25 (To be confirmed)
                    </h1>
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={locLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Larbi Zaouli Stadium
                    </h1>
                  </div>
                </div>
                <div className="w-[100%]  bg-white py-[10px] ">
                  <div className="cont flex justify-center items-center gap-[10px]">
                    <a
                      href=""
                      className="py-[5px] px-[25px] border-green border-[1px] text-dark no-underline"
                    >
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="py-[5px] px-[25px] bg-green border-green border-[1px] text-white no-underline"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100%] w-[400px] border-[#00800060] border-[0.5px] bg-white">
              <div className="w-[100%] flex justify-start items-center flex-col shadow-[0px_10px_20px_0px_#00000015]  overflow-hidden">
                <div className="w-[100%]   select-none">
                  <div className="cont h-[170px] flex justify-between items-center gap-[20px]">
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={wacLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                    <div className="w-[30px] h-[60px]">
                      <img
                        src={inwiLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none invert"
                      />
                    </div>
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={rcaLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-white text-dark pt-[10px]">
                  <div className="cont flex justify-between items-cente">
                    <h1 className="text-[15px] font-pR">Botola Pro</h1>
                    <h1 className="text-[15px] font-pR">Matchday 2</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pR  text-[20px]">
                      Wydad Athletic Club
                    </h1>
                    <h1 className="font-pB   text-[20px]">
                      Raja Club Athletic
                    </h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={calLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Wednesday, Sep 25 (To be confirmed)
                    </h1>
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={locLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Larbi Zaouli Stadium
                    </h1>
                  </div>
                </div>
                <div className="w-[100%]  bg-white py-[10px] ">
                  <div className="cont flex justify-center items-center gap-[10px]">
                    <a
                      href=""
                      className="py-[5px] px-[25px] border-green border-[1px] text-dark no-underline"
                    >
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="py-[5px] px-[25px] bg-green border-green border-[1px] text-white no-underline"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100%] w-[400px] border-[#00800060] border-[0.5px]">
              <div className="w-[100%] flex justify-start items-center flex-col shadow-[0px_10px_20px_0px_#00000015] overflow-hidden">
                <div className="w-[100%]   select-none">
                  <div className="cont h-[170px] flex justify-between items-center gap-[20px]">
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={rcaLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                    <div className="w-[30px] h-[60px]">
                      <img
                        src={trnLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none invert"
                      />
                    </div>
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={utLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-white text-dark pt-[10px]">
                  <div className="cont flex justify-between items-cente">
                    <h1 className="text-[15px] font-pR">Botola Pro</h1>
                    <h1 className="text-[15px] font-pR">Matchday 2</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pB   text-[20px]">
                      Raja Club Athletic
                    </h1>
                    <h1 className="font-pR  text-[20px]">Union Touarga</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={calLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Wednesday, Sep 25 (To be confirmed)
                    </h1>
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={locLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Larbi Zaouli Stadium
                    </h1>
                  </div>
                </div>
                <div className="w-[100%]  bg-white py-[10px] ">
                  <div className="cont flex justify-center items-center gap-[10px]">
                    <a
                      href=""
                      className="py-[5px] px-[25px] border-green border-[1px] text-dark no-underline"
                    >
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="py-[5px] px-[25px] bg-green border-green border-[1px] text-white no-underline"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100%] w-[400px] border-[#00800060] border-[0.5px]">
              <div className="w-[100%] flex justify-start items-center flex-col shadow-[0px_10px_20px_0px_#00000015]  overflow-hidden">
                <div className="w-[100%]   select-none">
                  <div className="cont h-[170px] flex justify-between items-center gap-[20px]">
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={tetLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                    <div className="w-[30px] h-[60px]">
                      <img
                        src={inwiLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none invert"
                      />
                    </div>
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={rcaLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-white text-dark pt-[10px]">
                  <div className="cont flex justify-between items-cente">
                    <h1 className="text-[15px] font-pR">Botola Pro</h1>
                    <h1 className="text-[15px] font-pR">Matchday 2</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pR  text-[20px]">
                      Maroc Athletic Tetouan
                    </h1>
                    <h1 className="font-pB   text-[20px]">
                      Raja Club Athletic
                    </h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={calLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Wednesday, Sep 25 (To be confirmed)
                    </h1>
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={locLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Larbi Zaouli Stadium
                    </h1>
                  </div>
                </div>
                <div className="w-[100%]  bg-white py-[10px] ">
                  <div className="cont flex justify-center items-center gap-[10px]">
                    <a
                      href=""
                      className="py-[5px] px-[25px] border-green border-[1px] text-dark no-underline"
                    >
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="py-[5px] px-[25px] bg-green border-green border-[1px] text-white no-underline"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100%] w-[400px] border-[#00800060] border-[0.5px]">
              <div className="w-[100%] flex justify-start items-center flex-col shadow-[0px_10px_20px_0px_#00000015]  overflow-hidden">
                <div className="w-[100%]   select-none">
                  <div className="cont h-[170px] flex justify-between items-center gap-[20px]">
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={rcaLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                    <div className="w-[30px] h-[60px]">
                      <img
                        src={inwiLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none invert"
                      />
                    </div>
                    <div className="w-[70px] h-[90px]">
                      <img
                        src={ocsLogo}
                        alt=""
                        className="w-[100%] h-[100%] object-contain select-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-white text-dark pt-[10px]">
                  <div className="cont flex justify-between items-cente">
                    <h1 className="text-[15px] font-pR">Botola Pro</h1>
                    <h1 className="text-[15px] font-pR">Matchday 2</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pB   text-[20px]">
                      Raja Club Athletic
                    </h1>
                    <h1 className="font-pR  text-[20px]">Olympic Club Safi</h1>
                  </div>
                  <div className="cont">
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={calLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Wednesday, Sep 25 (To be confirmed)
                    </h1>
                    <h1 className="font-pL text-[15px] flex items-center gap-[5px]">
                      <img
                        src={locLogo}
                        alt=""
                        className="w-[15px] h-[15px] object-contain"
                      />
                      Larbi Zaouli Stadium
                    </h1>
                  </div>
                </div>
                <div className="w-[100%]  bg-white py-[10px] ">
                  <div className="cont flex justify-center items-center gap-[10px]">
                    <a
                      href=""
                      className="py-[5px] px-[25px] border-green border-[1px] text-dark no-underline"
                    >
                      Add To Cart
                    </a>
                    <a
                      href=""
                      className="py-[5px] px-[25px] bg-green border-green border-[1px] text-white no-underline"
                    >
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipeMatchs;

// import required modules
