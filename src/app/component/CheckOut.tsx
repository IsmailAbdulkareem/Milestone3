import React from "react";
import Image from "next/legacy/image";
import chickentikka from "../../../assests/chickentikka.png"
const Checkout: React.FC = () => {
  return (
    <div
      className="relative mx-auto bg-white pt-10 text-black p-4"
      style={{
        maxWidth: "1320px",
        height: "auto",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Shipping Address */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4 text-black">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="First name"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <select
              className="p-2 bg-transparent border border-gray-400 text-gray-400 rounded-md w-full"
            >
              <option>Choose country</option>
            </select>
            <select
              className="p-2 bg-transparent border border-gray-400 text-gray-400 rounded-md w-full"
            >
              <option>Choose city</option>
            </select>
            <input
              type="text"
              placeholder="Zip code"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address 1"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="p-2 bg-transparent border border-gray-400 text-white rounded-md w-full"
            />
          </div>

          {/* Billing Address */}
          <div className="mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              Same as shipping address
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="w-30 mt-4 px-6 py-2 bg-[#FF9F0D] text-black rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
              Back to cart
            </button>
            <button className="w-30 mt-4 px-6 py-2 bg-[#FF9F0D] text-black rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
              Proceed to shipping &rarr;
            </button>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-96 p-4 bg-white border-t lg:border-t-0 lg:border-l border-gray-600">
          {/* Order Items */}
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src={chickentikka} // Replace with actual image path
                    alt="Chicken Tikka Kabab"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Chicken Tikka Kabab</h3>
                  <p className="text-sm text-gray-400">150 gm net</p>
                  <p className="text-sm font-bold">$50</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="border-t border-gray-600 mt-6 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>$130</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$54.76</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$432.65</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button 
  className="w-full mt-4 px-6 py-2 bg-[#FF9F0D] text-black rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
>
  Place an order &rarr;
</button>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
