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
		this.state = { hei: 0, spe: 0 };	
		this.throttle=this.throttle.bind(this);
		this.timepasses=this.timepasses.bind(this);
	}
	componentDidMount() {
		document.addEventListener( 'keydown', this.throttle, false );
		window.setTimeout( this.timepasses, 50 );
	}
	render() {	
		let sty = {
			backgroundColor:	'gold',			
			position:					'absolute',
			top:							this.state.hei + 'vh',
			left:							'48vw',
			width:						'4vw',
			height:						'4vh',
		}
		return (
			<>
				<div style={sty}>{this.state.hei}</div>
			</>
		)
	}
	throttle() {	
		this.act( 2.5 );
	}
	timepasses() {
		this.act( 0 );
		window.setTimeout( this.timepasses, 50 );
	}
	act( thro ) {
		let newspe = this.state.spe + 0.1 - thro;	
		let newhei = this.state.hei + newspe;	
		if ( newhei >= 86 ) {		
			newhei = 86; newspe = 0;
			if ( this.state.spe > 1 ) { alert( "CRASH" ); }
		}
		this.setState({ hei: newhei, spe: newspe });
	}
	componentWillUnmount() {
		document.removeEventListener( 'keydown', this.throttle );
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
