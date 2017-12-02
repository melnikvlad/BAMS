import React, {Component} from "react";
import {List} from "./List";
import { render } from "react-dom";



export class Trips extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        list: [{
            id: 1,
            text: "item 1"
          },{
            id: 2,
            text: "item 2"
          },{
            id: 3,
            text: "item 3"
          },{
            id: 4,
            text: "item 4"
          }]
      }
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
