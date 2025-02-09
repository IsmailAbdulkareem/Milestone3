import React from "react";
import Image from "next/legacy/image";

// Example image imports
import tacoDish from "../../../assests/tacoDish.png";
import dish2 from "../../../assests/dish2.png";
import burgerDish from "../../../assests/burgerDish.png";
import burger2 from "../../../assests/burger2.png";
import burger3 from "../../../assests/burger3.png";
import pizzaDish from "../../../assests/pizzaDish.png";

export const WhyChooseUs = () => {
  return (
    <div className="bg-black py-16 px-4 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={tacoDish}
            alt="TacoDish"
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={dish2}
            alt="Burger"
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={burgerDish}
            alt="Chicken"
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={burger2}
            alt="Double Burger"
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={burger3}
            alt="Fries"
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={pizzaDish}
            alt="Salad"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="text-white flex flex-col justify-center">
          <p className="text-orange-400 text-xl font-semibold mb-4">
            Why Choose us
          </p>
          <h1 className="text-5xl font-bold leading-snug">
            Extra Ordinary Taste <br /> And Experienced
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>

          {/* Icons Section */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-orange-400 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A3 3 0 017 17h10a3 3 0 013 3v2H4v-2a3 3 0 011.121-2.196z"
                  />
                </svg>
              </div>
              <p className="text-white mt-2">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-400 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.326 0-2.417-.597-3-1.5C8.417 6.597 7.326 6 6 6a3 3 0 000 6c1.326 0 2.417-.597 3-1.5 1.083 1.5 2.174 1.5 3 1.5 1.326 0 2.417-.597 3-1.5 1.083 1.5 2.174 1.5 3 1.5a3 3 0 100-6c-1.326 0-2.417.597-3 1.5C14.417 6.597 13.326 6 12 6z"
                  />
                </svg>
              </div>
              <p className="text-white mt-2">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-400 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h1v1H3v-1zm3 0h1v1H6v-1zm3 0h1v1H9v-1zm3 0h1v1h-1v-1zm3 0h1v1h-1v-1zm3 0h1v1h-1v-1zm-9-2h1v1H9V8zm3 0h1v1h-1V8zm3 0h1v1h-1V8z"
                  />
                </svg>
              </div>
              <p className="text-white mt-2">Dinner</p>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="mt-8">
            <div className="bg-orange-400 text-white p-4 rounded-lg text-center">
              <h1 className="text-4xl font-bold">30+</h1>
              <p>Years of Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
