import { BsInfoCircleFill } from "react-icons/bs"
import Pageheader from "../../Header"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import "./resume.css"
import { GrResume } from "react-icons/gr"

const Resume = ()=>{

    const education = {
        Education : [
            {
                university : "Business And Technology University",
                faculty : "Information Technology",
                time : "2021-Present"
            },
            {
                university : "Comm School",
                faculty : "Front-End-With React",
                time : "2023-2024"
            }
        ]

        



    }
       



    return(
        <div>
                {<Pageheader text="Resume" icon={<GrResume size={40}/>} />}

                <div className="education">
                    <h3 className="educ">Education</h3>
                    <VerticalTimeline
                    layout={"1-column"}
                    lineColor="rgb(22, 145, 145)"
                    
                    
                    >
                        {
                            education.Education.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="vertical"
                                
                                >
                                    <div>
                                        <h3 className="name">{item.university}</h3>

                                        <h4 className="faculty">{item.faculty}</h4>

                                        <p className="time">{item.time}</p>



                                    </div>



                                </VerticalTimelineElement>
                            ))
                        }



                    </VerticalTimeline>

                </div>
            
        </div>
    )
}
export default Resume