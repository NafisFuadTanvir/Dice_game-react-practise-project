import Numbershow from "../Number Show/Numbershow";
import Numberlist from "../Numberlist/Numberlist";
import "./MainGame.css"

const MainGame = () => {
    return (
        <div >

            <div className="pashapashi">
              
            <Numbershow></Numbershow>
            <Numberlist></Numberlist>

            </div>

            
            
        </div>
    );
};

export default MainGame;