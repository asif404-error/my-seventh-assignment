import React from "react";
import logo2 from "../../assets/logo-xl.png";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#1b4332] text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo2}
            alt="logo"
            className="w-56 md:w-64 lg:w-72 object-contain"
          />
        </div>
        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-sm font-medium mb-3">Social Links</p>

        <div className="flex justify-center gap-3 md:gap-4 mb-8">
          <a className="bg-white text-black p-2 md:p-3 rounded-full hover:opacity-80">
            <TbBrandInstagramFilled size={18} />
          </a>
          <a className="bg-white text-black p-2 md:p-3 rounded-full hover:opacity-80">
            <FaSquareFacebook size={18} />
          </a>
          <a className="bg-white text-black p-2 md:p-3 rounded-full hover:opacity-80">
            <BsTwitterX size={18} />
          </a>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-3">
          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
