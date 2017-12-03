import React, {Component} from "react";
import {Item} from "./Item";
import { render } from "react-dom";
import data from "./main.json"



export class Trips extends React.Component {

  changeButtonState(id) {
    this.setState({ trip_id: id },
  () => console.log(this.state.trip_id)
  );
}

  constructor(props) {
      super(props);
      this.changeButtonState = this.changeButtonState.bind(this)
      this.state = {
        info: data,
        trip_id: 1
      };
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
        {this.state.info.trips.map((item) => {
         return <Item item={item} key={item.id} buttonClick={this.changeButtonState}/>
        })}
          <div className="trip_devider"/>
          <p>{this.state.trip_id}</p>
        </div>
      </div>
    );
  }
}
