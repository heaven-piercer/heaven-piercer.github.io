import Card from "./Card.jsx"
import DarkHeart from "../assets/deltaruneicon.webp"

function Likes(){
    return(
        <div className="terminal">
            <h1>GAMES:</h1>
            <Card name="DELTARUNE" imageLink={DarkHeart} alt="DELTARUNE Logo (Darkheart)"/>
        </div>
    )
    
}

export default Likes