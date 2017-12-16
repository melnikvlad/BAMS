import React from "react";
import { render } from "react-dom";
import {Man} from "./Man";
import data from "./main.json";

export class Community extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        info: data
      };
  }
  render() {
    return (
      <div>
        <div className="container-fluid com_main">
          <div className="col-md-6 com_header_block">
            <p className="col-md-12 com_header_main">Основная команда</p>
            <div className="com_vert_line"/>
            <p className="col-md-10 com_header_description">Вступай в наши ряды и займи свое место на доске почета!</p>
          </div>
        </div>

        <div className="container-fluid com_promotion_block">
          <div className="com_promotion_separator_top"/>

          <div className="col-md-12 com_promotion_title_block">
            <p className="com_promotion_title_text">What is Lorem Ipsum?</p>
            <p className="col-md-6 com_promotion_title_info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
            <div className="container col-sm-6 col-md-4 links">
                <div className="instagram_icon_black"/>
                <div className="facebook_icon_black"/>
                <div className="vkontakte_icon_black"/>
            </div>
          </div>
        </div>

        <div className="container-fluid com_content">
        <div className="col-md-12 com_blocks">
          {this.state.info.community.map((item) => {
           return <Man item={item} key={item.id}/>
          })}
        </div>
        </div>
      </div>
    );
  }
}
// <div className="com_promotion_join_in">
//   <p className="com_promotion_join_in_text">Вступить</p>
// </div>
