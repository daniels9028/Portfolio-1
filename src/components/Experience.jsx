import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "First Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Second Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Third Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Fourth Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div initial="hidden" animate="visible" className="space-y-8">
        {experiences.map((exp, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {exp.company}
              </h2>
              <p className="text-gray-300">{exp.period}</p>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
