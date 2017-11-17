import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import './app.css';

class App extends Component {
	
	logGreeting = () => {
		console.log('App here!');
	}

	greeting = 'Hello from React!!';
	
	render() {
		this.logGreeting();
		return (
			<div id = "container" className="inner-container">
				<LoginContainer />
			</div>
		);
	}
}

export default App;