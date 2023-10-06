import { useState } from "react"
import Home from "./Components'/Home/Home"
import MainGame from "./Components'/MainGame/MainGame";



function App() {

const [game,setGame]= useState(true);

const toggle=()=>{

  setGame((prev)=>!prev)
  console.log("huday")
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
