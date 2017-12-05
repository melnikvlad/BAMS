import React from "react";
import { render } from "react-dom";
import {Block} from "./Block";

export class TripInfoBlock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col-md-12 trip_info_block">
        <img src={require(`${this.props.item.info.icon}`)} className="trip_block_icon_header"/>
        <div>
          <p className="trip_info_block_header">{this.props.item.info.header}</p>
        </div>
        <div>
          <p className="trip_info_block_date">{this.props.item.info.date}</p>
        </div>

        <div className="col-md-12 trip_after_header_devider"/>

        {this.props.item.info.blocks.map((block) => {
         return <Block block={block} key={block.block_id}/>
        })}

        <div className="trip_bottom_icon"/>
      </div>
    );
  }
}
