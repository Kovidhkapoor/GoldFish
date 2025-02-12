import React from "react";
import img1 from "./img1.jpg";

const Home = () => {
  return (
    <main className="min-h-[600px] mt-12 bg-black text-white flex flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="w-full md:w-2/3 relative">
        <img src={img1} alt="Professional consultant" className="w-full h-full grayscale  " />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-8 md:px-16 bg-[#393939]">
        <h1 className="text-3xl md:text-4xl font-bold">H 6H6</h1>
        <div className="w-16 h-1 bg-gray-400 my-4"></div>

        <p className="text-base md:text-lg leading-relaxed">
          At <span className="font-semibold">GOLD FISH ENTERPRISES</span>, we provide expert consulting services to help 
          businesses navigate challenges, optimize strategies, and achieve sustainable growth. Our team of professionals 
          delivers tailored solutions, ensuring measurable success and long-term value for your organization.
        </p>

        <p className="text-base md:text-lg leading-relaxed mt-4">
          Our team of experienced professionals partners closely with clients to understand their unique needs and develop 
          customized strategies that deliver measurable results. Whether you're improving efficiency or expanding your reach, 
          we are your trusted partner in achieving long-term success.
        </p>

        <button className="mt-6 bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-lg hover:bg-gray-300 transition-all">
          read more
        </button>
      </div>
    </main>
  );
};

export default Home;
