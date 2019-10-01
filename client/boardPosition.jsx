import React from 'react';


function BoardPosition(props){
	const {position, value, handleClick} = props;
    
    let symbol = '';
    if (value === -1 ) {
    	symbol = 'O';
    } else if (value === 1) {
    	symbol = 'X';
    }

    return (
    	<li className="position" onClick={() => handleClick(position)}> {symbol} </li>
    )	
}

export default BoardPosition;