import React from 'react'

const professionalStrengths = [
  { strength: "Problem Solving" },
  { strength: "SEO Optimization" },
  { strength: "Performance Optimization" },
  { strength: "Accessibility" },
  { strength: "Clean Code" }
]

function ProfessionalStrengths() {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-sky-700 mb-8 text-center">Professional Strengths</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {professionalStrengths.map((item, index) => (
          <div
            key={index}
            className="bg-white opacity-90 shadow-lg rounded-lg px-8 py-6 w-100 text-center text-lg font-medium"
          >
            {item.strength}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfessionalStrengths
