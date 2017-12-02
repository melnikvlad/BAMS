import React from "react";
import { render } from "react-dom";
export class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <li>
            {this.props.item.text}
        </li>
      );
  }
}
