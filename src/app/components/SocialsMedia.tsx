'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function SocialsMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="hidden fixed right-6 bottom-6 z-50 bg-background hover:bg-[var(--primarytransparent)] p-1 backdrop-blur-lg rounded-full shadow-lg md:flex items-center justify-center transition-transform hover:scale-105">
      <div className="flex flex-col text-1xl">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-500 hover:text-blue-500 p-3 rounded-full hover:bg-[var(--accenthover)] transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-500 hover:text-pink-500 p-3 rounded-full hover:bg-[var(--accenthover)] transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-500 hover:text-blue-700 p-3 rounded-full hover:bg-[var(--accenthover)] transition-colors"
        >
          <FaFacebook />
        </a>
      </div>
    </motion.div>
  );
}
