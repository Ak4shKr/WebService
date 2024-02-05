import React, { useState } from "react";
import { menu, close } from "../assets/icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  };
  return (
    <section className="w-full bg-black text-white flex justify-between items-center px-8 py-3 lg:px-16 sticky top-0 z-40 ">
      <h1 className="text-green-600 text-3xl font-bold ">DEBUG ENTITY</h1>
      <div className="hidden lg:flex justify-end items-center ga2">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a
              href="/"
              className="text-lg text-sky-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-lg text-sky-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white "
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-lg text-sky-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white "
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-lg text-sky-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white "
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg text-sky-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white active:text-white "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden flex-col">
        {iconToggle ? (
          <img
            src={close}
            alt="closeIcon"
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <img
            src={menu}
            alt="closeIcon"
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Header;
