"use client";

import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity/sanity";

// Define the type for a food item
interface Food {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  available: boolean;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);

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
          <div
            key={food._id}
            className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300"
          >
            <img
              src={urlFor(food.image).url()}
              alt={food.name}
              className="w-auto h-auto  object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-black">{food.name}</h2>
              <p className="text-gray-700 text-sm">{food.description}</p>
              <p className="text-black font-bold mt-2">Price: ${food.price}</p>
              <p className="text-gray-500 text-sm">
                Original Price: ${food.originalPrice}
              </p>
              <p className="text-green-600 text-sm mt-1">
                Available: {food.available ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
