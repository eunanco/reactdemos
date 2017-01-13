import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import './tictactoe.css';

function Square(props) {
    return (
      <button className="square" onClick={() => props.onClickInBoard()}>
        {props.value}
      </button>
    );
  }

class Board extends Component {

  //Construct a squares variable as an array of size 9 prefilled with null values
  //Then pass itto the Squares class via props
  // - does this mean you can remove the constructor in Squares class???
  // constructor(){
  //   super();
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true
  //   };
  // }

  // handleClick(i){
  //   const squares = this.state.squares.slice();
  //   if(calculateWinner(squares)){
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares : squares,
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClickInBoard={() => this.props.onClickInGame(i)}/>;
  }

  render() {
    // const winner = calculateWinner(this.props.squares);
    //
    // let status;
    //
    // if(winner){
    //   status = 'Winner:' + winner;
    // }
    // else {
    //   status = 'Next player:' + (this.props.xIsNext ? 'X' : 'O');
    // };

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor() {
  super();
  this.state = {
    history: [{
      squares: Array(9).fill(null),
      xIsNext: true,
      aMove: null
    }],
    stepNumber: 0
  };
}

  handleClickInGame(i){
    //History is an array of objects
    //Each object has a property - squares - which is an array of size 9
    //current is an object whose porperty squares is an array of the latest version of the tictactoe grid
    //squares is an array of size 9 representing the latest version of the tictactoe grid

    const rowMap ={
      0:1,
      1:1,
      2:1,
      3:2,
      4:2,
      5:2,
      6:3,
      7:3,
      8:3
    };

    const colMap ={
      0:1,
      1:2,
      2:3,
      3:1,
      4:2,
      5:3,
      6:1,
      7:2,
      8:3
    };


    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const xIsNext = current.xIsNext;
    squares[i] = xIsNext ? 'X' : 'O';
    let coordinate;
    coordinate = '(' + rowMap[i] + ',' + colMap[i] + ')' ;


    this.setState({
      history: history.concat([{
        squares: squares,
        xIsNext: !xIsNext,
        aMove: {played: squares[i], location: coordinate}
      }]),
      stepNumber: history.length
    });

  }



//xIsNext if (move % 2) will return 0 or 1 (false or true)
//xIsNext is initially true for move 1 (1 % 2) = 1 i.e. true, therefore xIsNext = false
//if 0 then xIsNext should be true, else false
jumpTo(move) {
//Old
  // this.setState({
  //   stepNumber: move,
  //   xIsNext: (move % 2) ? false : true
  // });

  //New

    this.setState({
      stepNumber: move,
      xIsNext: (move % 2) ? false : true
    });
}





  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      //const desc = move ? 'Move #' + move  : 'Game start';
      const desc = move ? step.aMove.played + ' selected ' + step.aMove.location : 'Game Start';
      console.log('move'+ move + 'step length' + history.length);
      if(move !== history.length -1){
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        );
      }
      else {
        return (
            <li className='Bold-line' key={move}>
              <a href="#" className='Bold-line' onClick={() => this.jumpTo(move)}>{desc}</a>
              </li>
            );
        }
      });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClickInGame={(i) => this.handleClickInGame(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
      return squares[a];
    }
  }
  return null;
}
