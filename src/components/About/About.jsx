import { Calendar, Code, MapPin } from 'lucide-react'
import React from 'react'

const experience = [
  {
    icon: <MapPin />,
    heading: "Location",
    data: "Bareilly, Uttar Pradesh, India"
  },
  {
    icon: <Calendar />,
    heading: "Experience",
    data: "4 Months"
  },
  {
    icon: <Code />,
    heading: "Technical Skills",
    data: "React | Tailwind | Bootstrap | JavaScript"
  }
]

const aboutMe = [
  {
    paragraph: "Passionate Frontend Software Developer with experience in React.js, HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript. Skilled in developing responsive and maintainable web applications with a strong focus on user experience and code quality."
  },
  {
    paragraph: "With over 4 months of professional experience, I am eager to contribute my technical expertise, problem-solving skills, and collaborate effectively within innovative software development environments."
  },
  {
    paragraph: "I am continuously learning modern frontend technologies to enhance web performance, accessibility, and design consistency, striving to create intuitive and efficient user interfaces."
  }
]

function About() {
  return (
    <section id='about' className="pt-10 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-6">
          Frontend Software Developer with over 4 Months of experience creating responsive and user-friendly web applications.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-6">
          {/* About Paragraphs */}
          <div className="bg-white opacity-90 shadow-lg rounded-lg p-6 md:p-10 w-full md:max-w-xl">
            {aboutMe.map((item, index) => (
              <p key={index} className="mb-5 text-base md:text-lg text-gray-600">{item.paragraph}</p>
            ))}
          </div>
          {/* Personal Details */}
          <div className="bg-white opacity-90 shadow-lg rounded-lg px-6 py-8 w-full md:max-w-md flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-8">Personal Details</h2>
            {experience.map((item, index) => (
              <div key={index} className="flex flex-row items-center gap-5 mb-6 w-full">
                <span className="h-10 w-10 rounded-full flex justify-center items-center text-sky-600 bg-sky-100">{item.icon}</span>
                <div className="text-start">
                  <h3 className="font-bold">{item.heading}</h3>
                  <h4 className="text-gray-600">{item.data}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
