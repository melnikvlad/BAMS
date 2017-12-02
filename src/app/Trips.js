import React, {Component} from "react";
import {List} from "./List";
import { render } from "react-dom";
import data from "./main.json"



export class Trips extends React.Component {
  constructor(props) {
      super(props);
      this.state = data;
  }
  render() {
    return (
      <div className="container-fluid col-md-12 trip_main">

        <div className="container-fluid col-md-10 trip_section_header">
            <p className="trip_header_title">Походы</p>
            <div className="trip_vert_line"/>
            <p className="trip_header_second_title">Маршруты и записки туриста</p>
        </div>

        <List list={this.state.list}/>

      </div>
    );
  }
}
