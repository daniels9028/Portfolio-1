import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJqueryLogo,
  DiLaravel,
  DiMysql,
} from "react-icons/di";
import Reveal from "./Reveal";
import { Link } from "react-scroll";
import {
  SiApache,
  SiAxios,
  SiCodeigniter,
  SiLaragon,
  SiMicrosoftsqlserver,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";
import { BiQuestionMark } from "react-icons/bi";
import { BsFiletypeJson, BsFiletypeSql } from "react-icons/bs";
import { FaGitAlt, FaGithub, FaLaravel, FaPhp } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const skills = [
  {
    category: "Backend Development",
    technologies: [
      { name: "PHP", icon: <FaPhp className="text-green-500" /> },
      { name: "Laravel", icon: <FaLaravel className="text-green-600" /> },
      { name: "REST API", icon: <BiQuestionMark className="text-blue-500" /> },
      { name: "Axios", icon: <SiAxios className="text-gray-600" /> },
      {
        name: "Codeigniter",
        icon: <SiCodeigniter className="text-green-500" />,
      },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-pink-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-blue-500" />,
      },
      { name: "jQuery", icon: <DiJqueryLogo className="text-orange-600" /> },
      { name: "AJAX", icon: <BiQuestionMark className="text-blue-600" /> },
      { name: "JSON", icon: <BsFiletypeJson className="text-yellow-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Zod", icon: <SiZod className="text-pink-600" /> },
    ],
  },
  {
    category: "Database Management",
    technologies: [
      { name: "SQL", icon: <BsFiletypeSql className="text-blue-500" /> },
      { name: "MySQL", icon: <DiMysql className="text-green-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      {
        name: "SQL Server",
        icon: <SiMicrosoftsqlserver className="text-green-600" />,
      },
    ],
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-blue-500" /> },
      { name: "Github", icon: <FaGithub className="text-green-500" /> },
      { name: "Vite", icon: <SiVite className="text-green-500" /> },
      {
        name: "Laragon",
        icon: <SiLaragon className="text-green-600" />,
      },
      { name: "Apache", icon: <SiApache className="text-gray-600" /> },
      { name: "Postman", icon: <SiPostman className="text-gray-600" /> },
      { name: "Figma", icon: <FiFigma className="text-gray-600" /> },
    ],
  },
];

const Skill = () => {
  return (
    <div
      className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 max-w-[650px] mx-auto"
      id="skills"
    >
      <Reveal>
        <h2 className="mb-4 text-3xl font-bold text-center">Skills</h2>
        <p className="mb-8 text-center">
          Saya telah mengerjakan berbagai proyek full-stack yang menunjukkan
          kemampuan saya dalam pengembangan antarmuka pengguna (UI) sekaligus
          integrasi backend. Beberapa proyek tersebut dapat Anda lihat lebih
          lengkap di{" "}
          <Link
            to="portfolio"
            smooth={true}
            offset={-50}
            duration={500}
            className="underline cursor-pointer"
          >
            portofolio
          </Link>{" "}
          saya
        </p>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full h-full p-6 border border-purple-900 rounded-lg shadow-lg bg-purple-900/20"
            >
              <h3 className="mb-4 text-xl font-bold text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skill;
