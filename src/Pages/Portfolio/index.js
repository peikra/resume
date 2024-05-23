import { BsInfoCircleFill } from "react-icons/bs"
import Pageheader from "../../Header"
import image1 from  "../../images/pankaj-patel-bYiw48KLbmw-unsplash.jpg"
import image2 from "../../images/pexels-karolina-grabowska-5632397.jpg"
import image3 from "../../images/pexels-rsantos1232-3888151.jpg"
import image4 from "../../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg"
import "./portfolio.css"
import { NavLink } from "react-router-dom"
import { Animate } from "react-simple-animate"
import { CgWebsite } from "react-icons/cg"

const Portfolio = ()=>{

    const sites_data = [

        {
            name : "Markup",
            image : image1,
            link : "https://peikra.github.io/gamocda/"
        },

        {
            name : "Products",
            image : image2,
            link : "https://peikra.github.io/final_exam/"
        },
        {
            name : "Authorization",
            image : image3,
            link : "https://midterm-react-tawny.vercel.app/"
        },

        {
            name : "Movies",
            image : image4,
            link : "https://peikra.github.io/davaleba3/"
        },



    ]

   



    return(
        <div className="main_main">
                {<Pageheader text="Portfolio" icon={<CgWebsite size={40}/>} />}

            <div className="for_texts_images">
                {
                    sites_data.map((item,i)=>(
                        
                        <div  className={"for_images"+i} key={i}> 
                   
                            <img className={"image"+i} src={item.image} />
                            
                            <h3 className={"image_name"+i}>{item.name}</h3>
                            <NavLink className="underline" to={item.link} target="_blank"><button className={"visit"+i}>Visit</button></NavLink>

                           
                        

                          

                        </div>
                       
                    ))
                }
            </div>
            
        </div>
    )
}
export default Portfolio