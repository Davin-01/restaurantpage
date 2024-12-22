import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#15181f] text-white p-4 relative">
      {/* Navbar content */}
      <img src="/assets/images/deox.png" alt="Deox Logo" className="w-12 h-12" />
      <h1 className="relative top-4 left-6 text-3xl font-bold text-[#FD661D]">Deox Foods</h1>

      {/* Navigation links */}
      <ul className="flex justify-center space-x-8 mt-4">
        <li>
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/fruits" className="hover:underline text-lg">
            Fruits
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
