import React from "react";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="text-center py-10 md:py-14 lg:py-16 px-4 md:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#2d6a4f] text-white hover:bg-[#245a42] border-none gap-2 text-sm md:text-base px-4 md:px-6">
        <FiPlus size={18} /> Add a Friend
      </button>

    </div>
  );
};

export default Banner;