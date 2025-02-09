import React from "react";
import Image from "next/legacy/image";
import logo1 from "../../../assests/logo1.png";
import logo2 from "../../../assests/logo2.png";
import logo3 from "../../../assests/logo3.png";
import logo4 from "../../../assests/logo4.png";
import logo5 from "../../../assests/logo5.png";
import logo6 from "../../../assests/logo6.png";

const PartnersAndClients = () => {
  return (
    <div className="relative bg-white flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Partners & Clients
      </h2>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        We work with the best people
      </h1>
      <div className="flex gap-6 justify-center">
        {/* Logo 1 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo1}
            alt="Partner Logo 1"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {/* Logo 2 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo2}
            alt="Partner Logo 2"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {/* Logo 3 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo3}
            alt="Partner Logo 3"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {/* Logo 4 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo4}
            alt="Partner Logo 4"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {/* Logo 5 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo5}
            alt="Partner Logo 5"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {/* Logo 6 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <Image
            src={logo6}
            alt="Partner Logo 6"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersAndClients;
