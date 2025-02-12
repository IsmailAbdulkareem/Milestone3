"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.getItem("theme") || "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Foodtuck
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/about" className="text-gray-900 dark:text-white">
              About
            </a>
            <a href="/signup" className="text-gray-900 dark:text-white">
              Signup
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-white ml-4"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <a href="/about" className="block px-4 py-2 text-gray-900 dark:text-white">
            About
          </a>
          <a href="/signup" className="block px-4 py-2 text-gray-900 dark:text-white">
            Signup
          </a>
        </div>
      )}
    </nav>
  );
}
