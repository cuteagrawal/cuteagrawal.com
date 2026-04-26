import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" style={{ display: 'none' }} aria-hidden="true" />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
