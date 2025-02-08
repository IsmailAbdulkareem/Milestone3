'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiShoppingCart } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Home',     href: '/' },
    { name: 'Menu',     href: '/menu' },
    { name: 'Our Chef', href: '/OurChef' },
    { name: 'Blog',     href: '/blog' },
    { name: 'Pages',    href: '#' },
    { name: 'About',    href: '/about' },
    { name: 'Signup',   href: '/Signin' },

  ];

  const dropdownItems = [
    { name: 'Blog Details',  href: '/BlogDetails' },  
    { name: 'Checkout Page', href: '/checkOut' },
    { name: 'FAQ Page',      href: '/FAQ' },
    { name: '404 Page',      href: '/404' },
  ];

  return (
    <header className="w-full bg-black fixed top-0 px-4 py-4 sm:px-6 lg:px-20 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? <FiMenu size={24} /> : <FiX size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-6 lg:static lg:flex-row lg:bg-transparent lg:gap-8 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.name === 'Pages' ? (
                <>
                  <button
                    className="text-[16px] leading-6 text-white hover:text-[#FF9F0D] font-medium transition-colors"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 w-[200px] bg-black mt-2 rounded-md shadow-lg z-20">
                      {dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-[14px] text-white hover:text-[#FF9F0D] hover:bg-gray-800 transition-colors"
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
                  className="text-[16px] leading-6 text-white hover:text-[#FF9F0D] font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Search Bar and Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center border-2 border-[#FF9F0D] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white outline-none placeholder-gray-400"
            />
            <FiSearch className="h-5 w-5 text-[#FF9F0D] ml-2" />
          </div>
          <Link href="/ShoppingCart">
    <FiShoppingCart className="h-6 w-6 text-[#FF9F0D] cursor-pointer" />
</Link>   
     </div>
      </nav>
    </header>
  );
}

export default Navbar;
