import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                FutureMedia
              </span>
            </div>
            <p className="text-white/70">
              Transforming businesses through innovative digital solutions
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>&copy; 2024 FutureMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}