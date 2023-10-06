import Dicerole from "../Dicerole/Dicerole";
import Numbershow from "../Number Show/Numbershow";
import Numberlist from "../Numberlist/Numberlist";
import "./MainGame.css"
import { useState } from "react";

const MainGame = () => {

    const [score,setScore]= useState(0);
    const [selectnumber, Setselectnumber] = useState();
    const [currentdice,Setcurrentdice]= useState(1);
    const[error,Seterror]= useState("");

    const genarateRandom= (min,max)=>{
            
        return Math.floor(Math.random()* (max-min)+min)
    }

    const roleDice= ()=>{
        // if(!selectnumber) {
            
        //     Seterror("You have not selected any number")

        //     return;
        // }

       

        const randomnumber= genarateRandom(1,7)
        Setcurrentdice((prev)=>randomnumber)


        

        if(selectnumber===randomnumber){
            setScore((prev)=>prev+randomnumber)
        }
        else{
            setScore((prev)=>prev-2)
        }
        Setselectnumber(undefined)
        
    }

    return (
        <div >

            <div className="pashapashi">
              
            <Numbershow score={score}></Numbershow>
            <Numberlist Seterror={Seterror} error={error} selectnumber={selectnumber} Setselectnumber={Setselectnumber}></Numberlist>

            </div>

            <Dicerole currentdice={currentdice} roleDice={roleDice} ></Dicerole>
            
        </div>
    );
};

export default MainGame;