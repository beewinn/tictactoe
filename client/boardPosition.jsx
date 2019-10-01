import React from 'react';

class BoardPosition extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			toggled: false,
			value: '',
			row_position: this.props.position
		}


		this.handleClick = (e) => {

			e.preventDefault();
			var player;
			if(this.state.toggled === false && this.props.winner === undefined){
			   if(this.props.playerXTurn === true){
				   player = 'X'
			   } else {
				   player = 'O';
			   }
			   this.props.handleTurnAssignment(this.state.row_position);
   
			   this.setState({
				   value: player,
				   toggled: true
			   });

			}

		}
	}

	render() {

		if(this.props.refresh === true){
			console.log("in button to refresh",this.props.refresh);
			this.setState({
				toggled: false,
				value: '',
				row_position: this.props.position
			})
		}

    	return ( <li className="position" onClick={(e) => this.handleClick(e)}> {this.state.value} </li> )
  	}

}

export default BoardPosition;