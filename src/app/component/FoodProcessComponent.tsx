import React from "react";
const FoodProcess = require('../../../assests/FoodProcess.png');
const FoodProcessComponent: React.FC = () => {
  return (
    <div
    className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white bg-b"
    style={{
      backgroundImage: `url(${FoodProcess})`, // Use the imported image here
    }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-4xl text-center">
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
