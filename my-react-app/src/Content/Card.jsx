function Card(props){
    const cardStyle = { 
        width: "350px", 
        paddingBottom:"10px"
    };

    const ImgStyle = {
        width: "25%",
        margin: "auto",
    };

    return(
        <div className="Card terminal" style={cardStyle}>
            <h1 className="centered">{props.name}</h1>
            <img src={props.imageLink} style={ImgStyle} className="terminal" alt={props.alt}/>
        </div>
    )
}

export default Card