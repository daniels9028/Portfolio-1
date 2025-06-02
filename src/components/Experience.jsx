import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "PT. Murfa Surya Mahardika",
    period: "2022 - Present",
    description:
      "Di PT. Murfa Surya Mahardika, saya bertanggung jawab dalam mengelola dan menjalankan berbagai proyek penting yang mendukung pertumbuhan dan efisiensi operasional perusahaan. Saya bekerja sama dengan tim lintas fungsi untuk memastikan hasil kerja berkualitas dan tepat waktu. Selain itu, saya aktif dalam menyelesaikan masalah, mengoptimalkan proses kerja, serta menerapkan solusi inovatif guna mencapai tujuan bisnis. Dengan semangat belajar dan adaptasi yang tinggi, saya berkontribusi dalam meningkatkan produktivitas tim dan kesuksesan proyek.",
  },
];

const Experience = () => {
  return (
    <section className="p-8 max-w-[600px] mx-auto" id="experience">
      <h1 className="mb-12 text-4xl font-bold text-center text-gray-200">
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
              className="p-6 transition-shadow duration-300 border border-purple-600 rounded-lg shadow-md hover:shadow-xl bg-purple-700/10"
            >
              <h2 className="text-2xl font-semibold text-gray-100">
                {exp.company}
              </h2>
              <p className="text-gray-300">{exp.period}</p>
              <p className="mt-4 text-gray-400">{exp.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
