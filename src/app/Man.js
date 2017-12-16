import React from "react";
import { render } from "react-dom";

export class Man extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="com_block">
          <div className="cardMan">
            <img src={require(`${this.props.item.src}`)} className="com_img"/>
            <div className="containerMan">
             <h4><b>{this.props.item.name}</b></h4>
             <p>{this.props.item.status}</p>
            </div>
          </div>
        </div>
      );
  }
}
