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
		return (
			<>
				<div>Lander</div>
			</>
		)
	}
}

export default App;
