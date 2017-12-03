import React from "react";
import { render } from "react-dom";
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this._clicked = this._clicked.bind(this);
    this.state = {
        viewId: null
    };

  }

  _clicked(param) {
    this.setState({
      viewId : param
    });
    console.log("CLICKED: " + this.state.viewId);
  }

  render() {
      return (
        <div className="trip_block" onClick={
          ()=>{this._clicked(this.props.item.id)}
        }>
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
