import React from "react";

const servicesData = [
  {
    id: "01",
    title: "INITIAL CONSULTATION",
    subtitle: "Pre-sale",
    description:
      "We identify your needs and objectives to accurately scope what is needed to drive the most value.",
  },
  {
    id: "02",
    title: "ONBOARDING",
    subtitle: "Day 1",
    description:
      "We align on basic expectations around agreement, billing, and requirements to start efficiently.",
  },
  {
    id: "03",
    title: "STRATEGY PLANNING",
    subtitle: "Week 1",
    description:
      "We introduce you to the team and outline what to expect in the first 30 days.",
  },
  {
    id: "04",
    title: "IMPLEMENTATION",
    subtitle: "Week 2",
    description:
      "We refine goals, begin execution, and ensure a smooth transition towards long-term success.",
  },
  {
    id: "05",
    title: "REVIEW & FEEDBACK",
    subtitle: "Near Day 30",
    description:
      "We evaluate progress, refine strategies, and ensure alignment with your goals.",
  },
  {
    id: "06",
    title: "ONGOING SUPPORT",
    subtitle: "Ongoing",
    description:
      "We provide continuous optimization and ensure long-term business growth.",
  },
];

const ServicesSteps = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        OUR SERVICE PROCESS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {servicesData.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-white rounded-full text-2xl font-bold">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.subtitle}</p>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSteps;
