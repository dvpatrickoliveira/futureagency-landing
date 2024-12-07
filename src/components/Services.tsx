import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, TrendingUp, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Digital Design",
    description: "Creating stunning visuals that capture your brand's essence"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description: "Building responsive and performant web experiences"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Driving growth through data-driven marketing strategies"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Social Media",
    description: "Engaging your audience across all social platforms"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}