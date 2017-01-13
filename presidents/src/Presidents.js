import React, { Component } from 'react'
import President from './President'

class Presidents extends Component {


 render() {
   const presidents = this.props.presidents.map((president, i) => {
     return (
       <tbody>
        <President key={"president_" + i} pid={president.pid} name={president.name} from={president.from} to={president.to} onClickDelete={() => this.props.onRemovePresident(i)}/>
       </tbody>
       )
   })
   return (
     <div>
       <table>
       <tbody>
         <tr>
           <th>List of Presidents</th>
         </tr>
         </tbody>
          {presidents}
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
