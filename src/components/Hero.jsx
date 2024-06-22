import React from "react";
import profile from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="about">
      <div className="grid lg:grid-cols-2 place-items-center gap-8 lg:m-4 m-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Front End Developer",
              1000,
              "Back End Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl lg:text-4xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 lg:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY , I AM <br />
            <span className="text-purple-500">DANIEL MARULI SITOHANG</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-200 lg:text-2xl text-lg mb-6 max-w-[300px] lg:max-w-[500px]"
          >
            I'm a passionate full stack developer with over 2 years of
            experience....
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-6 my-4 lg:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 lg:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex items-center gap-6 text-4xl lg:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                href="#"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                href="#"
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                href="#"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                href="#"
              >
                <AiOutlineFacebook />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profile}
          className="w-[300px] lg:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
