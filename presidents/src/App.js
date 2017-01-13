import React, { Component } from 'react'
import Summary from './Summary'
import Presidents from './Presidents'
import PresidentAdd from './PresidentAdd'

class App extends Component {
 constructor(props){
   super(props)
   this.state = {
     presidents : [
       { pid: 1, name: "George W. Bush", from: 2001, to: 2009 },
       { pid: 2, name: "Barack Obama", from: 2009, to: 2017 },
       { pid: 3, name: "Mickey Mouse", from: 2017, to: 2021 }
     ]
   }
   this.handleNewPresident = this.handleNewPresident.bind(this)
   this.handleRemovePresident = this.handleRemovePresident.bind(this)
 }

 handleNewPresident(newPresident) {
   console.log('President ' + newPresident);
   var futurePresident = this.state.presidents.slice()
   futurePresident.push(newPresident)
   this.setState({ presidents : futurePresident })
 }

 handleRemovePresident(index) {
   var newPresidents = this.state.presidents.slice()
   newPresidents.splice(index, 1)
   this.setState({presidents: newPresidents})
 }

 render() {
   return (
     <div>
       <Summary amount={this.state.presidents.length} />
       <Presidents presidents={this.state.presidents} onRemovePresident={this.handleRemovePresident} />
       <PresidentAdd onAddPresident={this.handleNewPresident} />
     </div>
   )
 }
}

export default App
