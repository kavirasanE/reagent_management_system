import React from "react";
import hero from "../assets/hero.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <div ><FaQuoteLeft size={50} /></div>
        <h1 className=" text-4xl font-bold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start font-semibold">
        Embrace your uniqueness with our personalized T-shirt designs. Johnson understands the power of personal style, and at Mojoh, you're not 
        just buying a shirt; you're crafting your identity. Design your statement piece, embody your Mojoh, and make every wear a testament to your individuality.
        </p>
        <p className="text-justify lg:text-start font-semibold">
        Beyond personal expression, Mojoh Clothing caters to businesses and organizations with our hassle-free bulk order services. Whether outfitting a team or creating branded merchandise for an event, we ensure that the same commitment to exceptional quality 
        extends to every item, aligning with Johnson's vision for excellence.
        </p>
        <p className="text-justify lg:text-start font-semibold">
        Thank you for choosing Mojoh Clothing, where Johnson Paul's vision meets your individuality. Experience fashion that goes beyond trends—one that tells your unique story with every customized T-shirt and bulk order.
        </p>
        <button className="py-8">
        <a href="https://wa.me/9629669529" target='_blank' className="border-2  font-bold rounded-xl p-5  items-center justify-center mx-2  bg-red-400 border-black text-black ">Contact Us</a>
        </button>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={hero} alt="img" />
      </div>
    </div>
  );
};

export default About;