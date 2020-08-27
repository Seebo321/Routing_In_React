import React from 'react';

function JeopardyDisplay (props){

    return (
        <div>
        <h1>Your Score: {props.score}</h1>
         <p><strong>The Category is:</strong></p>
       <p>{props.category}</p> 
        <p><strong>Question:</strong></p>
        {props.question}
        {/* <br/>
        Your answer is:<br/>
        {props.answer} */}
        <br/>
        <h4>Point Value</h4>
        <h4>{props.value}</h4>
        </div>
      );
}

export default JeopardyDisplay