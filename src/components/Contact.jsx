import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="px-8 max-w-[1000px] mx-auto md:my-20" id="contact">
      <div className="grid lg:grid-cols-1 place-items-center">
        <div>
          <div className="my-3 text-gray-300 ">
            <h3 className="mb-5 text-4xl font-semibold">
              Contact <span>Me</span>
            </h3>
          </div>

          <div className="flex flex-row items-center gap-4 font-semibold text-gray-400">
            <SiGmail className="text-red-400" size={25} />
            <p>sitohangd9@gmail.com</p>
          </div>

          <div className="flex flex-row items-center gap-4 mt-4 font-semibold text-gray-400">
            <FaWhatsapp className="text-red-400" size={25} />
            <p>+878-4055-9089</p>
          </div>

          <div className="flex items-center mt-10 gap-7">
            <div className="p-4 rounded-lg bg-gray-800/40">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                10<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Projects</span>
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/40">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                3<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Years of experience</span>
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-800/40">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                10<span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Skills</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
