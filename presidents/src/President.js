import React, { Component } from 'react'

class President extends Component {



 render() {
   return (
     <li>
       <h4>{this.props.name}</h4>
       <p>{this.props.from} - {this.props.to}</p>
     </li>
   )
 }
}

President.propTypes = {
 name: React.PropTypes.string.isRequired,
 from: React.PropTypes.number.isRequired,
 to: React.PropTypes.number.isRequired
}

export default President
