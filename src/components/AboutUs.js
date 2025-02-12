import React, { useRef, useState } from "react";
import video from "./vidoe.mp4";
import abt from "./abt.jpg";

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Default muted

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-white">
      {/* Video Section */}
      <div className="w-full h-[400px] md:h-[600px] mt-14 relative">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted={isMuted} // Ensure it's muted by default
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Gold Fish Enterprises
          </h1>
        </div>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 bg-gray-800 text-white p-1 text-xs rounded-sm shadow-md hover:bg-gray-700 transition"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        <p className="text-gray-600 mt-4">
          Gold Fish Enterprises is a leading consulting firm specializing in <strong>business strategy</strong> and <strong>construction consulting</strong>. Our mission is to help businesses and projects thrive with expert guidance, innovative solutions, and a commitment to excellence.
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Empower businesses & construction projects with expert consulting, ensuring efficiency, growth, and long-term success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To be the trusted partner for companies worldwide, transforming ideas into profitable, sustainable ventures.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <p className="text-gray-600 mt-2">
              Innovation, Integrity, Excellence, and Collaboration are the core pillars that drive our consulting approach.
            </p>
          </div>
        </div>
      </div>

      {/* New Section: Image Left, Text Right */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={abt}
            alt="About Gold Fish Enterprises"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold text-gray-900">About Gold Fish Enterprises</h3>
          <p className="text-gray-600 mt-6 leading-relaxed">
            At <strong>Gold Fish Enterprises</strong>, we pride ourselves on being a dynamic consulting firm
            that specializes in business strategy and construction consulting. Our expertise lies in 
            offering tailor-made solutions that help businesses and projects flourish in an ever-evolving 
            market. We understand that success isn't just about having a vision—it's about having the 
            right strategies, resources, and execution plans to bring that vision to life.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            With a team of experienced professionals, we take a deep dive into understanding your 
            business needs, identifying growth opportunities, and optimizing processes. Whether it's 
            managing large-scale construction projects, formulating market penetration strategies, or 
            improving operational efficiency, we bring a wealth of industry knowledge to the table.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our journey is built on a strong foundation of innovation, integrity, and excellence. We 
            don't just provide consulting services—we act as strategic partners who are committed to 
            guiding our clients towards long-term success. With every project we undertake, our goal 
            is to drive sustainable growth, enhance profitability, and create lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
