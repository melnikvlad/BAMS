import React, { Component } from "react";
import { render } from "react-dom";
import {Main} from "./spa/Main";
import './index.css';

class App extends React.Component {
	render() {
		return(
			<Main/>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
