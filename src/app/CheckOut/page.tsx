"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckOut() {
  const { cart } = useCart();
  const router = useRouter();

  // 🛒 Cart subtotal calculation
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = 0;
  const discount = cartSubtotal * 0.25; // 25% discount
  const tax = cartSubtotal * 0.07; // 7% tax
  const totalAmount = cartSubtotal - discount + tax + shippingCharge;

  // 🌟 State for user input
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    zip: "",
  });

  // Handles input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (!userData.firstName || !userData.email || !userData.phone || !userData.address1) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const user = {
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      phone: userData.phone,
      address: `${userData.address1}, ${userData.address2 ? userData.address2 + ", " : ""}${userData.city}, ${userData.country} - ${userData.zip}`,
    };

    const orderDetails = cart.map((item) => ({
      foodName: item.name, // ✅ Using food name instead of ID
      quantity: item.quantity,
      price: item.price,
    }));

    try {
      const response = await fetch("/api/placeOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, orderDetails, totalAmount }),  // ✅ Corrected
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Order placed successfully!");
        setTimeout(() => {
          router.push("/order-success");
        }, 2000);
      } else {
        toast.error(data.error || "Order failed!");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <ToastContainer />

      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Shipping Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" type="text" placeholder="First Name" className="border px-4 py-2 rounded-md" onChange={handleChange} required />
            <input name="lastName" type="text" placeholder="Last Name" className="border px-4 py-2 rounded-md" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email Address" className="border px-4 py-2 rounded-md" onChange={handleChange} required />
            <input name="phone" type="text" placeholder="Phone Number" className="border px-4 py-2 rounded-md" onChange={handleChange} required />
            <input name="address1" type="text" placeholder="Address 1" className="border px-4 py-2 rounded-md" onChange={handleChange} required />
            <input name="address2" type="text" placeholder="Address 2 (Optional)" className="border px-4 py-2 rounded-md" onChange={handleChange} />
            <select name="country" className="border px-4 py-2 rounded-md" onChange={handleChange} required>
              <option>Choose Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
            <select name="city" className="border px-4 py-2 rounded-md" onChange={handleChange} required>
              <option>Choose City</option>
              <option value="New York">New York</option>
              <option value="Toronto">Toronto</option>
              <option value="London">London</option>
            </select>
            <input name="zip" type="text" placeholder="Zip Code" className="border px-4 py-2 rounded-md" onChange={handleChange} />
          </form>

          <button className="mt-6 bg-[#FFA500] text-white w-full py-3 rounded-md">
            Proceed to Shipping →
          </button>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Your Order</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className="flex items-center border-b py-4">
                  <img src={item.image || "/default-image.jpg"} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Price Breakdown */}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between"><span>Subtotal</span><span className="font-bold">${cartSubtotal.toFixed(2)}</span></div>
                <div className="flex justify-between mt-2"><span>Shipping</span><span className="font-bold">Free</span></div>
                <div className="flex justify-between mt-2"><span>Discount</span><span className="font-bold">- ${discount.toFixed(2)}</span></div>
                <div className="flex justify-between mt-2"><span>Tax</span><span className="font-bold">${tax.toFixed(2)}</span></div>
                <div className="flex justify-between mt-4 text-lg font-bold border-t pt-4"><span>Total</span><span>${totalAmount.toFixed(2)}</span></div>
              </div>

              <button onClick={handlePlaceOrder} className="w-full bg-[#FFA500] text-white mt-4 py-3 rounded-md">
                Place an Order →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
