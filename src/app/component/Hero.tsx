"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import hero from "../../../assests/hero.png"; // Update the path if necessary

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <header className="bg-black text-white py-4 px-3 md:px-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          {!menuOpen ? (
            <FiMenu
              className="h-8 w-8 text-[#FF9F0D] cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          ) : (
            <FiX
              className="h-8 w-8 text-[#FF9F0D] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </div>

        {/* Navbar Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-black transition-transform transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:static md:flex md:space-x-8 md:translate-y-0 md:w-auto z-50`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:space-x-8 text-lg font-medium px-4 md:px-0">
            <li>
              <a href="#home" className="hover:text-[#FF9F0D] block">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#FF9F0D] block">
                Menu
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#FF9F0D] block">
                Blog
              </a>
            </li>
            <li>
              <a href="#pages" className="hover:text-[#FF9F0D] block">
                Pages
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FF9F0D] block">
                About
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-[#FF9F0D] block">
                Shop
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FF9F0D] block">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Bar and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden md:flex items-center border-2 border-[#FF9F0D] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white outline-none placeholder-gray-400"
            />
            <FiSearch className="h-5 w-5 text-[#FF9F0D] ml-2" />
          </div>
          <FiShoppingCart className="h-6 w-6 text-[#FF9F0D] cursor-pointer" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
        <div className="text-white w-full md:w-[50%]">
          <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] text-center md:text-left">
            Its Quick & Amusing!
          </h1>
          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-3 text-center md:text-left">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed
          </h1>
          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold text-center md:text-left">
            Food Quality
          </h1>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>
        <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
          <Image
            src={hero}
            alt="Hero Image"
            className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
