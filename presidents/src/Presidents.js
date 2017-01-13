import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {

 constructor(props){
   super(props)
   this.onSubmit=this.onSubmit.bind(this)
 }

 onSubmit(event){
   event.preventDefault()
   console.log(this.props.pid);
   this.props.onRemovePresident(this.props.pid)
 }

 render() {
   const presidents = this.props.presidents.map((president, i) => {
     console.log(president.name + " in Presidents")
     return (
       <td>
       <President key={"president_" + i} pid={president.pid} name={president.name} from={president.from} to={president.to} />
       <button key={"index_"} type="submit" onClick={this.onSubmit}>Delete</button>
       </td>
       )
   })
   return (
     <div>
       <table>
         <tr>
           <th>List of Presidents</th>
         </tr>
         <tr>
         {presidents}
       </tr>
       </table>
     </div>
   )
 }
}

Presidents.propTypes = {
 presidents: React.PropTypes.array.isRequired,
 onRemovePresident: React.PropTypes.func.isRequired
}

export default Presidents
