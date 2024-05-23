import "./home.css"
import resume from  "../../assets/Mikheil-Peikrishvili-Resume.pdf"

const Home = ()=>{
    
    return(
        <section className="section_home">
            
            <div className="home-container">
                <h1 className="home-text">
                    Hello,I'm Misho
                </h1>
                <button className="cv"><a className="cv_a" href={resume} download='Mikheil-Peikrishvili-Resume'>Download CV</a></button>

        </div>

        </section>
        
        
    )
}
export default Home