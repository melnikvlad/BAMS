import React from "react";
import { render } from "react-dom";
export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="trip_block">
          <img src={require(`${this.props.item.ic}`)} className="trip_block_ic"/>
          <div className="trip_block_info"/>
          <div className="trip_block_info_child">
            <p className="trip_block_info_title">{this.props.item.title}</p>
            <p className="trip_block_info_text">{this.props.item.bottom_title}</p>
          </div>
        </div>
      );
  }
}
