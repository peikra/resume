import { BsInfoCircleFill } from "react-icons/bs"
import Pageheader from "../../Header"
import "./aboutme.css"
import { Animate } from "react-simple-animate"
import { FaHtml5, FaPython, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"

const About = ()=>{

    const personalinfo = [

        {
            label : 'Name',
            value : 'Mikheil'
        },
        {
            label : "Lastname",
            value : "Peikrishvili"
        },
        {
            label : "Age",
            value : 21
        },
        {
            label : "Address",
            value : "Tbilisi,Georgia"
        },
        {
            label : "Email",
            value : "peikrishvilimisho99@mail.com"
        }

        
    ]

    


    const aboutme = "As an Information Technology student at Business and Technology University, I bring a diverse skill set and a passion for innovation to the table. With a solid foundation in Python, HTML, CSS, JavaScript, and React, complemented by a certificate in Front-end Development with React from Comm School, I am equipped to tackle a wide range of technical challenges.Although I am yet to gain formal work experience, my academic background and practical knowledge have prepared me to contribute effectively to projects and teams. I am eager to apply my skills and continue learning in a professional environment, where I can make meaningful contributions and grow as a technology professional. With a strong work ethic, adaptability, and a drive for excellence, I am committed to leveraging my skills to drive positive outcomes and exceed expectations. I am enthusiastic about the opportunity to embark on a fulfilling career journey and make valuable contributions to the field of technology."
    return(
        <div className="main">
                {<Pageheader text="About Me" icon={<BsInfoCircleFill size={40}/>} />}
                <div className="flex">

                

                    <div className="about_div">
                        <Animate
                        play
                        duration={1.5}
                        start={{
                            transform: "translateX(-900px)",

                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                        >
                        <h3 className="student">Student</h3>
                        <p className="text_about">{aboutme}</p>

                        </Animate>

                        <Animate
                        play
                        duration={1.5}
                        start={{
                            transform: "translateX(500px)",

                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                        >
                        

                        <h3 className="student">Personal Information</h3>
                        <ul className="ul">
                            {personalinfo.map((item,i)=>(
                                <li className="li" key={i}>
                                    <span className="span">{item.label}</span>
                                    <span className="span">{item.value}</span>

                                </li>
                            ))}
                        </ul>

                        </Animate>
                        


                    </div>
                   

                    <div className="service_wrapper">
                    <Animate
                        play
                        duration={1.5}
                        start={{
                            transform: "translateX(900px)",

                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                        
                        >
                        <div className="inner_content">
                            <div className="first">
                                <FaPython color="yellow" size={60}/>
                            </div>
                            <div className="second">
                            <IoLogoJavascript size={60} color="black" />
                            </div>
                            <div className="third">
                            <FaReact size={60} color="rgb(22, 145, 145)" />
                            </div>
                            <div className="four">
                            <FaHtml5 size={60} color="red" />

                            </div>

                        </div>
                        </Animate>
                     
                    </div>
                    
                </div>
            
        </div>
        
    )
}
export default About