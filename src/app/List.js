import React from "react";
import {Item} from "./Item";
import { render } from "react-dom";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ul>
          {this.props.list.map((item) => {
            return <Item item={item} key={item.id}/>
          })}
        </ul>
      );
  }
}
