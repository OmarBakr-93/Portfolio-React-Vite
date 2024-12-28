import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"
import PortfolioSection from "./components/portfolio/PortfolioSection"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navbar/NavBar"


function App() {
  return (
    <>
      <Home />
      <NavBar />
      <About /> 
      <Skills />
      <Services />
      <PortfolioSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
