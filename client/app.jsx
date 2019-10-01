import React from 'react';
import Board from './board.jsx';


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			playerXTurn: true,
			displayPlayer: 'X',
			winner: undefined,
			board: [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			],
			reset: false
		}

		this.checkStraightWins = this.checkStraightWins.bind(this);
		this.checkDiagonalWins = this.checkDiagonalWins.bind(this);

		// this.handleRefreshClick = (e) => {
		// 	e.preventDefault();
		// 	console.log("click is happening..")
		// 	// this.handleBtnRefresh();

		// 	this.setState({
		// 		playerXTurn: true,
		// 	    displayPlayer: 'X',
		// 	    winner: undefined,
		// 	    board: [
		// 		    [0, 0, 0],
		// 		    [0, 0, 0],
		// 		    [0, 0, 0]
		// 	    ],
		// 	    reset: true
		// 	})
		// }

		// // this.handleBtnRefresh = () => {
		// // 	this.setState({
		// // 	    reset: true
		// // 	})
		// // }

		this.handleTurnAssignment = (position) => {
			var player;
			if(this.state.playerXTurn === true){
				player = 'O';
			} else {
				player = 'X';
			}

			var gameUpdates = this.updateBoardStatus(position);

			this.setState({
				displayPlayer: player,
				playerXTurn: !this.state.playerXTurn,
				board: gameUpdates['board'],
			 	winner: gameUpdates['winner']
			})
		}

		this.updateBoardStatus = (position) => {
			var currentBoard = JSON.parse(JSON.stringify(this.state.board));
			var row, col;
			row = position[0];
			col = position[1];

			if(this.state.playerXTurn === true){
				currentBoard[row][col] = 1;
			} else {
				currentBoard[row][col] = -1;
			}
			//check for wins
			var winner = undefined;
			if(this.checkForWins(currentBoard)){
				winner = this.state.displayPlayer;
			}

			return {board: currentBoard, winner: winner}
		}
	}

	checkForWins(board){

		var straightWin = this.checkStraightWins(board);
		var diagonalWin = this.checkDiagonalWins(board);

		if(Math.abs(straightWin) === 3 || Math.abs(diagonalWin) === 3){
			return true;
		}

		return false;

	}

	checkStraightWins(board){
		var horizontalSum = 0;
		var verticalSum = 0;
		var winningSum;
		for(var i = 0; i < board.length; i++){
			verticalSum = 0;
			horizontalSum = 0;
			for(var x = 0; x < board.length; x++){
				horizontalSum = horizontalSum + board[i][x]
				verticalSum = verticalSum + board[x][i];
			}

			if(Math.abs(horizontalSum) === 3){
				winningSum = horizontalSum;
				break;
			}

			if(Math.abs(verticalSum) === 3){
				winningSum = verticalSum;
				break;
			}

		}

		return winningSum;
	}

	checkDiagonalWins(board){
		var rightSum = board[0][2] + board[1][1] + board[2][0];
		var leftSum = board[0][0] + board[1][1] + board[2][2];
		var winningSum;
		if(Math.abs(rightSum) === 3){
			return rightSum;
		}

		if(Math.abs(leftSum) === 3){
			return leftSum;
		}

		return winningSum;
	}



	render() {
    	return (
    		<div>
    			<h1>Tic Tac Toe</h1>
    			<p>Player Turn: {this.state.displayPlayer} </p>
    			<p> Winner: {this.state.winner}</p>
	    		<Board reset={this.state.reset} winner={this.state.winner} playerXTurn={this.state.playerXTurn} handleTurnAssignment={this.handleTurnAssignment} rowNum={0}/>
	    		<Board reset={this.state.reset} winner={this.state.winner} playerXTurn={this.state.playerXTurn} handleTurnAssignment={this.handleTurnAssignment} rowNum={1}/>
	    		<Board reset={this.state.reset} winner={this.state.winner} playerXTurn={this.state.playerXTurn} handleTurnAssignment={this.handleTurnAssignment} rowNum={2}/>
    		</div> 
    	)
  	}

}
//<button onClick={(e) => this.handleRefreshClick(e)}> Refresh Game</button>

export default App;