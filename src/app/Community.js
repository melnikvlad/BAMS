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
            <p className="com_promotion_title_text">Дружная команда БЭМС</p>
            <p className="col-md-6 com_promotion_title_info">
            Присоединяйтесь к нашему туристическому клубу и проводите выходые или отпуск в кругу семьи и близких друзей. Без сотовой связи, 
            интернета и других благ цивилизации, от которых хочется отдохнуть.

            Чтобы попасть в список учасников нужно сходить в 2 похода или больше - обязательно нужно вернуться второй раз и доказать свою стойкость. 
            Каждый член клуба БЕМС получает футболку с эмблемой и оригинальным логотипом.
            Ждем всех смельчаков наслаждаться красотами природы вместе с нами! 
            </p>
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
