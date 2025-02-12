import React from "react";
import serviceimg1 from "./serviceimg1.jpg";
import construct from "./construct.jpg";
import business from "./business.jpg";
import ServicesSteps from "./ServicesSteps";

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-[80px] px-6">
      <div className="max-w-6xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section: Process Steps */}
        <div>
          <h4 className="text-blue-300 uppercase font-semibold">
            Four Steps to Process Improvement
          </h4>
          <h2 className="text-4xl font-bold my-4">Ready to get started?</h2>

          {/* Step 1 */}
          <div className="flex items-start gap-4 my-6">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
              01
            </span>
            <div>
              <h3 className="text-xl font-semibold">Business System Roadmap (1-2 Days)</h3>
              <p className="text-gray-300">
                The Business System Roadmap Workshop breaks down the business model into a process architecture, 
                identifies key personnel, and builds a structured project plan.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 my-6">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
              02
            </span>
            <div>
              <h3 className="text-xl font-semibold">Develop Perigon® Playbooks (8-12 Weeks)</h3>
              <p className="text-gray-300">
                Teams create process maps, align workflows, analyze improvements, and define Quick Wins to 
                build a solid 90-day process improvement plan.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 my-6">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
              03
            </span>
            <div>
              <h3 className="text-xl font-semibold">System Deployment (3-6 Months)</h3>
              <p className="text-gray-300">
                Full-scale deployment of the improved system, ensuring smooth transitions, staff training, and 
                optimization for peak performance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="">
          <img src= {serviceimg1} alt="Business Strategy Meeting" className="rounded-lg shadow-lg"/>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-gray-800 text-black min-h-screen p-">
      
      <h1 className="text-4xl font-bold text-center mb-10 animate-fade-in">
        Our Services
      </h1>
      
      {/* Business Consulting Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-left">
            <h2 className="text-3xl font-semibold mb-4">Business Consulting</h2>
            <p className="text-lg leading-relaxed">
              Our **US-based** consulting firm provides **top-tier business consulting services**
              to help entrepreneurs, startups, and enterprises **strategize, grow, and optimize**
              their business operations. From **market research** to **financial planning**, our 
              experts ensure your success.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Market Analysis & Business Strategy</li>
              <li>Financial Planning & Risk Management</li>
              <li>Brand Development & Digital Transformation</li>
              <li>Operational Efficiency & Growth Strategies</li>
            </ul>
          </div>
          <img src= {business} alt="Business Consulting" className="w-full rounded-lg shadow-lg animate-slide-right" />
        </div>
      </section>

      {/* Construction Training Section */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src= {construct} alt="Construction Training" className="w-full h-[400px] rounded-lg shadow-lg animate-slide-left " />
          <div className="animate-slide-right">
            <h2 className=" text-white text-3xl font-semibold mb-4">Construction Training</h2>
            <p className="  text-gray-200 text-lg leading-relaxed">
              We provide **comprehensive training programs** for professionals in the **construction industry**.
              Our training includes **on-site learning, safety protocols, project management, and industry standards**.
              We empower individuals with the **skills and knowledge** to excel in the construction sector.
            </p>
            <ul className=" text-gray-200 list-disc pl-5 mt-4 space-y-2">
              <li>Safety Training & OSHA Compliance</li>
              <li>Project Management & Site Supervision</li>
              <li>Blueprint Reading & Technical Skills</li>
              <li>Hands-on Practical Training</li>
            </ul>
          </div>
        </div>
      </section>
      <ServicesSteps/>
      {/* Contact Call-to-Action */}
      {/* <div className="text-center mt-20 animate-fade-in ">
        <h2 className=" text-white text-2xl font-semibold mb-4">Ready to Elevate Your Business?</h2>
        <p className=" text-white text-lg">Connect with our experts today and transform your future!</p>
        <button className="mt-6 bg-blue-500 px-6 py-3 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
          Contact Us
        </button>
      </div> */}
    </div>
  
    </div>
  );
};

export default Services;
