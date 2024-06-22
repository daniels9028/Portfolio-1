import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="px-8 max-w-[1000px] mx-auto md:my-12" id="contact">
      <div className="grid lg:grid-cols-2 place-items-center">
        <div>
          <div className=" text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Am I wrong for thinking out the box from where I stay? Am I wrong{" "}
              <br />
              for saying that I'll choose another way? I ain't trying to do what{" "}
              <br />
              everybody else doing Just cause everybody doing what they all do{" "}
              <br />
              If one thing I know, how far would I grow? I'm walking down this{" "}
              <br />
              road of mine, this road that I call home
            </p>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-gray-800/40 p-4 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                11 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Projects</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-4 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Years of experience</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-4 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                10 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Skills</span>
              </p>
            </div>
          </div>
        </div>

        <form
          action="https://getform.io/f/jbwxlkqa"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
          target="__blank"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let's connect</p>

          <input
            type="text"
            id="name"
            placeholder="Your name..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />

          <input
            type="email"
            id="email"
            placeholder="Your email..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />

          <textarea
            type="text"
            id="message"
            placeholder="Your message..."
            name="message"
            cols={30}
            rows={4}
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
