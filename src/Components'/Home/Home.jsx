import "./Home.css"
const Home = ({toggle}) => {

   
    return (
        <div className="Container">

          <div className="image">
            <img  src="/public/Image/dice.png" alt="" />
          </div>

          <div className="text">
            <h1>DICE GAME</h1>
            <button onClick={toggle} className="btn">Play Now</button>

          </div>
            
        </div>
    );
};

export default Home;