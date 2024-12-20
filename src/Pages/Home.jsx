import React from "react";
import { restaurants } from "../data";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const Home = () => {
  return (
    <div className="p-6 bg-[#F8F9FA] min-h-screen">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <p className="text-xl text-[#FD661D] font-semibold">
          Welcome to Deox Foods
        </p>
      </div>

      {/* Images depicting online restaurant */}
      <div className="flex justify-center gap-4 mb-8">
        <img
          src={image1}
          alt="Restaurant 1"
          className="w-80 h-52 object-cover rounded-lg shadow-md"
        />
        <img
          src={image2}
          alt="Restaurant 2"
          className="w-80 h-52 object-cover rounded-lg shadow-md"
        />
        {/* <img
          src="./assets/restaurant3.jpg"
          alt="Restaurant 3"
          className="w-80 h-52 object-cover rounded-lg shadow-md"
        /> */}
      </div>

      {/* Available Restaurants */}
      <h2 className="text-3xl font-bold mb-8 text-center text-[#2C3E50]">Available Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#2C3E50]">{restaurant.name}</h2>
              <p className="text-sm text-gray-600">{restaurant.description}</p>
              <p className="text-sm">
                Rating: <span className="font-medium">{restaurant.rating}⭐</span>
              </p>
              <p className="text-sm">
                Location: <span className="font-medium">{restaurant.location}</span>
              </p>
              {restaurant.name === "FRUITS PAGE" ? (
                <button
                  onClick={() => (window.location.href = "/fruits")}
                  className="mt-4 bg-[#FD661D] text-white px-4 py-2 rounded-md hover:bg-[#e85c1a]"
                >
                  Order Now
                </button>
              ) : (
                <button className="mt-4 bg-[#FD661D] text-white px-4 py-2 rounded-md hover:bg-[#e85c1a]">
                  Order Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
