import React from "react";
import Image from "next/legacy/image";

// Import your images
import dish1 from "../../../assests/dish1.png"; // Replace with the actual file name
import dish2 from "../../../assests/dish2.png"; // Replace with the actual file name
import dish3 from "../../../assests/dish3.png"; // Replace with the actual file name
import dish4 from "../../../assests/dish4.png"; // Replace with the actual file name


function FoodCategory() {
  return (
    <section
      className="bg-black text-white py-16 px-3 md:px-[80px] lg:px-[135px] relative"
      
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-[#FF9F0D] text-[20px] md:text-[24px] font-normal">
          Food Category
        </h2>
        <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Choose</span> Food Item
        </h1>
      </div>

      {/* Food Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Dish 1 with label */}
        <div className="relative">
          <Image
            src={dish1}
            alt="Fast Food Dish"
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute top-4 left-4 bg-[#FF9F0D] text-white px-4 py-1 text-sm rounded-full">
            Save 30%
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-1 text-sm rounded-full">
            Fast Food Dish
          </div>
        </div>

        {/* Dish 2 */}
        <div>
          <Image
            src={dish2}
            alt="Burger Dish"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Dish 3 */}
        <div>
          <Image
            src={dish3}
            alt="Salad Dish"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Dish 4 */}
        <div>
          <Image
            src={dish4}
            alt="Dessert Dish"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

     
    </section>
  );
}

export default FoodCategory;
