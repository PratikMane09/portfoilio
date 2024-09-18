import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    const particlesScript = document.createElement("script");
    particlesScript.src = "/assets/particlebackground/particles.js";
    particlesScript.async = true;
    document.body.appendChild(particlesScript);

    particlesScript.onload = () => {
      const appScript = document.createElement("script");
      appScript.src = "/assets/particlebackground/app.js";
      appScript.async = true;
      document.body.appendChild(appScript);
    };

    return () => {
      document.body.removeChild(particlesScript);
      const appScript = document.querySelector(
        'script[src="/assets/particlebackground/app.js"]'
      );
      if (appScript) {
        document.body.removeChild(appScript);
      }
    };
  }, []);

  return (
    <div
      id="home"
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      <div id="particles-js" className="absolute inset-0"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-center">
          Ketki J. Shinde
        </h1>

        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com/kjs3107"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ketki-shinde-186118287/"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="max-w-2xl text-base md:text-lg mb-12 text-center leading-relaxed">
          Welcome to Ketki J. Shinde's homepage.
          <br />
          I'm a data Science enthusiast and recent graduate, currently doing an
          internship in data science at Rubix. Passionate about leveraging
          data-driven insights to solve real-world problems, I invite you to
          explore my portfolio and see how I've applied my skills to various
          projects.
        </p>

        <div className="flex justify-center space-x-8 ">
          <a
            href="mailto:kjshinde2904@gmail.com"
            className="bg-gradient-to-r from-black to-black hover:from-black hover:to-sky-500 text-white font-bold py-3 px-6 border border-sky-500 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            GMAIL
          </a>
          <Link
            to="contact"
            className="bg-gradient-to-r from-black to-black hover:from-black hover:to-sky-500 text-white font-bold py-3 px-6 border border-sky-500 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT
          </Link>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-8 flex justify-center items-center">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-6xl text-[#00E8F8] cursor-pointer hover:text-white transition-colors duration-300 animate-bounce"
        >
          ﹀
        </Link>
      </div>
    </div>
  );
};

export default Home;
