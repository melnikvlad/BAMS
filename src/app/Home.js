import React from "react";
import styled from 'styled-components';


export class Home extends React.Component {
  render() {
    return (
      <div className=".container-fluid">
              <section className=".container-fluid col-sm-12 home_section">
                <div className="ic_logo"></div>
                <div className="col-sm-12 logo_text">
                  <p className="text_logo_big">Б.Э.М.С. & ДРУЗЬЯ</p>
                  <p className="text_logo_small">Отличные походы в лучшей компании</p>
                </div>
              </section>

              <section className=".container-fluid col-sm-12 home_section_empty_part">
                <div className="col-sm-6 col-md-8 home_links">
                    <p className="citata">Что-то там какая-то строка бородатый год и тар-ла-ла</p>
                    <div className="button">
                      <p className="citata">Нажми!</p>
                    </div>
                </div>
              </section>

              <section className="container col-md-12 section_invite">

                  <div className="invite_row">
                    <div className="container col-md-3 invite_block_row_1"/>
                    <div className="container col-md-6 invite_block_row_2">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Что</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text">Very long text to present something</p>
                      </div>

                    </div>
                    <div className="container col-md-3 invite_block_row_3"/>
                  </div>

                  <div className="invite_row">
                    <div className="container col-md-3 invite_block_row_4">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Где</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text_small">Very long text </p>
                      </div>

                    </div>
                    <div className="container col-md-6 invite_block_row_5"/>
                    <div className="container col-md-3 invite_block_row_6">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Когда</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text_small">Very long text </p>
                      </div>

                    </div>
                  </div>

              </section>

              <section className=".container-fluid col-sm-12 section_3">

              <div class="bs-example">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div className="col-xs-offset-3 col-sm-8 col-md-6 white">
                              <p className="text_title">Title 1</p>
                              <p className="text">Cras facilisis urna ornare ex volutpat, et
                              convallis erat elementum. Ut aliquam, ipsum vitae
                              gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                              metus nec massa. Maecenas hendrerit laoreet augue
                              nec molestie. Cum sociis natoque penatibus et magnis
                              dis parturient montes, nascetur ridiculus mus.</p>
                              <div className="farmer_devider"/>
                            </div>
                        </div>
                        <div class="item">
                          <div className="col-xs-offset-3 col-sm-8 col-md-6 white">
                            <p className="text_title">Title 2</p>
                            <p className="text">Cras facilisis urna ornare ex volutpat, et
                            convallis erat elementum. Ut aliquam, ipsum vitae
                            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                            metus nec massa. Maecenas hendrerit laoreet augue
                            nec molestie. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.</p>
                            <div className="farmer_devider"/>
                          </div>
                        </div>
                        <div class="item">
                          <div className="col-xs-offset-3 col-sm-8 col-md-6 white">
                            <p className="text_title">Title 3</p>
                            <p className="text">Cras facilisis urna ornare ex volutpat, et
                            convallis erat elementum. Ut aliquam, ipsum vitae
                            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                            metus nec massa. Maecenas hendrerit laoreet augue
                            nec molestie. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.</p>
                            <div className="farmer_devider"/>
                          </div>
                        </div>
                    </div>

                    <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="carousel-control right" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
              </div>

              </section>

              <section className=" container-fluid col-md-12 section_home_footer">
                <div className="contaier col-md-12 footer_media">
                    <div className="col-sm-6 col-md-3 home_links">
                        <div className="instagram_icon_black"/>
                        <div className="facebook_icon_black"/>
                        <div className="vkontakte_icon_black"/>
                    </div>
                    <div className="footer_devider"/>
                    <div className="me container-fluid col-md-4">
                      <p> 2017 by Vlad Melnikov & Mary Vtyurina ™</p>
                    </div>
                </div>
              </section>
          </div>

    );
  }
}
