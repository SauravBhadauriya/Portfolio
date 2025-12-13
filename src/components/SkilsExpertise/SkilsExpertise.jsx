import React from 'react'

const frontendSkills = [
  { tech: "React" },
  { tech: "JavaScript" },
  { tech: "HTML5" },
  { tech: "CSS3" },
  { tech: "Tailwind CSS" },
]

function SkillsExpertise() {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Skills & Expertise</h1>
        <p className="text-lg text-gray-500 mb-10">
          Specialized in modern frontend technologies and frameworks to create exceptional user experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Frontend Technologies */}
          <div className="bg-white opacity-90 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-sky-700 mb-5">Frontend Technologies</h2>
            <div className="flex flex-wrap gap-4">
              {frontendSkills.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-sky-100 rounded text-sky-700 font-semibold"
                >
                  {item.tech}
                </span>
              ))}
            </div>
          </div>
          {/* UI Frameworks */}
          <div className="bg-white opacity-90 shadow-lg rounded-lg p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-sky-700 mb-5">UI Frameworks</h2>
            <span className="px-6 py-2 bg-sky-100 rounded text-sky-700 font-semibold">Bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsExpertise
