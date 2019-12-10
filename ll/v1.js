import React, { Component } from 'react';
//import './App.css';

class App extends Component {
	constructor( props ) {
		super();
	}
	render() {
		return (
			<>
				<Lander></Lander>
			</>
		)
	}
}

class Lander extends Component {
	render() {	
		let sty = {
			backgroundColor:	'gold',			
			position:					'absolute',
			top:							'20vh',
			left:							'48vw',
			width:						'4vw',
			height:						'4vh',
		}
		return (
			<>
				<div style={sty}></div>
			</>
		)
	}
}

export default App;
