import React from "react";
import Image from "next/legacy/image";
import Chef1 from "../../../assests/Chef1.png";
import Chef2 from "../../../assests/Chef2.png";
import Chef3 from "../../../assests/Chef3.png";
import Chef4 from "../../../assests/Chef4.png";

//import Herb from "../../../assets/Herb.png"; // Replace with actual herb image

const MeetOurChef = () => {
  return (
    <div className="bg-black py-16 px-4 lg:px-20 width: 1764px;height: 657px;top: 4562px;left: -144px;gap: 0px;border: 1px 0px 0px 0px;opacity: 0px;">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-xl font-semibold">Chefs</p>
        <h1 className="text-5xl text-white font-bold"><span className="text-orange-400">Me</span>et Our Chef</h1>
      </div>

      {/* Chef Section */}
     <div className="relative">
     

        {/* Chef Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chef 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Chef1}
              alt="Chef D.Estwood"
              className="w-full object-cover"
              width={300}
              height={300}
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">D.Estwood</h3>
              <p className="text-gray-600">Chief Chef</p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Chef2}
              alt="Chef D.Scoriesh"
              className="w-full object-cover"
              width={300}
              height={300}
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">D.Scoriesh</h3>
              <p className="text-gray-600">Assistant Chef</p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Chef3}
              alt="Chef M.William"
              className="w-full object-cover"
              width={300}
              height={300}
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">M.William</h3>
              <p className="text-gray-600">Advertising Chef</p>
            </div>
          </div>

          {/* Chef 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Chef4}
              alt="Chef W.Readfroad"
              className="w-full object-cover"
              width={300}
              height={300}
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">W.Readfroad</h3>
              <p className="text-gray-600">Chef</p>
            </div>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-500">
          See More
        </button>
      </div>
    </div>
  );
};

export default MeetOurChef;
