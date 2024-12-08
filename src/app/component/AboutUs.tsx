import React from "react";
import Image from "next/image";

// Import images from your assets folder
import image1 from "../../../assests/image1.png"; 
import image2 from "../../../assests/image2.png"; 
import image3 from "../../../assests/image3.png"; 

function AboutUs() {
  return (
    <div className="width: 1320px;
height: 562px;
top: 1070px;
left: 300px;
gap: 0px;
opacity: 0px;
">
    <section className="bg-black text-white py-16 px-3 md:px-[80px] lg:px-[135px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-[#FF9F0D] text-[20px] md:text-[24px] font-normal">
            About us
          </h2>
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mt-2">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          {/* Features */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start">
              <span className="text-[#FF9F0D] text-lg mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF9F0D] text-lg mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF9F0D] text-lg mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="bg-[#FF9F0D] text-white px-6 py-2 md:px-8 md:py-3 rounded-full mt-6 hover:bg-yellow-800">
            Read More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Image */}
          <div className="col-span-2">
            <Image
              src={image1}
              alt="Food Image 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Bottom Images */}
          <div>
            <Image
              src={image2}
              alt="Food Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image3}
              alt="Food Image 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;
