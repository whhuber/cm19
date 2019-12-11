import React, { Component } from 'react';
//import './App.css';

class App extends Component {
	constructor( props ) {
		super( props );
		this.name = "HOLLY";
		this.state = { anz: 0, lis: "" };
		//this.anz = 0;
		//this.children = new Array( 100 );
	}
	render() {
		//this.th = { ob: this };
		return (
			<>
				<div>anz = {this.state.anz}, lis = {this.state.lis}</div>
				<Test boss="9"/><br/>
				<Werni boss={this}></Werni><br/>
			</>
		);
	}
}
class Werni extends Component {
	constructor( props ) {
		super( props );
		this.boss = props.boss;
		this.boss.setState( { anz: 1, lis: "Werni" } );
	}
	render() {
		//alert( Object.keys( props ) );
		alert( Object.keys( this.boss ) );
		alert( "EFEU = " + this.boss.name );
		//this.boss.children[ this.boss.anz ] = this;
		//this.boss.anz++;
		return (
			<>WERNI</>
		);
	}
}

function Test( props ) {
	//alert( Object.keys( props ) );
	//alert( props.boss.props );
	//alert( Object.keys( props.boss.props ) );
	return( "Hattu" + props.boss );
}

export default App;
