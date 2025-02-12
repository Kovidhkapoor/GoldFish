import React from 'react';
import logo from "./logo.jpeg";
import { Link } from 'react-router-dom';
import ContactSection from './ContactSection';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="w-16 h-12 bg-white flex items-center justify-center text-black font-bold">
          <img src={logo} alt="Professional consultant" className="w-[290px] h-full " />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 font-bold hover:text-white">
              HOME
            </Link>
            <Link to="/aboutus" className="text-white hover:text-gray-300">
              ABOUT US
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300">
              SERVICES
            </Link>
            <Link to = "/" className="text-white hover:text-gray-300">
              CONTACT US
            </Link>
          </div>

          {/* Sign In Button */}
          <button className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-400 transition duration-200">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
}
