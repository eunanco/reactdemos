import React, { Component } from 'react'
import './president.css';
import './uiToolkit.css';

class PresidentAdd extends Component{

  constructor(){
    super();
    this.state = {
      president:null
    };
  }


  render() {


    console.log()
    const inputList =
      <form>
        <div>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="text" name="from" placeholder="From"></input>
          <input type="text" name="to" placeholder="To"></input>
          <button type="submit" onClick={() => this.props.onClickAdd(this.state.president)}></button>
        </div>
      </form>

      return (
        <div>
          <br></br>
          <br></br>
          <label className="Body-text Color-allstate-primary">Add a President</label>
            {inputList}
         </div>
      )
  }

}

export default PresidentAdd
