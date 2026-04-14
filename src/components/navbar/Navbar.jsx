import React from "react";
import logo from "../../assets/logo.png";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { PiChartLine } from "react-icons/pi";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm px-6">
      <div className="flex-1 w-10 h-10">
        <img src={logo} alt="navbar-logo" />
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            <RxHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-44 space-y-1"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2"
                    : "text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium flex items-center gap-2"
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
                    ? "bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2"
                    : "text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium flex items-center gap-2"
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
                    ? "bg-[#2d6a4f] text-white rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2"
                    : "text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium flex items-center gap-2"
                }
              >
                <PiChartLine /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
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
