import React, { useState } from "react";

const ProjectCard = ({ image, title, description, link }) => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6 relative overflow-hidden group flex-grow flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 to-blue-700 opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 flex-grow">
          {description}
        </p>
        <div className="text-center mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            Visit Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`
          px-6 py-2 rounded-full text-sm font-semibold mr-4 transition-all duration-300
          border-2 border-white
          ${
            isActive
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "bg-transparent text-white hover:bg-white hover:text-black"
          }
          ${isActive ? "shadow-lg" : ""}
        `}
    style={
      isActive
        ? { backgroundImage: "linear-gradient(to right, #0891b2, #2563eb)" }
        : {}
    }
  >
    {children}
  </button>
);

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("machinelearning");

  const projects = {
    machinelearning: [
      {
        image: "img/p1.jpg",
        title: "AUTO-MACHINE-LEARNING-APP",
        description:
          "Simplify your ML workflow: This GitHub repository hosts an AutoML application",
        link: "https://github.com/kjs3107/AUTO-MACHINE-LEARNING-APP",
      },
      {
        image: "img/p2.jpg",
        title: "TEXAS-SALARY-PREDICTION",
        description:
          "Data enthusiasts and salary seekers! Welcome to the Texas Salary Prediction project",
        link: "https://github.com/kjs3107/TEXAS-SALARY-PREDICTION-PROJ.1",
      },
      {
        image: "img/p3.jpg",
        title: "FIFA-20-CLUSTERING-PROJECT",
        description:
          "FIFA 20 Player Clustering 🎮⚽ Dive into the world of soccer analytics with our FIFA 20 Player Clustering project!",
        link: "https://github.com/kjs3107/FIFA-20-CLUSTERING-PROJECT",
      },
    ],
    deeplearning: [
      {
        image: "img/p1.jpg",
        title: "Forest-Cover-Type-Prediction",
        description:
          "Predict forest cover types using machine learning models on environmental data",
        link: "https://github.com/kjs3107/Forest-Cover-Type-Prediction",
      },
      {
        image: "img/p3.jpg",
        title: "Walk-Run Classification",
        description:
          "Welcome to the Walk-Run Classification project! This AutoML-driven solution aims to automatically classify human activity as either walking or running",
        link: "https://github.com/kjs3107/Forest-Cover-Type-Prediction",
      },
    ],
  };

  return (
    <section id="project" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2 uppercase">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400">
            A glimpse of the projects I've been working on
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <TabButton
            isActive={activeTab === "machinelearning"}
            onClick={() => setActiveTab("machinelearning")}
          >
            Machine Learning
          </TabButton>
          <TabButton
            isActive={activeTab === "deeplearning"}
            onClick={() => setActiveTab("deeplearning")}
          >
            Deep Learning
          </TabButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
