import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from './Jeopardystateless';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  SubmitQuestion = (event) => {
    let points=this.state.score
    let oldAnswer=this.state.data.answer
  
    var replacements = /(\<.*?\>)/gi;

var newAnswer = oldAnswer.replace(replacements,"")
    if(newAnswer.toLowerCase()===document.getElementById("answer").value.toLowerCase()){
      console.log('Correct! ' + newAnswer)
      alert('Correct!')
    points=points+this.state.data.value
    }else{
      console.log('Wrong')
      alert('Sorry the correct answer was: \n' + oldAnswer)
      points=points-this.state.data.value
    }
  
    this.setState({
      score:points
     
    }) 
    document.getElementById("answer").value=''
    this.getNewQuestion()
  }
  //display the results on the screen
  render() {
    if(this.state.data.category === undefined)
    return(
      <div><h1>loading</h1></div>
    )
    return (
      <div>
       <JeopardyDisplay
       score={this.state.score}
       question={this.state.data.question}
       category={this.state.data.category.title}
       answer={this.state.data.answer}
       value={this.state.data.value}
       />
       <h3>What/Who is <input id='answer'></input> ?</h3><button onClick={this.SubmitQuestion}>Submit</button>
      </div>
    );
  }
}
export default Jeopardy;