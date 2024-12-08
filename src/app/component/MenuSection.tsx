import React from "react";
import Image from "next/image";
import bhendi from "../../../assests/bhendi.png";
import GlowCheese from "../../../assests/GlowCheese.png";
import FreshBread from "../../../assests/FreshBread.png";
import FreshBreakFast from "../../../assests/FreshBreakfast.png";
import ItalianPizza from "../../../assests/ItalianPizza.png";
import SlicceBeef from "../../../assests/SlicceBeef.png";
import MushroomPizza from "../../../assests/MushroomPizza.png";
import LettuceLeaf from "../../../assests/LettuceLeaf.png";
import MildButter from "../../../assests/MildButter.png";

const MenuSection = () => {
  return (
    <div className="bg-black py-16 px-4 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-xl font-semibold">Choose & pick</p>
        <h1 className="text-5xl text-white font-bold">From Our Menu</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-8 text-white text-lg mb-12">
        <button className="text-orange-400 font-semibold">Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
        <button>Dessert</button>
        <button>Drink</button>
        <button>Snack</button>
        <button>Soups</button>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* First Column: Large Image */}
        <div className="flex justify-center">
          <Image
            src={bhendi}
            alt="Large Dish"
            className="rounded-lg object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Second Column: First Food List */}
        <div className="grid grid-cols-1 gap-8">
          {/* Item 1 */}
          <div className="flex items-center">
            <Image
              src={LettuceLeaf}
              alt="Lettuce Leaf"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Lettuce Leaf</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center">
            <Image
              src={FreshBreakFast}
              alt="Fresh Breakfast"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Fresh Breakfast</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">14.5$</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center">
            <Image
              src={MildButter}
              alt="Mild Butter"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Mild Butter</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center">
            <Image
              src={FreshBread}
              alt="Fresh Bread"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Fresh Bread</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>
        </div>

        {/* Third Column: Second Food List */}
        <div className="grid grid-cols-1 gap-8">
          {/* Item 5 */}
          <div className="flex items-center">
            <Image
              src={GlowCheese}
              alt="Glow Cheese"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Glow Cheese</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-center">
            <Image
              src={ItalianPizza}
              alt="Italian Pizza"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Italian Pizza</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">14.5$</p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="flex items-center">
            <Image
              src={SlicceBeef}
              alt="Slicce Beef"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Slicce Beef</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>

          {/* Item 8 */}
          <div className="flex items-center">
            <Image
              src={MushroomPizza}
              alt="Mushroom Pizza"
              className="rounded-lg object-cover"
              width={100}
              height={100}
            />
            <div className="ml-4 text-white">
              <h3 className="font-bold text-lg">Mushroom Pizza</h3>
              <p className="text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
              <p className="text-orange-400 font-bold mt-1">12.5$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
