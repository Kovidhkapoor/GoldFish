import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, } from "lucide-react";
import icons from "./icons.svg";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Description */}
          <div>
            <p className="text-gray-400 mb-4">
              Dolor sit amet consect turadipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo elit luctus.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-300"><Facebook /></Link>
              <Link to="#" className="hover:text-gray-300"><Twitter /></Link>
              <Link to="#" className="hover:text-gray-300"><Youtube /></Link>
              {/* WhatsApp Icon */}
              <a 
                href="https://wa.me/919876543210" // Replace with actual WhatsApp number
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 "
              >
           <img src={icons} style={{ width: "24px", height: "24px" }} alt="WhatsApp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="#" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="#" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-300">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400"><span className="font-bold">📍</span> KLLG St, No.99, Pku City, ID 28289</p>
            <p className="text-gray-400"><span className="font-bold">📞</span> 0761-8523-398</p>
            <p className="text-gray-400"><span className="font-bold">📧</span> hello@domainsite.com</p>
            <p className="text-gray-400"><span className="font-bold">🌍</span> www.domainsite.com</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Fusce elementum pretium odio eu hendrerit. Donec eu malesuada libero.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-800 text-white rounded-md mb-2 focus:outline-none"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
