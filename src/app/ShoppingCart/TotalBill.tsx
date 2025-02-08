import React from "react";

const TotalBill = ({ cart }: { cart: any[] }) => {
  // 🛒 Cart subtotal calculate karna
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = 0; // Shipping charge fix rakha (change if needed)
  const totalAmount = cartSubtotal + shippingCharge;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
      {/* Left Side: Coupon Code */}
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-2">Coupon Code</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Here code"
            className="border border-gray-400 px-4 py-2 w-full rounded-l-md"
          />
          <button className="bg-[#FFA500] text-white px-4 py-2 rounded-r-md">Apply</button>
        </div>
      </div>

      {/* Right Side: Total Bill */}
      <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Total Bill</h2>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Cart Subtotal</span>
            <span className="font-bold">${cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Shipping Charge</span>
            <span className="font-bold">${shippingCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold border-t pt-4">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-[#FFA500] text-white mt-4 py-3 rounded-md flex justify-center items-center">
          Proceed to Checkout ↗
        </button>
      </div>
    </div>
  );
};

export default TotalBill;
