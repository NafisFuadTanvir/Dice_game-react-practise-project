import { useState } from "react";
import BOX from "../BOX/BOX";
import "./Numberlist.css"

const Numberlist = () => {
  const [selectnumber, Setselectnumber] = useState();

  const numberlist = [1, 2, 3, 4, 5, 6];
  return (
    <div >
      <div className="flex">
        {numberlist.map((value, i) => (
          <BOX
            key={i}
            value={value}
            onClick={() => Setselectnumber(value)}
            isSelected={value === selectnumber}
          ></BOX>
        ))}
      </div>
      <p className="text">Select number</p>
    </div>
  );
};

export default Numberlist;
