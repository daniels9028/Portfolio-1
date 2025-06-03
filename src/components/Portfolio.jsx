import travelgo from "../assets/travelgo.png";
import sport from "../assets/sport.png";
import simakda from "../assets/simakda.png";
import dekade from "../assets/dekade.png";
import datakontrak from "../assets/datakontrak.png";
import cakram from "../assets/cakram.png";
import emantap from "../assets/emantap.png";
import espm from "../assets/espm.png";
import simpd from "../assets/simpd.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: travelgo,
    title: "TravelGo",
    description:
      "Aplikasi perjalanan untuk eksplorasi destinasi, pemesanan tiket, dan itinerary liburan dalam satu platform.",
    links: {
      site: "https://travelly-sandy.vercel.app/",
      github: "https://github.com/daniels9028/travelProject",
    },
  },
  {
    img: sport,
    title: "Sport Project",
    description:
      "Aplikasi olahraga untuk mengelola data aktivitas, peserta, dan gambar dengan fitur CRUD, autentikasi, dan pagination dalam satu platform.",
    links: {
      site: "https://sporty-chi.vercel.app/login",
      github: "https://github.com/daniels9028/sportProject",
    },
  },
  {
    img: simakda,
    title:
      "SIMAKDA (Sistem Informasi Manajemen Anggaran dan Akuntansi Keuangan Daerah)",
    description:
      "SIMAKDA merupakan program aplikasi yang membantu Satuan Kerja Pengelolaan Keuangan Daerah (SKPKD) dalam mengelola data keuangan daerah.",
    links: {
      site: "https://penatausahaan-2024.simakda.co.id:9090/",
      github: "#",
    },
  },
  {
    img: dekade,
    title: "DEKADE",
    description:
      "DEKADE adalah sistem informasi dashboard keuangan daerah yang memungkinkan masyarakat mengetahui rincian anggaran dan realisasi keuangan daerah",
    links: {
      site: "https://dekade.simakda.co.id:9090/",
      github: "#",
    },
  },
  {
    img: datakontrak,
    title: "Data Kontrak",
    description:
      "Data Kontrak adalah sistem informasi manajemen data kontrak keuangan daerah di wilayah Provinsi Kalimantan Barat",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: cakram,
    title: "CAKRAM",
    description:
      "CAKRAM adalah sistem informasi monitoring data keuangan daerah di wilayah Kabupaten Kubu Raya",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: emantap,
    title: "E-MANTAP",
    description:
      "E-MANTAP adalah sistem informasi manajemen aset daerah di wilayah Kabupaten Kubu Raya",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: espm,
    title: "E-SPM",
    description:
      "E-SPM adalah sistem informasi manajemen surat perintah membayar pencairan dana di wilayah Provinsi Kalimantan Barat",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: simpd,
    title: "SIMPD",
    description:
      "SIMPD adalah sistem informasi manajemen perjalanan dinas di wilayah Provinsi Kalimantan Barat",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-200">
        Portfolio
      </h2>

      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full h-[300px] p-4 border border-[#2d1e38] bg-[#190b1f] rounded-lg shadow-sm md:w-1/2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full bg-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={
                    project.links.site === "#" ? undefined : project.links.site
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.links.site === "#") e.preventDefault();
                  }}
                  aria-disabled={project.links.site === "#"}
                  className={`flex items-center px-4 py-2 text-gray-200 transition duration-300 rounded-lg ${
                    project.links.site === "#"
                      ? "bg-slate-800 opacity-50 cursor-not-allowed"
                      : "bg-slate-600 hover:bg-slate-700"
                  }`}
                >
                  View Site
                </a>
                <a
                  href={
                    project.links.github === "#"
                      ? undefined
                      : project.links.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.links.github === "#") e.preventDefault();
                  }}
                  aria-disabled={project.links.github === "#"}
                  className={`flex items-center px-4 py-2 text-gray-200 transition duration-300 rounded-lg ${
                    project.links.github === "#"
                      ? "bg-slate-800 opacity-50 cursor-not-allowed"
                      : "bg-slate-600 hover:bg-slate-700"
                  }`}
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
