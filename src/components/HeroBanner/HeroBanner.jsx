import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const contect = [
  {
    icon: <Github />,
    link: "https://github.com/SauravBhadauriya"
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/saurav-singh-163a9223a/"
  },
  {
    icon: <Mail />,
    link: "mailto:sauravbhadauriya17@gmail.com"
  }
]

function HeroBanner() {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070")] min-h-screen bg-cover bg-center'>
      <div className='bg-linear-to-br from-slate-900 via-slate-800/90 to-slate-900/5 flex flex-col md:flex-row items-center md:justify-around py-12 px-4 md:px-20 min-h-screen'>
        
        {/* Text Content */}
        <div className='max-w-lg w-full text-center md:text-left order-2 md:order-1 mb-10 md:mb-0'>
          <h5 className='text-4xl md:text-5xl font-bold text-sky-400 mb-2'>Hello, I'm</h5>
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>Saurav Singh</h1>
          <p className='text-lg md:text-2xl text-white mb-8'>
            <span className='text-red-400'>Frontend Software Developer </span>
            specializing in modern <span className='text-green-300'>web technologies </span>
            and creating exceptional <span className='text-fuchsia-300'>user experiences.</span>
          </p>
          {/* Centered and spaced buttons + social icons */}
          <div className='flex flex-col gap-8 items-center'> {/* Increased gap */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center items-center'>
              <button className='w-52 hover:bg-sky-400 bg-blue-500 rounded-2xl px-6 py-2 text-white font-bold border-gray-600 transition'>
                <a href="#about">Explore My Portfolio</a>
              </button>
              <button className='w-52 bg-blue-500 rounded-2xl px-6 py-2 text-white font-bold border-gray-600 hover:bg-sky-400 transition'>
                <a href="../../src/assets/Saurav_Singh.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
              </button>
            </div>
            <div className='flex gap-6 mt-4 justify-center items-center'> {/* Extra gap between logo and icons */}
              {contect.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mb-2 border h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 hover:scale-110 transition'
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image with extra right margin on desktop */}
        <div className='flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0 md:mr-14'> {/* Larger gap desktop */}
          <img
            className='rounded-full border-sky-800 border-4 h-40 w-40 md:h-72 md:w-72 object-cover'
            src="../../src/assets/Saurav_Singh.JPG"
            alt="Saurav Singh"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
