import React from "react";
import { render } from "react-dom";

export class Block extends React.Component {

  constructor(props) {
    super(props);
  }

  renderHeader() {
    if (this.props.block.header) {
      return(
        <div className="col-md-12 block_header">
          <p>{this.props.block.header_text}</p>
        </div>
      );
    }
  }

  renderText() {
    return(
      <div className="col-md-12 block_text">
        <p>{this.props.block.text}</p>
      </div>
    );
  }

  renderImages() {
    if (this.props.block.images.length != 0) {
      return(
        <div className="col-md-12 block_images">
          {this.props.block.images.map((image) => {
           return(
             <div className="block_image_and_label" key={image.photo_id}>
              <img src={require(`${image.src}`)} className=" col-md-8 block_images_image"/>
              <p className="block_label">{image.label}</p>
            </div>
           );
          })}
        </div>
      );
    } else {

    }
  }

  render() {
      return (
        <div className="col-md-12 block">

          {this.renderHeader()}
          {this.renderText()}
          {this.renderImages()}
        </div>
      );
  }
}
