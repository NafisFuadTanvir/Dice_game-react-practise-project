import { useState } from "react"
import Home from "./Components'/Home/Home"
import MainGame from "./Components'/MainGame/MainGame";



function App() {

const [game,setGame]= useState(false);

const toggle=()=>{

  setGame((prev)=>!prev)
  
}
  return (
   <div>

    {
      game ? <MainGame></MainGame> : <Home toggle={toggle}></Home>
    }

   </div>
  )
}

export default App
