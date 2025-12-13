import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const social = [
  {
    icon: <Github />,
    link: "https://github.com/SauravBhadauriya"
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/saurav-singh-163a9223a/"
  }
]

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 mt-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl text-white font-bold">Saurav Singh</h1>
          <h2 className="text-white font-semibold">Frontend Software Developer</h2>
        </div>
        <div className="flex gap-4 text-sky-400">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 h-10 w-10 rounded-full p-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 cursor-pointer flex items-center justify-center hover:text-white transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <hr className="border-gray-600 mt-6 max-w-6xl mx-auto" />
      <div className="max-w-6xl mx-auto px-4 mt-4 text-center">
        <p className="text-white text-sm md:text-base">
          I hereby declare that the above information provided is true to the best of my knowledge.
        </p>
      </div>
    </footer>
  );
}

export default Footer
