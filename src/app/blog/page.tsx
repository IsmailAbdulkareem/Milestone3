import BlogList from "../component/BlogList"
import Image from "next/legacy/image";
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import React from 'react';


const Page = () => {
  return (
    <div>
   <BlogList />
      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-4 md:p-20 gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {[
            '10 Reasons To Do A Digital Detox Challenge',
            'Traditional Soft Pretzels with Sweet Beer Cheese',
            'The Ultimate Hangover Burger: Egg in a Hole Burger',
            'My Favorite Easy Black Pizza Toast Recipe',
          ].map((title, index) => (
            <div className="mb-12" key={index}>
              <Image
                src={`/pictures/blogimg${index + 1}.png`}
                alt="blog"
                width={500}
                height={400}
                className="w-full md:w-[500px] cursor-pointer"
              />

              
              <h1 className="font-bold text-[24px] leading-8 text-[#333333] mt-4">
                {title}
              </h1>
              <p className="text-[#4F4F4F] font-normal text-[16px] mt-8">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </p>
              <Link href="/BlogDetails">
                <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded mt-4 block mx-auto md:mx-0">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>



        {/* Right Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          {/* Search Box */}
          <div className="text-[#BDBDBD] hidden md:flex relative items-center w-full bg-transparent overflow-hidden border border-[#FF9F0D] mb-6">
            <input
              type="text"
              placeholder="Search Your Keyword.."
              className="w-full py-2 px-4 bg-transparent text-[#BDBDBD] focus:outline-none"
            />
            <FiSearch className="absolute right-0 bg-[#FF9F0D] text-white text-5xl p-4 cursor-pointer" />
          </div>

          {/* Profile Card */}
          <div className="flex flex-col items-center justify-center border border-gray-300 p-6  bg-white shadow-md w-full">
            <Image
              src="/pictures/blogimages.png"
              alt="img"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h1 className="mt-4 text-xl font-bold text-gray-800">Prince Miyako</h1>
            <p className="text-gray-600">Blogger/Photographer</p>
            <div className="flex flex-row items-center space-x-1 mt-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index} className="text-[#FF9F0D] text-base">
                    ★
                  </span>
                ))}
            </div>
            <span className="mt-1 text-[#333333]">(1 Review)</span>
            <p className="mt-3 text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
            </p>
            <div className="inline-flex justify-center space-x-3 mt-4">
              {/* Social Icons */}
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ml-3 text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
            </div>
          </div>

 {/* Recent Post */}
<div className="border border-gray-300 p-6  bg-white shadow-md w-full max-w-md mx-auto mt-8">
  <h2 className="text-lg font-bold leading-8 tracking-wide text-gray-800 mb-4 hover:text-[#FF9F0D] cursor-pointer">
    Recent Post
  </h2>
  <div className="space-y-4">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="flex items-center space-x-4 cursor-pointer">
        <Image
          src="/pictures/blogimages1.png"
          alt="recentpost"
          width={80}
          height={60}
          className="rounded object-cover"
        />
        <div>
          <p className="text-sm text-[#4F4F4F]">
            <span className="block text-gray-500">June 22, 2024</span>
            Lorem ipsum dolor sit cing elit, sed do.
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Filter By Menu */}
<div className="border border-gray-300 p-6  bg-white shadow-md w-full max-w-md mx-auto mt-8">
  <h2 className="text-lg font-bold leading-8 tracking-wide text-gray-800 mb-4 hover:text-[#FF9F0D] cursor-pointer">
    Filter By Menu
  </h2>
  <div className="space-y-4 font-bold text-[16px]">
    {[
      { name: "Chicken Fry", number: 26 },
      { name: "Burger Food", number: 46 },
      { name: "Pizza", number: 16 },
      { name: "Fresh Fruits", number: 36 },
      { name: "Vegetables", number: 16 },
      { name: "Desserts", number: 46 },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between space-x-4 cursor-pointer"
      >
        <div className="flex items-center space-x-4">
          <Image
            src="/pictures/blogimages2.png"
            alt={item.name}
            width={80}
            height={60}
            className="rounded object-cover"
          />
          
          <p className="text-sm text-[#4F4F4F]">{item.name}</p>
        </div>
        <span className="text-gray-500 text-sm">{item.number}</span>
      </div>
    ))}
  </div>
</div>

{/* Popular Tags */}
<div className="border border-gray-300 p-6  bg-white shadow-md w-full max-w-md mx-auto mt-8">
  <h1 className="text-lg font-bold leading-8 tracking-wide text-gray-800 mb-4">
    Popular Tags
  </h1>
  <div className="flex flex-wrap gap-2">
    {[
      "Sandwich",
      "Tikka",
      "BBQ",
      "Restaurant",
      "Shawarma",
      "Health",
      "Fastfood",
      "Food",
      "Pizza",
      "Burger",
      "Chicken",
    ].map((tag, index) => (
      <div
        key={index}
        className="bg-gray-100 hover:bg-[#FF9F0D] hover:text-white transition-colors text-gray-800 text-sm px-3 py-1 rounded-full shadow cursor-pointer"
      >
        {tag}
      </div>
    ))}
  </div>
</div>


   {/* Photo Gallery */}
<div className="border border-gray-300 p-6  bg-white shadow-md w-full max-w-md mx-auto mt-8">
  <h1 className="text-lg font-bold leading-8 tracking-wide text-gray-800 mb-4">
    Photo Gallery
  </h1>
  <div className="grid grid-cols-3 gap-4 cursor-pointer">
    {[
      "/pictures/photogallery1.png",
      "/pictures/photogallery2.png",
      "/pictures/photogallery3.png",
      "/pictures/photogallery4.png",
      "/pictures/photogallery5.png",
      "/pictures/photogallery2.png",
    ].map((src, index) => (
      <div key={index} className="overflow-hidden rounded shadow">
        <Image
          src={src}
          alt={`gallery-${index + 1}`}
          width={100}
          height={90}
          className="rounded object-cover w-full h-auto hover:scale-105 transition-transform duration-200"
        />
      </div>
    ))}
  </div>
</div>






{/* Follow Us */}
<div className="border border-gray-300 p-6  bg-white shadow-md w-full max-w-md mx-auto mt-8">
  <h1 className="text-lg font-bold leading-8 tracking-wide text-gray-800 mb-4">
    Follow Us
  </h1>
  <div className="flex justify-around items-center">
    {/* Social Icons */}
    <a
      className="text-[#333333] bg-gray-100 cursor-pointer hover:text-[#FF9F0D] transition duration-300"
      aria-label="Facebook"
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    </a>
    <a
      className="text-[#333333]  bg-gray-100 cursor-pointer hover:text-[#FF9F0D] transition duration-300"
      aria-label="Twitter"
    >
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    </a>
    <a
      className="text-[#333333]  bg-gray-100 cursor-pointer hover:text-[#FF9F0D] transition duration-300"
      aria-label="Instagram"
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    </a>
    <a
      className="text-[#333333]  bg-gray-100 cursor-pointer hover:text-[#FF9F0D] transition duration-300"
      aria-label="LinkedIn"
    >
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0}
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        />
        <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
    </a>
  </div>
</div>

  </div>
      </div>
    </div>
  );
};

export default Page;
