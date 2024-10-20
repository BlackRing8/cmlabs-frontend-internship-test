import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navlist() {
  return (
    <ul className="flex gap-8 text-white">
      <Link to="/" className="font-semibold hover:text-yellow-300">
        Home
      </Link>
      <Link to="/category" className="font-semibold  hover:text-yellow-300">
        Category
      </Link>
      <Link to="/contact" className="font-semibold  hover:text-yellow-300">
        Contact Us
      </Link>
    </ul>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header className="fixed w-full h-24 max-w-full bg-transparent z-20 " initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
      {/* Navbar dekstop */}
      <nav className="hidden w-full h-full lg:flex justify-between items-center lg:px-16 bg-black">
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            MEAL APP
          </Link>
        </div>
        <Navlist />
      </nav>
      {/* Navbar mobile */}
      <div className="lg:hidden w-full h-20 flex items-center justify-between px-5 bg-black ">
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            MEAL APP
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden space-y-8 bg-black pt-4 pb-8">
          <a href="/" className="block text-white text-center  hover:text-yellow-300">
            Home
          </a>
          <a href="/category" className="block text-white text-center  hover:text-yellow-300">
            About
          </a>
          <a href="/contact" className="block text-white text-center  hover:text-yellow-300">
            Contact
          </a>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
