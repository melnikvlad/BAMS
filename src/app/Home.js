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
                <div className="col-sm-6 col-md-4 home_links">
                    <p>Link1</p>
                    <p>Link2</p>
                    <p>Link3</p>
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

              <section className=".container-fluid col-sm-12 section_home_footer">

              </section>
          </div>
    );
  }
}
