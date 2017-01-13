import React, { Component } from 'react'

import './App.css'

class Summary extends Component {
  render() {
    return (
      <div>
      <label className="Label-header">{this.props.amount} Presidents</label>
      </div>
    )
  }
}

Summary.propTypes = {
  amount: React.PropTypes.number
}

export default Summary
