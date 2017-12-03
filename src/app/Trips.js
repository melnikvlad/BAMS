import React, {Component} from "react";
import {Item} from "./Item";
import { render } from "react-dom";
import data from "./main.json"



export class Trips extends React.Component {
  constructor(props) {
      super(props);
      this.state = data;
  }
  render() {
    return (
      <div className="trip_main">

        <div className="col-md-12 trip_section_header">
            <p className="trip_header_title">Походы</p>
            <div className="trip_vert_line"/>
            <p className="trip_header_second_title">Маршруты и записки туриста</p>
        </div>

        <div className="col-md-12 trip_blocks">
        {this.state.trips.map((item) => {
          return <Item item={item} key={item.id}/>
        })}
          <div className="trip_devider"/>
        </div>
      </div>
    );
  }
}
