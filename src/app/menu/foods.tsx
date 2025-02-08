"use client";

import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity/sanity";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";

interface Food {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await client.fetch<Food[]>(`*[_type == "food"]`);
      setFoods(data);
    };
    fetchFoods();
  }, []);

  return (
    <div className="bg-black py-10">
      <h1 className="text-white text-center text-3xl font-bold mb-8">Choose Food Item</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {foods.map((food) => (
          <div key={food._id} className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300">
            <img src={urlFor(food.image).url()} alt={food.name} className="w-auto h-auto object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-black">{food.name}</h2>
              <p className="text-black font-bold mt-2">Price: ${food.price}</p>
              <button
                onClick={() => {
                  addToCart({ _id: food._id, name: food.name, price: food.price, quantity: 1, image: urlFor(food.image).url() });
                  toast.success(`${food.name} added to cart!`);
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
