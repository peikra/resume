import "./header.css"

const Pageheader= (props)=>{

    return(
        <div className="header">
            <h2 className="text">{props.text}</h2>
            <span className="icon">{props.icon}</span>
        </div>

    )

}

export default Pageheader