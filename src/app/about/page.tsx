import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const page = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 py-10 gap-10">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center md:w-1/2 gap-6">
          {/* First Image */}
          <Image
            src="/pictures/aboutus1.png"
            alt="img"
            width={336}
            height={536}
          />
          {/* Two Images in Column */}
          <div className="flex flex-col gap-6">
            <Image
              src="/pictures/aboutus2.png"
              alt="img"
              width={309}
              height={271}
            />
            <Image
              src="/pictures/aboutus3.png"
              alt="img"
              width={309}
              height={382}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 my-20">
          <h1
            className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D]`}
          >
            About Us
          </h1>
          <div className="flex mt-4">
            <span className="text-[#333333] font-bold text-[60px] leading-[68px]">
              Food is an important
            </span>
            <span className="font-bold text-[60px] leading-[68px] text-[#333333]">
            </span>
          </div>
          <p className="font-bold text-[60px] leading-[68px] text-[#333333]">
            part Of a balanced Diet
          </p>
          <p className="text-[#333333] font-normal text-[16px] leading-6 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <button className="w-[190px] h-[60px] mt-8 bg-[#FF9F0D] text-white rounded-3xl">
            Show More
          </button>
        </div>





      </div>




    <div className="bg-black/100 text-center py-12">
      {/* Title Section */}
      <h1
        className={`${greatVibes.className} font-normal text-[24px] md:text-[32px] leading-8 md:leading-10 text-[#FF9F0D]`}
      >
      
      </h1>
      <div className="flex flex-wrap justify-center mt-4">
        <span className="text-[#FF9F0D] font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px]">
        
        </span>
        <span className="font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px] text-[#FFFFFF]">
          Why Choose Us
        </span>
        <br/>
        <p className='mt-8 text-white font-normal text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
      </div>
      <br/>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 cursor-pointer">
        <Image
          src="/pictures/aboutus4.png"
          alt="Chef 1"
          width={1280}
          height={386}
        />
      
      
      </div>
    </div>
    </div>
  );
};

export default page;
