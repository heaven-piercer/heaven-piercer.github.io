

function Button(){
    
    const singleClickHandler = (e) => {
        if(e.target.textContent != "OUCH"){
            e.target.textContent = "Yay!!!";
        }
    }
    const doubleClickHandler = (e) => e.target.textContent = "OUCH";    
    return(
        <button onClick={(e) => singleClickHandler(e)} onDoubleClick={(e) => doubleClickHandler(e)}id="coolbutton">
            CLICK ME
        </button>
    )
}


export default Button