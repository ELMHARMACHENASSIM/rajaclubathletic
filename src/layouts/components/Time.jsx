import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return (
    <>
      <div className="text-center flex flex-col leading-2">
        <p className="text-[16px] font-pR text-black">
          {date.toLocaleTimeString("en-US", timeOptions)}
        </p>
        <p className="text-[15px] font-pR text-black">
          {date.toLocaleDateString("en-US", dateOptions)}
        </p>
      </div>
    </>
  );
};
export default Time;
