import dataJson from "../../assets/players.json";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import "./playerswip.css";

const Players = () => {
  const [dataPlayer, setDataPlayer] = useState([]);
  const getData = () => {
    const data = dataJson.data;
    setDataPlayer(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <>
        <div className="mycontainer cursor-move m-{20px]">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            className="mySwiper"
          >
            {dataPlayer.map((player, key) => (
              <SwiperSlide
                className="flex ga-[20px] h-[100%] text-white"
                key={key}
              >
                <div className="w-[100%] h-[450px] flex text-white">
                  <div className="w-[450px] h-[450px] relative">
                    {player.cap === true ? (
                      <span className="absolute  top-[80px] left-[10px] w-[60px] h-[60px] flex justify-center items-center font-pB bg-white text-dark text-[40px]  ">
                        C
                      </span>
                    ) : (
                      ""
                    )}
                    <span className="absolute  top-[10px] left-[10px] w-[60px] h-[60px] flex justify-center items-center font-pB bg-[black] text-[40px]  ">
                      {player.num}
                    </span>

                    <img
                      src={player.image}
                      alt=""
                      srcSet=""
                      className="w-[100%] h-[100%]  "
                    />
                    <div className="w-[100%] h-[auto] flex flex-col justify-center items-start gap-[10px] bg-gradient-to-t from-30%  from-dark cont py-[15px] absolute bottom-0">
                      <h1 className="font-pB text-[35px] text-left">
                        {" "}
                        {player.name}
                      </h1>
                      <p>
                        Age :{" "}
                        <span className="font-pB text-[15px]">
                          {player.age}
                        </span>
                      </p>
                      <div className="flex gap-[15px]">
                        <p>
                          Pos :{" "}
                          <span className="font-pB text-[15px]">
                            {player.position}
                          </span>
                        </p>
                        <p>
                          Nat :{" "}
                          <span className="font-pB text-[15px]">
                            {player.country}
                          </span>
                        </p>
                      </div>

                      <a href={player.social.ig.url}>
                        <img
                          src={player.social.ig.logo}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>

      <div className="Mycontainer flex justify-start items-center gap-[10px]"></div>
    </>
  );
};

export default Players;
