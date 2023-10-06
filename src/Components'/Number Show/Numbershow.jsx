import React from 'react';
import "./Numbershow.css"

const Numbershow = ({score}) => {
    return (
        <div className='scorecotainer'>
            <h1>{score}</h1>
            <p>Total Score</p>
            
        </div>
    );
};

export default Numbershow;