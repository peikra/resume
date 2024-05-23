import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About Me"
import Skills from "../Pages/Skills"
import Resume from "../Pages/Resume"
import Portfolio from "../Pages/Portfolio"

const Publicroute = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about Me" element={<About/>} />
            <Route path="skills" element={<Skills/>} />
            <Route path="resume"  element={<Resume/>}  />
            <Route path="portfolio"  element={<Portfolio/>}   />
        </Routes>
      
    )
}

export default Publicroute