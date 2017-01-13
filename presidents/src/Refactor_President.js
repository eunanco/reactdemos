import React, { Component } from 'react'
import './president.css';

class President extends Component {
  render() {
    return (
      <tr>
        <td className="Table-cell">{this.props.name}</td>
        <td className="Table-cell">{this.props.from} - {this.props.to}</td>
        <td className="Table-cell"><button type="button">Delete</button></td>

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
