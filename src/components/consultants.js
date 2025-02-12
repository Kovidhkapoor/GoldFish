import React, { Component } from 'react';
import { motion } from 'framer-motion';
import himg1 from "./himg1.jpeg";
import himg2 from "./himg2.jpeg";
import himg3 from "./himg3.jpeg";
import himg4 from "./himg4.jpeg";
import { ArrowRight } from 'lucide-react';

const consultants = [
  {
    id: 1,
    name: 'Ms. Sheli',
    image: himg1,
    description:
      'Sheli is a dedicated professional who brings passion and expertise to every project. Her commitment to excellence and attention to outstanding results. As a key member of our team,',
  },
  {
    id: 2,
    name: 'Ms. Sheli',
    image: himg2,
    description:
      'Sheli is a dedicated professional who brings passion and and attention to detail ensure that our clients receive outstanding results. As a key member of our team,',
  },
  {
    id: 3,
    name: 'Mr.Mike',
    image: himg3,
    description:
      'Sheli is a dedicated professional who brings passion and ent to excellence and attention to detail ensure that our clients receive outstanding results. As a key member of our team,',
  },
  {
    id: 4,
    name: 'Ms. Sheli',
    image: himg4,
    description:
      'Sheli is a dedicated professional who brings passion and expertise to every project. Her commitment to detail ensure that our clients receive outstanding results. As a key member of our team,',
  },
];

class Consultants extends Component {
  render() {
    return (
      <section className="bg-gradient-to-b from-[#393939] via-[#616161] to-[#898989] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">OUR CONSULTANTS</h2>
            <div className="w-32 h-0.5 bg-white mx-auto"></div>
          </motion.div>

          {/* Consultants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {consultants.map((consultant, index) => (
    <motion.div
      key={consultant.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'mt-6' : '-mt-6'}`} // Alternating up and down
    >
      {/* Consultant Card */}
      <div className="group relative">
        {/* Image */}
        <motion.div
          className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={consultant.image || '/placeholder.svg'}
            alt={consultant.name}
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-white text-center mb-4">{consultant.name}</h3>

        {/* Description Card */}
        <motion.div
          className="bg-gray-600 p-6 rounded-2xl relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-sm mb-8">{consultant.description}</p>

          {/* Arrow Button */}
          <motion.button
            className="absolute bottom-4 right-4 bg-gray-700 p-2 rounded-full"
            whileHover={{ scale: 1.1, backgroundColor: '#4A5568' }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>
    );
  }
}

export default Consultants;
