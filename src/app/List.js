import React from "react";
import {Item} from "./Item";
import { render } from "react-dom";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="trip_list">
          {this.props.trips.map((item) => {
            return <Item item={item} key={item.id}/>
          })}
        </div>
      );
  }
}
