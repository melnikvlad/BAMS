import React, { Component } from "react";
import { render } from "react-dom";
import {Main} from "./spa/Main";


class App extends React.Component {
	render() {
		return(
			<Main/>
		);
	}
}

render(<App/>,  window.document.getElementById("app"));
