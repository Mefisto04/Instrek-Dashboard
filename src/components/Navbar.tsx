"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 w-full py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-white/10 backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
          Instrek Technologies
        </h1>
      </Link>
      <div className="flex items-center space-x-8 mb-4 md:mb-0">
        <Link
          href="/"
          className="text-white hover:text-white/80 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white/70 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-white/70 hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
