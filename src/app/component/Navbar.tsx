'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Chef', href: '/OurChef' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pages', href: '#' },
    { name: 'About', href: '/about' },
    { name: 'Signup', href: '/Signin' },
  ];

  const dropdownItems = [
    { name: 'Blog Details', href: '/BlogDetails' },
    { name: 'Checkout Page', href: '/CheckOut' },
    { name: 'FAQ Page', href: '/FAQ' },
    { name: '404 Page', href: '/404' },
  ];

  return (
    <header className="w-full bg-black fixed top-0 left-0 right-0 px-4 py-4 sm:px-6 lg:px-20 z-50 transition-all duration-300">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[20px] sm:text-[24px] font-bold text-white">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Search Bar and Cart Icon - Always Visible */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-[#FF9F0D] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white outline-none placeholder-gray-400 w-24 sm:w-32 md:w-40"
            />
            <FiSearch className="h-5 w-5 text-[#FF9F0D] ml-2" />
          </div>
          <Link href="/ShoppingCart">
            <FiShoppingCart className="h-6 w-6 text-[#FF9F0D] cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <FiMenu size={24} /> : <FiX size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transition-all duration-300 z-40 ${
            menuOpen ? 'top-0' : '-top-full'
          } lg:hidden`}
        >
          <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>

          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                {item.name === 'Pages' ? (
                  <>
                    <button
                      className="text-[18px] text-white hover:text-[#FF9F0D] font-medium"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {item.name}
                    </button>
                    {dropdownOpen && (
                      <ul className="absolute left-1/2 transform -translate-x-1/2 top-10 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50">
                        {dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-white hover:text-[#FF9F0D] hover:bg-gray-800"
                              onClick={() => {
                                setDropdownOpen(false);
                                setMenuOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[18px] text-white hover:text-[#FF9F0D] font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.name === 'Pages' ? (
                <>
                  <button
                    className="text-[16px] text-white hover:text-[#FF9F0D] font-medium"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50">
                      {dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-white hover:text-[#FF9F0D] hover:bg-gray-800"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} className="text-[16px] text-white hover:text-[#FF9F0D] font-medium">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
