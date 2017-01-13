import React, { Component } from 'react'
import Summary from './Summary'
import Presidents from './Presidents'
import './App.css';

const presidents = [
  { pid: 1, name: "George W. Bush", from: 2001, to: 2009 },
  { pid: 2, name: "Barack Obama", from: 2009, to: 2017 },
  { pid: 3, name: "Mickey Mouse", from: 2017, to: 2021 }
]

class App extends Component {
  render() {
    return (
      <div>
        <Summary amount={presidents.length} />
        <Presidents presidents={presidents} />
      </div>
    )
  }
}

export default App
