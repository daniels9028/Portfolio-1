import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        <a href="#">Daniel Maruli Sitohang</a>

        <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
          <li>
            <Link to="about" smooth={true} offset={-100} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={-50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={-50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} offset={-50} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div
          onClick={toggleNav}
          className="z-50 flex text-gray-200 cursor-pointer md:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-gray-900"
        >
          <ul className="mt-20 space-y-4 text-xl font-semibold text-center cursor-pointer">
            <li>
              <Link
                to="about"
                smooth={true}
                onClick={closeNav}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                onClick={closeNav}
                offset={-100}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                onClick={closeNav}
                offset={-50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                onClick={closeNav}
                offset={-50}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                onClick={closeNav}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
