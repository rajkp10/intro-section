import React from "react";
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import ToDo from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminders from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";
import Menu from "../images/icon-menu.svg";
import Hero from "./Hero";

function Navbar() {
  return (
    <main className="drawer drawer-end">
      <input type="checkbox" id="my-drawer" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar px-8 h-[5vh]">
          {/* Left side of Navbar */}
          <div className="navbar-start gap-8 items-center hidden lg:flex">
            <img src={Logo} alt="logo" className="translate-y-1 mr-4" />
            <div className="dropdown dropdown-bottom dropdown-end dropdown-hover group">
              <label
                tabIndex={0}
                className="m-1 flex gap-2 items-center cursor-pointer"
              >
                <span className="text-secondary group-hover:text-primary">
                  Features
                </span>
                <img src={ArrowDown} alt="" className="swap-on" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-box w-44"
              >
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    <img src={ToDo} alt="" />
                    <span>ToDo List</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    <img src={Calendar} alt="" />
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    <img src={Reminders} alt="" />
                    <span>Reminders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    <img src={Planning} alt="" />
                    <span>Planning</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom dropdown-hover group">
              <label
                tabIndex={0}
                className="m-1 flex gap-2 items-center cursor-pointer"
              >
                <span className="text-secondary group-hover:text-primary">
                  Company
                </span>
                <img src={ArrowDown} alt="" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-box w-36"
              >
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointe active:bg-neutralr"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary cursor-pointer active:bg-neutral"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="text-secondary hover:text-primary cursor-pointer"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-secondary hover:text-primary cursor-pointer"
            >
              About
            </a>
          </div>
          {/* Right side of navbar */}
          <div className="navbar-end gap-8 hidden lg:flex">
            <button className="btn btn-ghost capitalize text-secondary font-normal hover:text-primary hover:bg-neutral">
              Login
            </button>
            <button className="btn btn-outline capitalize text-secondary font-normal border-secondary hover:bg-neutral hover:border-primary hover:text-primary">
              Register
            </button>
          </div>
          <div className="navbar-start h-full items-center translate-y-2 lg:hidden">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navbar-end h-full items-center lg:hidden">
            <label htmlFor="my-drawer" className="cursor-pointer">
              <img src={Menu} alt="menu" />
            </label>
          </div>
        </div>
        {/* Hero section */}
        <Hero />
        {/* Navbar for mobile */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="w-80 p-4 bg-white flex flex-col">
          <li className="collapse collapse-arrow group">
            <input type="checkbox" />
            <div className="text-left cursor-pointer text-secondary group-hover:text-primary collapse-title">
              <span className="">Features</span>
            </div>
            <ul
              tabIndex={0}
              className="collapse-content menu px-4 bg-base-100 w-full"
            >
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  <img src={ToDo} alt="" />
                  <span>ToDo List</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  <img src={Calendar} alt="" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  <img src={Reminders} alt="" />
                  <span>Reminders</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  <img src={Planning} alt="" />
                  <span>Planning</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapse collapse-arrow group">
            <input type="checkbox" />
            <div className="text-left cursor-pointer text-secondary group-hover:text-primary collapse-title">
              <span>Company</span>
            </div>
            <ul
              tabIndex={0}
              className="collapse-content menu px-4 bg-white w-full"
            >
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-primary cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="text-left cursor-pointer text-secondary hover:text-primary collapse-title">
              <span>Careers</span>
            </div>
          </li>
          <li>
            <div className="text-left cursor-pointer text-secondary hover:text-primary collapse-title">
              <span>About</span>
            </div>
          </li>
          <li>
            <button className="mt-4 btn btn-ghost capitalize text-secondary font-normal hover:text-primary hover:bg-white">
              Login
            </button>
          </li>
          <li>
            <button className="w-full btn btn-outline capitalize text-secondary font-normal border-secondary hover:bg-white hover:border-primary hover:text-primary">
              Register
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Navbar;
