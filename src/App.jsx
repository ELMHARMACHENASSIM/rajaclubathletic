import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routerDom from "./layouts/Index";
import logoRaja from "./assets/images/logos/logo-raja-green.png";
import logoMarsa from "./assets/images/spn/Marsa.png";
import { BarLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true); // start with true

  useEffect(() => {
    // Preload images
    const images = [logoRaja, logoMarsa];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false); // all images are ready
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(false); // even if some fail
        }
      };
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-white overflow-y-hidden">
          <div className="w-[500px] h-[600px] flex justify-center items-center flex-col gap-[30px]">
            <div className="w-[100%] flex items-center justify-center gap-[50px]">
              <div className="w-[150px] h-[200px]">
                <img
                  src={logoRaja}
                  alt="raja"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="h-[100%] w-[2px] bg-green"></div>
              <div className="w-[150px] h-[100%]">
                <img
                  src={logoMarsa}
                  alt="marsa"
                  className="w-[100%] h-[100%] object-contain invert"
                />
              </div>
            </div>

            <div className="w-[100%] h-[3px] flex justify-center items-center">
              <BarLoader
                width={500}
                color={"#365E32"}
                loading={loading}
                speedMultiplier={1}
              />
            </div>
          </div>
        </div>
      ) : (
        <RouterProvider router={routerDom} />
      )}
    </>
  );
};

export default App;
