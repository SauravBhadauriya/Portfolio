import { useState } from 'react'

import './App.css'
import Navbar from './components/Header/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import About from './components/About/About'
import SkilsExpertise from './components/SkilsExpertise/SkilsExpertise'
import ProfessionalStrengths from './components/ProfessionalStrengths/ProfessionalStrengths'
import Project from './components/Projects/Project'
import Education from './components/Education/Education'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <About/>
      <SkilsExpertise/>
      <ProfessionalStrengths/>
      <Project/>
      <Education/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
