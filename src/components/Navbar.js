import React, { useState, useRef, useEffect } from 'react';
import logo from "./logo.jpeg";
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference for the dropdown menu
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Function to toggle the menu visibility
  const toggleMenu = (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    // Close the menu if the click is outside the menu or the hamburger button
    if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener on mount and remove on cleanup
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="w-16 h-12 bg-white flex items-center justify-center text-black font-bold">
            <img src={logo} alt="Professional consultant" className="w-[290px] h-full" />
          </div>

          {/* Navigation Links (for desktop view) */}
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
            <Link to="/" className="text-white hover:text-gray-300">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Hamburger Button (Now on the right side) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none ml-auto"
            ref={buttonRef}  // Attach the ref here
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden flex flex-col space-y-4 mt-4">
            <Link to="/" className="text-white hover:text-gray-300">
              HOME
            </Link>
            <Link to="/aboutus" className="text-white hover:text-gray-300">
              ABOUT US
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300">
              SERVICES
            </Link>
            <Link to="/" className="text-white hover:text-gray-300">
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
