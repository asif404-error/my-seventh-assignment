import React from "react";
import logo from "../../assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { PiChartLine } from "react-icons/pi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-6">
      <div className="flex-1">
        <span className="text-xl font-bold text-gray-800">
          <img src={logo} alt="logo" />
        </span>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-1 bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "flex items-center gap-1 text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
              }
            >
              <RiHome2Line /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-1 bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "flex items-center gap-1 text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
              }
            >
              <LuClock3 /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-1 bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "flex items-center gap-1 text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium"
              }
            >
              <PiChartLine /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
