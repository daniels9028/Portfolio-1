import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "PT. Murfa Surya Mahardika",
    period: "2022 - Present",
    description: [
      {
        name: "Memimpin migrasi SIMAKDA dari CodeIgniter 2 ke Laravel 8, meningkatkan performa, keamanan, dan skalabilitas sistem.",
      },
      {
        name: "Merancang modul Data Kontrak untuk memfasilitasi SKPD dalam pengadaan barang/jasa.",
      },
      {
        name: "Mengembangkan sistem DEKADE untuk transparansi anggaran publik di Kalimantan Barat.",
      },
      {
        name: "Membangun aplikasi CAKRAM untuk Inspektorat Kubu Raya, menyajikan data real-time terkait pajak, kontrak, SPJ, dan TPP",
      },
      {
        name: "Mengembangkan E-Mantap untuk pengamanan dan pemantauan aset daerah Kubu Raya.",
      },
      {
        name: "Merancang dan mengimplementasikan E-SPM untuk efisiensi administrasi pembayaran di Pemprov Kalbar.",
      },
      {
        name: "Membangun sistem SPPD digital untuk manajemen perjalanan dinas yang efisien dan terintegrasi.",
      },
      {
        name: "Mengembangkan aplikasi E-Gaji untuk pencatatan dan pelaporan penggajian pegawai daerah secara akurat dan efisien.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="p-8 max-w-[800px] mx-auto" id="experience">
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
              <ul className="pl-6 space-y-2 list-disc">
                {exp.description.map((list, index) => (
                  <li className="text-2xl text-gray-400" key={index}>
                    {list.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
