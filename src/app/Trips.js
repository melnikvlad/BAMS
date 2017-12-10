import React, {Component} from "react";
import {Item} from "./Item";
import {TripInfoBlock} from "./TripInfoBlock";
import { render } from "react-dom";
import data from "./main.json";

export class Trips extends React.Component {


topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById('myBtn').style.display = "block";
   } else {
       document.getElementById('myBtn').style.display = "none";
   }
}

  changeButtonState(id) {
    this.setState({ trip_id: id });
    document.getElementById('content_here').scrollIntoView()
  }

  handleScroll() {
    window.onscroll = this.scrollFunction
  }

  constructor(props) {
      super(props);
      this.scrollFunction = this.scrollFunction.bind(this)
      this.topFunction = this.topFunction.bind(this)
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
        </div>

        <div id="content_here" className="trip_info_container">
          <TripInfoBlock item={this.state.info.trips[this.state.trip_id - 1]}/>
        </div>


      </div>
    );
  }
}
