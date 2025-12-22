
import react from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/about.jsx'
import Education from './components/Education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'
import Skills from './components/Skills/Skills.jsx'
import Footer from './components/Footer/Footer.jsx'
import Work from './components/Work/Work.jsx'
import Experience from './components/Experience/Experience.jsx'



function App() {

  return (
    <div className="bg-[#050414]">
      <div>
        <div>
          <Navbar />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
