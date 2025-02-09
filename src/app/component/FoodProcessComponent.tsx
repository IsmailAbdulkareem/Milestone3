import React from "react";
import Image from "next/legacy/image";
import FoodProcess from "../../../assests/FoodProcess.png"; // Adjust the path accordingly

const FoodProcessComponent: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src={FoodProcess} // Use the imported variable
        alt="Food Process Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Text Content */}
      <div className="relative z-20 p-8 rounded-md max-w-4xl text-center">
        <h4 className="text-orange-400 text-sm uppercase font-serif mb-2">
          Restaurant Active Process
        </h4>
        <h1 className="text-white text-4xl font-bold mb-4">
          We <span className="text-orange-400">Document Every Food</span> Bean
          Process until it is saved
        </h1>
        <p className="text-gray-300 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-black transition duration-300">
            Read More
          </button>
          <button className="px-6 py-3 flex items-center gap-2 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-black transition duration-300">
            <span className="material-icons">play_arrow</span> Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodProcessComponent;
