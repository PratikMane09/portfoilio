import React from "react";
import {
  BriefcaseIcon,
  GraduationCap,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";

const ResumeSection = () => {
  const educationData = [
    {
      title: "Bachelor of Technology & ECT Engineering",
      year: "2019 - 2023",
      institution: "MGM's Jawaharalal Nehru Engineering College Aurangabad",
      percentage: "89%",
    },
    {
      title: "HSC & Science",
      year: "2018 - 2019",
      institution: "Devgiri College Aurangabad",
      percentage: "80%",
    },
    {
      title: "SSC",
      year: "2016 - 2017",
      institution: "S.M Aurangabad",
      percentage: "80%",
    },
  ];

  const experienceData = [
    {
      title: "Data Science Intern",
      year: "2023 - Present",
      location: "Pune",
      responsibilities: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
      ],
    },
  ];

  return (
    <section id="resume" className="bg-black text-white py-16 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h2>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-sky-500 shadow-lg">
              <img
                className="w-full h-full object-center"
                src="img/k1.jpg"
                alt="Ketki Shinde profile picture"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-3xl font-medium mb-4 text-white">
              Hi, I'm Ketki.
            </h3>
            <p className="mb-6 text-xl leading-relaxed text-gray-300">
              Welcome to Ketki J. Shinde's homepage. I'm a data science
              enthusiast and recent graduate, currently doing an internship in
              data science at Rubix. I'm passionate about leveraging data-driven
              insights to solve real-world problems. Explore my portfolio to see
              how I've applied my skills to various projects.
            </p>
            <div className="flex space-x-4 mb-12">
              <a
                href="https://github.com/kjs3107"
                className="bg-gradient-to-r from-black to-black hover:from-black hover:to-sky-500 text-white font-bold py-3 px-6 border border-sky-500 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ketki-shinde-186118287/"
                className="bg-gradient-to-r from-black to-black hover:from-black hover:to-sky-500 text-white font-bold py-3 px-6 border border-sky-500 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-white">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] border border-sky-500"
                >
                  <GraduationCap className="w-8 h-8 text-sky-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2 text-white">
                    {edu.title}
                  </h4>
                  <h5 className="text-gray-400 mb-2">{edu.year}</h5>
                  <p className="text-gray-300">
                    <em>{edu.institution}</em>
                  </p>
                  <p className="text-gray-400 mt-2">
                    Percentage:{" "}
                    <span className="text-sky-500">{edu.percentage}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8 text-white">
              Professional Experience
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] border border-sky-500"
                >
                  <BriefcaseIcon className="w-8 h-8 text-sky-500 mb-4" />
                  <h4 className="text-2xl font-medium mb-2 text-white">
                    {exp.title}
                  </h4>
                  <h5 className="text-gray-400 mb-2">{exp.year}</h5>
                  <p className="text-gray-300 mb-4">
                    <MapPinIcon className="inline w-4 h-4 mr-2 text-sky-500" />
                    <em>{exp.location}</em>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 hover:text-sky-500 transition duration-300"
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
