import React from "react";
import { motion } from "framer-motion";
import helpimg from "./helpimg.jpeg";

const reasons = [
  {
    title: "Expertise You Can Trust:",
    description: "Proven experience across industries ensures reliable and effective solutions.",
  },
  {
    title: "Tailored Strategies:",
    description: "Customized approaches to meet your unique needs and goals.",
  },
  {
    title: "Commitment to Excellence:",
    description: "We prioritize quality, integrity, and customer satisfaction in everything we do.",
  },
  {
    title: "Innovative Solutions:",
    description: "Forward-thinking strategies to help you stay ahead in a competitive market.",
  },
  {
    title: "Partner for Success:",
    description: "A collaborative approach to achieve measurable, long-term results.",
  },
];

const UseClient = () => {
  return (
    <section className="bg-[#898989] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Work With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-200 p-8 rounded-lg mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-3 h-3 bg-black rounded-full mr-3"></span>
            Why should you work with us?
          </h2>
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-800">
                  <strong>{reason.title}</strong> {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How Can We Help Section */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Image Section with Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] rounded-lg overflow-hidden"
          >
            <img
              src={helpimg}
              alt="Business meeting"
              className="w-full h-full object-cover grayscale"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b  to-blue-900/90"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg flex flex-col justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              How can we help?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300  text-lg leading-relaxed"
            >
              At [Your Company Name], we bring years of proven expertise and a
              client-centered approach to every project. Our team is dedicated to
              delivering tailored solutions that meet your unique needs while
              ensuring transparency, reliability, and excellence at every step. With
              a focus on building lasting partnerships, we are committed to driving
              your success and achieving exceptional results.
            </motion.p>
          </motion.div>
        </div>

        {/* New Section */}
        <div className="bg-gray-200 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Want to grow smarter?</h2>
          <p className="text-gray-800 text-lg">
            We specialize in crafting data-driven strategies that unlock new opportunities for growth. By leveraging
            industry insights and customized solutions, we help you optimize processes, enhance efficiency, and stay
            ahead of the competition. Our team works closely with you to ensure every decision supports your long-term vision,
            enabling you to grow smarter and achieve lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseClient;
