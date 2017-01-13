import React from 'react';
import ReactDOM from 'react-dom';

//We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
//This is called "mounting" in React.

class Clock extends React.Component{
  //Add a class constructor that assigns the initial this.state
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }


//These methods are called "lifecycle hooks".
//The componentDidMount() hook runs after the component output has been rendered to the DOM.
//This is a good place to set up a timer:
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }


//Implement the tick() method that runs every second.
//It will use this.setState() to schedule updates to the component local state:
  tick(){
    this.setState({
      date: new Date()
    })
  }



  render() {
    return (
      <div>
        <h1>Clock as class: with interval </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />, document.getElementById('root')
);
