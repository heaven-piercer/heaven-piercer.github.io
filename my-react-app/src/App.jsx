import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import About from "./Content/Content.jsx"
import ULTRAHUD from "./Content/Projects.jsx"
import Button from "./button.jsx"
import Likes from "./Content/Likes.jsx"
import "./App.css"


function App() {
  return(
    <>
      <Header/>
      <About/>
      <h1 className="determined centered display-0">CREATIONS</h1>
      <ULTRAHUD/>
      <h1 className="determined centered display-0">REACT TESTING STATION</h1>
      <Likes/>
      <Button/>
      <Footer/>
      
    </>  
    
  );
}

export default App
