import React from 'react'

const projectDetails = [
  {
    title: "Possible Money",
    duration: "Nov 2025 - Present",
    description:
      "Possible Money is a digital loan application platform designed to streamline the process of applying for and managing loans. The website offers a user-friendly interface for submitting loan requests, tracking application status, and managing repayments. It aims to provide quick loan approvals, accessible loan products, and secure handling of user financial data to enhance the borrowing experience for individuals and businesses.",
    contributions: [
      "Developed and maintained responsive user interface components using React.js and Tailwind CSS to deliver seamless loan application experiences.",
      "Implemented dynamic form handling and validation to ensure accurate user input during loan submissions.",
      "Enhanced user experience through optimized page load times and intuitive navigation flows.",
      "Participated in iterative testing and debugging to deliver a reliable and secure loan application platform.",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    buttonLink: "https://github.com/SauravBhadauriya/Possible-Money",
  },
]

function Project() {
  const project = projectDetails[0]
  return (
    <section id="project" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Featured Projects</h1>
          <p className="text-lg text-white/60">
            A selection of my recent work and contributions to impactful projects.
          </p>
        </div>
        <div className="bg-white opacity-90 shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <h1 className="text-sky-700 text-2xl font-bold">{project.title}</h1>
            <span className="bg-sky-100 rounded px-4 py-1 font-bold text-sky-700">{project.duration}</span>
          </div>
          <p className="text-left mt-4 mb-4">{project.description}</p>
          <h2 className="text-2xl font-bold text-left text-sky-700 mt-4">Key Contributions:</h2>
          <ul className="list-disc pl-6 text-left space-y-2 mt-2">
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          <div className="flex gap-2 flex-wrap mt-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-sky-100 rounded px-3 py-1 text-sky-700 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <a
              href={project.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 rounded px-6 py-2 text-white font-bold hover:bg-blue-600 transition"
            >
              View Project Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
