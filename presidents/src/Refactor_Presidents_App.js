import React, { Component } from 'react'
import Summary from './Summary'
import Presidents from './Presidents'
import PresidentAdd from './PresidentAdd'
import './App.css';

const presidents = [
  { pid: 1, name: "George W. Bush", from: 2001, to: 2009 },
  { pid: 2, name: "Barack Obama", from: 2009, to: 2017 },
  { pid: 3, name: "Mickey Mouse", from: 2017, to: 2021 }
]

class App extends Component {



handleAddPresident(president){
 console.log("got to here");
 console.log('new president:' + president);
}


  render() {
    return (
      <div>
        <Summary amount={presidents.length} />
        <Presidents presidents={presidents} />
        <PresidentAdd onClickAdd={(president) => this.handleAddPresident(president)}/>
      </div>
    )
  }
}

export default App
