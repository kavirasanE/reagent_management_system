import React from "react";
import tshirt1 from "../assets/t-shirt1.jpg";
import tshirt4 from "../assets/tshirt4.jpg";
import tshirt5 from "../assets/tshirt5.jpg";
import tshirt6 from "../assets/tshirt6.jpg";
import tshirt7 from "../assets/tshirt7.jpg";
import Marquee from "react-fast-marquee"

const Designs = () => {
    const maskGradient = {
        maskImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(255, 255, 255, 0) 100%)",
      };
  return (
    <>
    <h1 className="text-3xl sm:text-2xl md:text-6xl font-bold text-center subpixel-antialiased lg:text-center my-12 "> Our Featured Designs</h1>
    <div className="flex flex-row m-5 px-4" style={maskGradient}>
        <Marquee autoFill pauseOnClick pauseOnHover speed={30}>
      <div className="h-96 w-72 mx-2 gap-5 ">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125  gap-2"
          src={tshirt1}
          alt=""
        />
      </div>
      <div className="h-96 w-72 mx-2 gap-5 ">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125  gap-2"
          src={tshirt4}
          alt=""
        />
      </div>
      <div className="h-96 w-72 mx-2 gap-5 ">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125  gap-2"
          src={tshirt5}
          alt=""
        />
      </div>
      <div className="h-96 w-72 mx-2 gap-5 ">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125  gap-2"
          src={tshirt6}
          alt=""
        />
      </div>
      <div className="h-96 w-72 mx-2 gap-5 ">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125  gap-2"
          src={tshirt7}
          alt=""
        />
      </div>
      </Marquee>
    </div>
    </>
  );
};

export default Designs;
