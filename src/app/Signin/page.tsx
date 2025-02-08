"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<{ name: string; image: string } | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    // Load user data from Local Storage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    const newUser = { name, image: image || "" }; // Ensuring image is always a string
  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
  toast.success(`Welcome, ${name}!`);
};

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully!");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
        localStorage.setItem("userImage", imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Toaster />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {user ? (
          <div className="text-center">
            {user.image && (
              <img
                src={user.image}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold">Welcome, {user.name}!</h2>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-center text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-center text-sm text-gray-500 mb-6">
              Home › Sign Up
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Profile Image
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
