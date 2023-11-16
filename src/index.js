

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import calculateWinner from './helpers/calculateWinner';
// import Board from './components/board/Board';
// import GameInfo from './components/game-info/GameInfo';

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null),
//         },
//       ],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares,
//         },
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: step % 2 === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else if (current.squares.every((square) => square !== null)) {
//     status = 'It\'s a tie!';
//   } else {
//     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//   }

//     return (
//       <React.Fragment>
//         <h1>Tic Tac Toe</h1>
//         <section className="game">
//           <GameInfo
//             status={status}
//             winner={winner}
//             xIsNext={this.state.xIsNext}
//           />
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//             jumpTo={(i) => this.jumpTo(i)}
//           />
//         </section>
//       </React.Fragment>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Game />);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import calculateWinner from './helpers/calculateWinner';
import Board from './components/board/Board';
import GameInfo from './components/game-info/GameInfo';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      score: {
        X: 0,
        O: 0,
      },
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    const winner = calculateWinner(squares);
    
    if (winner) {
      const newScore = { ...this.state.score };
      newScore[winner]++;
      this.setState({ score: newScore });
    }

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (current.squares.every((square) => square !== null)) {
      status = 'It\'s a tie!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <section className="game">
          <GameInfo
            status={status}
            winner={winner}
            xIsNext={this.state.xIsNext}
          />
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            jumpTo={(i) => this.jumpTo(i)}
          />
          <div className="scoreboard">
            <h2>Scoreboard</h2>
            <p>X: {this.state.score.X}</p>
            <p>O: {this.state.score.O}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
