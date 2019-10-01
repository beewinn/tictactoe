import React from 'react';
import BoardPosition from './boardPosition.jsx';

function Board(props){
	const {board, handleClick} = props;

	var boardRows = [];
	for(var row = 0; row < board.length; row++){
		let boardRow = (
			<ul>
				{board[row].map((value, idx) => <BoardPosition position={[row, idx]} value={value} handleClick={handleClick} />)}
			</ul>
		)
	
		boardRows.push(boardRow);
	}

	return (
		<div>{boardRows}</div>
	)
}

export default Board;