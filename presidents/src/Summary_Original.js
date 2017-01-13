import React, { Component } from 'react'

class Summary extends Component {
  render() {
    return (
      <h1>{this.props.amount} Presidents</h1>
    )
  }
}

Summary.propTypes = {
  amount: React.PropTypes.number
}

export default Summary
