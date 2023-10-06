import { useState } from "react";
import "./Dicerole.css"
const Dicerole = ({currentdice,Setcurrentdice,roleDice}) => {

    

    
    return (
        <div className="dicecontainer">

            <div className="dice" onClick={roleDice}>

                <img src={`/public/Image/Dices/dice_${currentdice}.png`} alt="dice 1" />
            </div>
            <p>click on dice role</p>
            
        </div>
    );
};

export default Dicerole;