import React, { Component } from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
//import style from './App.css';
//import Tile from '../components/Tile';
import Board from '../components/Board';
import sudoku from 'sudoku-umd';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			initialBoard: '',
			board: ''
		  }
	}
	
   	reset = () => {
      const resetState = (this.state.board = '');
        this.setState({resetState});
    }

	solve = () => {
        const solved = sudoku.solve(this.state.board)
        this.setState({board: solved});
	}

    generate = () => {
		const generateState = sudoku.generate("easy") 
		this.setState({
			initialBoard: generateState,
			board: generateState
		});
	}

	/*
	>>> sudoku.generate("easy")
	"672819345193..4862485..3197824137659761945283359...714.38..1426.174.6.38.463...71"
	 
	>>> sudoku.generate("medium")
	"8.4.71.9.976.3....5.196....3.7495...692183...4.5726..92483591..169847...753612984"
	 
	>>> sudoku.generate("hard")
	".17..69..356194.2..89..71.6.65...273872563419.43...685521......798..53..634...59."
*/

    render() {

        return (
			<div className="App">
				<h1>Sudoku</h1>
				<Board value={console.log(this.state.board.split(""))}/>
				<div className="buttons">
					<button>Check</button>
					<button onClick= {this.generate} >New Game </button>
					<button onClick= {this.solve}>Solve</button>
					<button onClick= {this.reset}>Reset</button>
				</div>
			</div>
        );
    }
}

export default hot(module)(App);
