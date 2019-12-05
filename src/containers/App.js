import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Board from '../components/Board';
import sudoku from 'sudoku-umd';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialBoard: '',
			board: '',
			level: '',
		}
	}

	generate = () => {
		document.getElementById('start-shadow').classList.add('shadow');
		const generateState = sudoku.generate(this.state.level);
		this.setState({
			initialBoard: generateState,
			board: generateState
		});
	}
	
	solve = () => {
		const solved = sudoku.solve(this.state.board)
		if(solved) {
			this.setState({ board: solved});
		}else{
			alert('There must be an error in your solution...')
		}
	}
	
	check = () => {
		const string = this.state.board;
		const checked = sudoku.solve(string)
		if  ((string.indexOf('.')) > -1 && checked) {
			alert('All good !!! Keep going this way')
		}else if  (string === checked){
			alert("CONGRATULATIONS!!! You're not retarded ")
		}else {
			alert('You lame!')
		}
	}
		
		handleChange = event => {
			this.setState({ level: event.target.value });
		}
		
		handleInputValue = (event, id) => {
			
			const inputId = event.target.id
			const inputValue = Number(event.target.value++)
			const board = this.state.board;
			
			const newArray = Object.assign([], board, {[inputId]: inputValue });
			
			console.log("id " + inputId)
			console.log("inputValue " + inputValue)
			console.log("present board state " + this.state.board)
			console.log("solved " + sudoku.solve(this.state.board))
			
			this.setState({
				board: newArray.join("")
			});
			
		}
				reset = () => {
					const resetState = (this.state.board = this.state.initialBoard);
					this.setState({ board: resetState });
				}
		
		render() {

		return (
			<div className="main">
				<div className='title'></div>
				
				<select
					name='select'
					onChange={this.handleChange}
					value={this.state.level}
					className="drop-down"
				>
					<option value="easy">Toddler</option>
					<option value="medium">Junior</option>
					<option value="hard">Teenager</option>
					<option value="very-hard">Student</option>
					<option value="insane">Graduate</option>
					<option value="inhuman">Adult</option>
				</select>

				<Board
					onSubmit={this.handleSubmit}
					board={this.state.board.split('')}
					initialBoard={this.state.initialBoard.split('')}
					onChange={this.handleInputValue}
				/>

				<div className="buttons">
					<button onClick={this.check}>Check</button>
					<button onClick={this.generate}>New Game </button>
					<button onClick={this.solve}>Solve</button>
					<button onClick={this.reset}>Reset</button>
				</div>

			</div>
		);
	}
}

export default hot(module)(App);