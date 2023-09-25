import reset from "./styles/reset.css"
import global from "./styles/globalStyles.css"
import app from "./styles/app.css"
import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { AboutMeSection } from "./components/AboutMeSection"
import { TechSection } from "./components/TechSection"
import { ProjectSection } from "./components/ProjectSection"
import { Footer } from "./components/Footer"
import { technologies } from "./data/technologies.js"
import { projects } from "./data/projects.js"

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <AboutMeSection/>
      <TechSection technologies={technologies}/>
      <ProjectSection projects={projects}/>
      <Footer/>
    </>
  )
}

export default App
