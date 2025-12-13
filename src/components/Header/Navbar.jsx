import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900/5 text-white pl-8 pr-8 md:pl-20 md:pr-20 top-0 sticky z-20">
      {/* Logo with responsive gap */}
      <h1 className="text-2xl font-bold hover:text-sky-600 mr-4 md:mr-8">SAURAV SINGH</h1>
      
      {/* Desktop navigation links, hidden on mobile */}
      <ul className="hidden md:flex space-x-8 font-bold">
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#">Home</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#about">About</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#skills">Skills</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#project">Projects</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#education">Education</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-sky-600" href="#contact">Contact</a>
        </li>
      </ul>
      
      {/* Mobile menu button, shows only on mobile */}
      <button className="md:hidden text-3xl ml-4" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      
      {/* Mobile dropdown menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-slate-900 text-white md:hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 p-4 font-bold">
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#education">
              Education
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} className="hover:text-sky-600" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
