import React, { Component } from 'react';
//import './App.css';

class App extends Component {
	constructor( props ) {
		super();
	}
	render() {
		return (
			<>
				<Scenery></Scenery>
				<Lander></Lander>
			</>
		)
	}
}

class Lander extends Component {
	constructor( props ) {
		super( props );
	}
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

class Scenery extends Component {
	render() {
		return ( 
			<>
				<div style={{backgroundColor: 'black', position: 'absolute', 
					top: '0', left: '0', width: '100vw', height: '90vh'}}></div>
				<div style={{backgroundColor: 'silver', position: 'absolute', 
					top: '90vh', left: '0', width: '100vw', height: '10vh'}}></div>
			</>
		)
	}
}

export default App;
