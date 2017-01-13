import React, { Component } from 'react'

class President extends Component {

  constructor(props){
    super(props)
    this.onSubmit=this.onSubmit.bind(this)
  }


  onSubmit(event){
    event.preventDefault()
    console.log("pid:" + this.props.pid);
    this.props.onClickDelete(this.props.pid)
  }

 render() {
   return (
     <tr>
       <td>{this.props.name}</td>
       <td>{this.props.from} - {this.props.to}</td>
       <td><button type="submit" onClick={this.onSubmit}>Delete</button></td>
     </tr>
   )
 }
}

President.propTypes = {
 name: React.PropTypes.string.isRequired,
 from: React.PropTypes.number.isRequired,
 to: React.PropTypes.number.isRequired
}

export default President
