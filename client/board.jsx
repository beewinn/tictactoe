import React from 'react';
import BoardPosition from './boardPosition.jsx';

function Board(props){

	var boardRows = [];
	for(var i = 0; i < 3; i++){
		boardRows.push(<BoardPosition reset={props.reset} winner={props.winner} position={[props.rowNum, i]} playerXTurn={props.playerXTurn} handleTurnAssignment={props.handleTurnAssignment} />)
	}

	return (
		<ul>{boardRows}</ul>
	)
}

export default Board;