import profile from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";
import { FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Hero = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Resume_DanielMaruliSitohang.pdf";
    link.download = "Resume_DanielMaruliSitohang.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="about">
      <div className="grid gap-8 px-8 lg:grid-cols-2 place-items-center lg:px-0">
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
            className="mb-4 text-xl italic font-bold text-gray-400 lg:text-4xl"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-5xl tracking-tight text-gray-200 lg:text-7xl"
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
            Saya adalah seorang Full Stack Developer yang berdedikasi dengan
            pengalaman lebih dari 3 tahun dalam membangun dan memelihara
            aplikasi web yang skalabel, menguasai secara mendalam teknologi
            frontend maupun backend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center gap-6 my-4 lg:flex-row lg:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              onClick={handleDownloadCv}
              className="z-10 p-4 font-bold text-gray-200 border border-purple-400 cursor-pointer lg:w-auto rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="z-20 flex items-center gap-6 text-4xl text-purple-400 lg:text-6xl">
              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                target="_blank"
                href="https://github.com/daniels9028"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                target="_blank"
                href="https://www.instagram.com/dniel.m.s/"
              >
                <AiOutlineInstagram />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                target="_blank"
                href="https://www.linkedin.com/in/daniel-maruli-sitohang/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                target="_blank"
                href="https://www.facebook.com/daniels9027/"
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
        className="flex flex-col items-center justify-center w-full gap-4 px-12 py-24 lg:flex-row text-7xl md:px-0"
      >
        <p className="mr-6 text-gray-200">My Tech Stack</p>
        <div className="flex flex-row">
          <FaLaravel className="mx-2 text-orange-600" size={30} />
          <FaReact className="mx-2 text-blue-600" size={30} />
          <DiJavascript1 className="mx-2 text-yellow-500" size={30} />
          <SiTailwindcss className="mx-2 text-blue-500" size={30} />
          <FaGitAlt className="mx-2 text-green-500" size={30} />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
