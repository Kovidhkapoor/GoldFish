import React from "react";

const ConsultingServices = () => {
  const services = [
    {
      icon: "🤝",
      title: "Business Strategy",
      description:
        "We provide expert business strategy guidance to help you scale efficiently, optimize operations, and maximize revenue growth.",
    },
    {
      icon: "🏗️",
      title: "Construction Consulting",
      description:
        "From project planning to execution, we ensure smooth workflows, risk assessment, and high-quality construction management.",
    },
    {
      icon: "📊",
      title: "Market Analysis",
      description:
        "Our data-driven market analysis helps you understand trends, competitors, and opportunities for sustainable business expansion.",
    },
    {
      icon: "🚀",
      title: "Process Optimization",
      description:
        "We refine your business processes, eliminating inefficiencies and improving productivity to drive long-term success.",
    },
    {
      icon: "🤝",
      title: "Partnership & Growth",
      description:
        "Leverage our extensive network to build meaningful collaborations and partnerships that fuel your business growth.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Our Consulting Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
