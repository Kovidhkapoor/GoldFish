import React from "react";
import human from "./human.jpeg"; // Replace with actual image URL

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#898989] to-[#393939] text-white py-12 px-4 md:px-12">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center py-8 gap-6">
        <div>
          <h2 className="text-4xl font-bold">100+</h2>
          <p className="text-sm">HAPPY CUSTOMERS</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">7 YEARS</h2>
          <p className="text-sm">WORK EXPERIENCE</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">35+</h2>
          <p className="text-sm">TOTAL WORKERS</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">CONTACT NOW</h2>
        <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-full animate-slide-down">
        
          <h2 className="text-center text-xl font-semibold text-black mb-6">
            CONTACT NOW
          </h2>
          

          <div className="space-y-4">
            {/* NAME Input */}
            <div className="relative">
              <label className="block text-black text-xs mb-1">NAME:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-200 text-sm"
              />
            </div>

            {/* PHONE NO Input */}
            <div className="relative">
              <label className="block text-black text-xs mb-1">PHONE NO:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full bg-transparent p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-200 text-sm"
              />
            </div>

            {/* ADDRESS Input */}
            <div className="relative">
              <label className="block text-black text-xs mb-1">ADDRESS:</label>
              <textarea
                placeholder="Enter your address"
                className="w-full bg-transparent p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-200 text-sm"
                rows="3"
              ></textarea>
            </div>

            {/* CONTACT Button */}
            {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all text-sm w-full">
              CONTACT
            </button> */}
            <a
      href="https://wa.me/919876543210" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all text-sm w-full mt-2"
    >
      Contact via WhatsApp
    </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={human} // Replace with actual image URL
            alt="Professional"
            className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
