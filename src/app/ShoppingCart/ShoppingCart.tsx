"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  // 🛒 Cart subtotal calculation
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = 0; // Fixed shipping charge
  const totalAmount = cartSubtotal + shippingCharge;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id || `${item.name}-${item.price}`} className="border-b">
                  <td className="py-4 flex items-center">
                    <img
                      src={item.image || 'default-image.jpg'}
                      alt={item.name || 'Unnamed product'}
                      className="w-12 h-12 object-cover mr-4"
                    />
                    <span>{item.name || 'Unknown Product'}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="px-2 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500">
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Bill Section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between mt-8">
            {/* Left Side: Coupon Code */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <h2 className="text-xl font-bold mb-2">Coupon Code</h2>
              <p className="text-gray-600 mb-4">Apply a discount code for extra savings on your order.</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="border border-gray-400 px-4 py-2 w-full rounded-l-md"
                />
                <button className="bg-[#FFA500] text-white px-4 py-2 rounded-r-md">Apply</button>
              </div>
            </div>

            {/* Right Side: Total Bill */}
            <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg shadow-md">
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
              <button
                onClick={() => router.push('/CheckOut')}
                className="w-full bg-[#FFA500] text-white mt-4 py-3 rounded-md flex justify-center items-center"
              >
                Proceed to Checkout ↗
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
