import React, { Component } from 'react'
import President from './President'
import './president.css';
import './uiToolkit.css';

class Presidents extends Component {
  render() {

    const displayList = this.props.presidents.map((currentValue, currentIndex) => {
      return(
        <President key={"president_" + currentIndex} name={currentValue.name} from={currentValue.from} to={currentValue.to} />
      )
    })

    return (
      <div>
       <div className="Body-text">List of Presidents</div>
        <table className="Table">
        <tbody>
          <tr className="Table-row">
            <th className="Table-cell-header">Name</th>
            <th className="Table-cell-header">From - To</th>
            <th className="Table-cell-header">Action</th>
          </tr>
        </tbody>
          <tbody>
            {displayList}
          </tbody>
        </table>
      </div>
    )
  }
}

Presidents.propTypes = {
  presidents: React.PropTypes.array.isRequired
}

export default Presidents
