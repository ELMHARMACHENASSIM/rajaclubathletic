import { Carousel } from "flowbite-react";

import banner from "../assets/images/jersey/banner.jpg"
import banner1 from "../assets/images/jersey/banner1.jpg"
import banner2 from "../assets/images/jersey/banner2.jpg"
import banner3 from "../assets/images/jersey/banner3.jpg"
const Shop = () => {
  return (
    <>
      <section className="pt-[130px] ">
        <div className="w-[100%]">
         
          <nav></nav>
          <div className="w-[100%]">
            <div className=" w-[100%] h-[550px] carousel-container">
              <Carousel slide={true}>
                <img
                  src={banner}
                  alt="..." className="w-[100%] h-[100%] object-cover object-center"
                />
                <img
                  src={banner1}
                  alt="..." className="w-[100%] h-[100%] object-cover object-center"
                />
                <img
                  src={banner2}
                  alt="..." className="w-[100%] h-[100%] object-cover object-center"
                />
                <img
                  src={banner3}
                  alt="..." className="w-[100%] h-[100%] object-cover object-center"
                />
             
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
