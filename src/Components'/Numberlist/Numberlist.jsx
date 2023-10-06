import { useState } from "react";
import BOX from "../BOX/BOX";
import "./Numberlist.css"

const Numberlist = ({selectnumber,Setselectnumber,error,Seterror}) => {
  

  const numberlist = [1, 2, 3, 4, 5, 6];
  const numberSelector=(value)=>{
    Setselectnumber(value)
    Seterror("")
  }
  return (
    <div >
      <p>{error}</p>
      <div className="flex">
        {numberlist.map((value, i) => (
          <BOX
            key={i}
            value={value}
            onClick={() =>numberSelector(value) }
            isSelected={value === selectnumber}
          >{value}</BOX>
        ))}
      </div>
      <p className="text">Select number</p>
    </div>
  );
};

export default Numberlist;
