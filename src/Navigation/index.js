import { NavLink } from "react-router-dom"
import "./navigation.css"
import { IoReorderThreeOutline } from "react-icons/io5"
import { useState } from "react"


const Navigation = ()=>{

  const [show,setshow] = useState(false)



    const navigation = [{
        path : "/",
        name : "Home"
      },
      {
        path : "/about Me",
        name : "About Me"
      },
      {
        path : "/skills",
        name : "Skills"
      },
      {
        path : "/resume",
        name : "Resume"
      },
      {
        path : "/portfolio",
        name : "Portfolio"
      },
     
      ]

      const click = (e)=>{

        setshow(!show)

        

      }

      return(
        
            <nav className="navigation">
                <ul className="for_items">
                    {navigation?.map((item,i)=>(
                        <li key={i}>
                            <NavLink to={item.path} className="home">{item.name}</NavLink>
                        </li>
                    ))}

                    
                </ul>
                {<IoReorderThreeOutline size={40} onClick={click} className="sidebar" />}

                <ul className={`for_items1 ${show ? "show" : ""}`}>
                    {navigation?.map((item,i)=>(
                        <li key={i}>
                            <NavLink to={item.path} className="home1">{item.name}</NavLink>
                        </li>
                    ))}

                    
                </ul>
                
                
            </nav>
        
      )
}

export default Navigation