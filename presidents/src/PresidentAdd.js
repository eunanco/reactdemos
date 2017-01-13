import React, { Component } from 'react'

class PresidentAdd extends Component{

constructor(){
 super()
 this.onSubmit=this.onSubmit.bind(this)
}


onSubmit(event){
 event.preventDefault()
 var fromDate = parseInt(this.refs.newFrom.value);
 var toDate = parseInt(this.refs.newTo.value);
 var namePresident = this.refs.newName.value;
 this.props.onAddPresident({name:namePresident, from: fromDate, to: toDate})
}



 render(){
   return(
     <div>
       <h3>Add New President</h3>
       <form>
         <input type="text" placeholder="Name" ref="newName" />
         <input type="number" placeholder="From" ref="newFrom" />
         <input type="number" placeholder="To" ref="newTo" />
         <button type="submit" onClick={this.onSubmit}>Add</button>
       </form>
     </div>
   )
 }

}

PresidentAdd.propTypes={
 onAddPresident:React.PropTypes.func.isRequired
}

export default PresidentAdd
