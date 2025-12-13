import { GraduationCap } from 'lucide-react'
import React from 'react'

const education = [
  {
    icon: <GraduationCap />,
    heading: "Bachelor of Technology",
    paragraph1: "Dr. A.P.J. Abdul Kalam Technical University",
    paragraph2: "Lucknow, India",
    year: "2019-2023"
  },
  {
    icon: <GraduationCap />,
    heading: "Senior Secondary School Examination",
    paragraph1: "S.V.M. Inter College",
    paragraph2: "Bareilly, Utter Pradesh",
    year: "2018"
  },
  {
    icon: <GraduationCap />,
    heading: "Secondary School Examination",
    paragraph1: "SVM Inter College",
    paragraph2: "Bareilly, Utter Pradesh",
    year: "2016"
  }
]

function Education() {
  return (
    <section id='education' className="bg-gray-50 pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Education</h1>
        <p className="text-lg md:text-2xl text-gray-500 mb-8">My academic journey</p>
        {/* Add items-stretch! */}
        <div className="flex flex-col md:flex-row gap-8 w-full md:justify-center items-stretch">
          {education.map((item, index) => (
            <div key={index} className="opacity-90 shadow-lg bg-white rounded-lg p-6 min-h-[120px] flex flex-col justify-between max-w-lg mx-auto w-full">
              <div>
                <div className="flex border-b-2 border-gray-200 gap-4 h-28 items-center mb-3">
                  <div className="h-12 w-14 mb-12 rounded-full  flex justify-center items-center bg-sky-100 text-sky-600">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-lg md:text-[18px] font-semibold text-left">{item.heading}</h2>
                    <p className="text-gray-700 text-left">{item.paragraph1}</p>
                    <p className="text-gray-500 text-left">{item.paragraph2}</p>
                  </div>
                </div>
              </div>
              <p className="text-left text-gray-700 ">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
