import UltrahudLogo from "../assets/ultrahudlogo.png"

function ULTRAHUD(){
    return(
        <div className="terminal">
            <h1 className="header display-1 determined">ULTRAHUD</h1>
            <img src={UltrahudLogo} alt="ULTRAHUD Logo" height="250px" width="auto"/>
            <p className="text-center align-middle">A UI modification for TF2 which mimics the aesthetic of the one found in ULTRAKILL.
                   ULTRAHUD has many new features, and has been a project I have been working on for over a year now. It is built off of the popular TF2 HUD rayshud.
            </p>
        </div>  
    )
}

export default ULTRAHUD