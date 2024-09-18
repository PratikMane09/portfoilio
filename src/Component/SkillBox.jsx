import React from "react";

const SkillBox = ({ skill, color }) => (
  <div className="p-3 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-24 w-full flex items-center justify-center border border-gray-800">
    <h3 className={`text-sm font-semibold uppercase ${color}`}>{skill}</h3>
  </div>
);

const SkillsSection = () => {
  const technicalSkills = [
    { name: "PYTHON", color: "text-yellow-400" },
    { name: "NLP", color: "text-blue-400" },
    { name: "SQL", color: "text-pink-500" },
    { name: "Pandas", color: "text-purple-400" },
    { name: "Numpy", color: "text-blue-300" },
    { name: "scikit-learn", color: "text-orange-300" },
    { name: "Power BI", color: "text-teal-300" },
    { name: "Tableau", color: "text-indigo-400" },
    { name: "AWS", color: "text-yellow-600" },
    { name: "ML Algorithms", color: "text-pink-600" },
    { name: "Data Visualization", color: "text-red-400" },
    { name: "Deep Learning", color: "text-green-400" },
    { name: "GitHub", color: "text-teal-300" },
  ];

  const professionalSkills = [
    { name: "Team Player", color: "text-yellow-400" },
    { name: "Public Speaking", color: "text-blue-400" },
    { name: "Communication", color: "text-pink-500" },
    { name: "Verbal & Written", color: "text-purple-400" },
    { name: "Creativity", color: "text-blue-300" },
    { name: "Problem Solving", color: "text-orange-300" },
  ];

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2 uppercase">
            Skills
          </h3>
          <h2 className="text-4xl font-extrabold text-white mb-8">
            Technical Expertise
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technicalSkills.map((skill, index) => (
            <SkillBox key={index} skill={skill.name} color={skill.color} />
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-8">
            Professional Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {professionalSkills.map((skill, index) => (
            <SkillBox key={index} skill={skill.name} color={skill.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
