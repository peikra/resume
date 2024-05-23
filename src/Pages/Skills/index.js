import { BsInfoCircleFill } from "react-icons/bs"
import Pageheader from "../../Header"
import { Animate, AnimateKeyframes } from "react-simple-animate"
import { Line } from "rc-progress"
import "./skills.css"
import { GiSkills } from "react-icons/gi"

const Skills = ()=>{

    const skillsdata = [

        {
            label : "Front End",
            data : [
                {
                    skilname : "HTML",
                    percentage : 92
                },
                {
                    skilname : "CSS",
                    percentage : 90
                },
                {
                    skilname : "Javascript",
                    percentage : 80
                },
                {
                    skilname : "React JS",
                    percentage : 75
                }
            ]
        },

        {
            label : "Back End",
            data : [
                {
                    skilname : "Python",
                    percentage : 85
                },
                {
                    skilname : "Java",
                    percentage : 40
                },
              
            ]

        },

        {
            label : "Database",
            data : [
                {
                    skilname : "Oracle SQL",
                    percentage : 55
                },
               
            ]

        }



    ]



    return(
        <div>
                {<Pageheader text="Skills" icon={<GiSkills  size={40}/>} />}

                <div className="wraper_first">

                    {
                        skillsdata.map((item,i)=>(
                            <div className="wrapper_second" key={i}> 
                            <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform : "translatex(-200px)"
                            }}

                            end={{
                                transform : "translatex(0px)"
                            }}
                            
                            >

                                <h3 className="title">{item.label}</h3>
                                <div key={i} className="inner">
                                    {
                                        item.data.map((skilitem,j)=>(
                                            <AnimateKeyframes
                                            play
                                            duration={1}
                                            keyframes={["opacity : 1", "opacity : 0"]}
                                            iterationCount="1"
                                            
                                            
                                            >
                                                <div  key={j} className="progresbar">
                                                    <p>{skilitem.skilname}</p>
                                                    <Line
                                                    percent={skilitem.percentage}
                                                    strokeWidth="2"
                                                    strokeColor="rgb(22, 145, 145)"
                                                    trailWidth="2"
                                                    strokeLinecap="square"
                                                    
                                                    
                                                    
                                                    />


                                                </div>



                                            </AnimateKeyframes>
                                        ))
                                    }



                                </div>





                            </Animate>


                            </div>
                        ))
                    }



                </div>
            
        </div>
    )
}
export default Skills