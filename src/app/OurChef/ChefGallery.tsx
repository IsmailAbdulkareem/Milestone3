"use client";
import { useEffect, useState } from "react";
import client, { urlFor } from "../../sanity/sanity";

// Define a type for Chef data
interface Chef {
  _id: string;
  name: string;
  position: string;
  specialty: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function ChefList() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const data = await client.fetch(`*[_type == "chef"]`);
      setChefs(data);
    };
    fetchChefs();
  }, []);

  return (
    <div className="bg-black py-10">
      <h1 className="text-white text-center text-3xl font-bold mb-8">
        Meet Our Chefs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            className="bg-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={urlFor(chef.image).url()}
              alt={chef.name}
              className="w-auto h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-black">{chef.name}</h2>
              <p className="text-gray-700 text-sm">{chef.position}</p>
              <p className="text-black font-bold mt-2">
                Specialty: {chef.specialty}
              </p>
              <p className="text-gray-500 text-sm mt-1">{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
