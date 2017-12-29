import React from "react";
import styled from 'styled-components';


export class Home extends React.Component {
  render() {
    return (
      <div className="home">

              <section className="home_section">
                <div className="ic_logo"/>
                <div className="col-sm-12 logo_text">
                  <p className="text_logo_big">Б.Э.М.С. & ДРУЗЬЯ</p>
                  <p className="text_logo_small">Отличные походы в лучшей компании</p>
                </div>

                <section className="home_section_empty_part">
                  <div className="col-sm-12 home_links">
                      <p className="citata">Присоединяйтесь к нам и получайте незабываемые эмоции</p>
                      <p className="citata_b">Вступить</p>
                  </div>
                </section>
              </section>

              <section className="home_section_what">
                <div className="col-sm-12 home_links">
                    <p className="citata">Ближайшие походы и мероприятия</p>
                </div>
              </section>



              <section className=" section_invite">

                  <div className="invite_row">
                    <div className="container col-md-3 col-sm-12 invite_block_row_1"/>
                    <div className="container col-md-6 col-sm-12 invite_block_row_2">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Что</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text">Марафон горного бега ФИШТ-О-RUN 2018</p>
                      </div>

                    </div>
                    <div className="container col-md-3 col-sm-12 invite_block_row_3"/>
                  </div>

                  <div className="invite_row">
                    <div className="container col-md-3 col-sm-12 invite_block_row_4">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Где</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text_small">Кавказский Биосферный заповедник, Яворовая поляна</p>
                          <a href="http://fisht-marathon.ru">Подробнеe</a>
                      </div>

                    </div>
                    <div className="container col-md-6 invite_block_row_5"/>
                    <div className="container col-md-3 invite_block_row_6">

                      <div className="container col-md-12 inner_top">
                        <p className="inner_top_text">Когда</p>
                        <div className="vert_line"/>
                      </div>

                      <div className="container col-md-12 inner_bot">
                          <p className="inner_bot_text_small">23 июня, 2018</p>
                      </div>

                    </div>
                  </div>

              </section>

              <section className=".container-fluid col-sm-12 section_3">

              <div class="bs-example">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                        <div class="row item active">
                            <div className="col-md-offset-3 col-sm-offset-0 col-sm-12 col-md-6 white">
                              <p className="text_title">О нас</p>
                              <p className="text">Группа людей, которые ежегодно забираются повыше в горы, чтобы отдохнуть от суеты, вдохновиться красотой природы и провести время с семьей и друзьями. </p>
                                <p className="text">
                              Большой поход состоится в июле или августе, продолжительность 6-8 дней.
                               Также участвуем в которотких выездах с мая по сентябрь. Главными качествами туриста считаем силу духа и стойкость характера.
                               Возраст и опыт не имеют значения.
                                После участия в двух походах вы становитесь членом клуба БЭМС и получаете памятный подарок - футболку с логотипом.</p>
                              <div className="farmer_devider"/>
                            </div>
                        </div>
                        <div class="item">
                          <div className="col-md-offset-3 col-sm-offset-0 col-sm-12 col-md-6 white">
                            <p className="text_title">Достижения</p>
                            <p className="text">Восхождения: г.Фишт, г.Оштен, г.Большой Тхач, г.Тыбга, г.Пшеха-Су. Похождение категорийных перевалов: пер.Цындышхо и пер.Семнадцати Южный.

                            Озера: Кардывач, Вехний Кардывач, Инпси, Клумбочка, Хуко. Озера Архыза: Голубое, Глубокое, Медвежье, Семиозерье.</p>

                            <div className="farmer_devider"/>
                          </div>
                        </div>
                        <div class="item">
                          <div className="col-md-offset-3 col-sm-offset-0 col-sm-12 col-md-6 white">
                            <p className="text_title">БЭМС</p>

                            <p className="text">Б - Боевые Э - энергичные М - молодые, С - симпотичные.</p>
                            <p className="text">
                            Активная деятельность участников клуба БЭМС не ограничивается горными походами.
                            Мы так же участвуем в различных соревновательных забегах, сплавах и катаемся на лыжах.

                            <p>Если вы член клуба и хотите опубликовать на сайте отзыв или историю о походе, присылайте материал на почту, указанную в контактах.</p></p>
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
                    <div className="container col-sm-12 col-md-4 links">
                        <div className="instagram_icon_black"/>
                        <div className="facebook_icon_black"/>
                        <div className="vkontakte_icon_black"/>
                    </div>
                    <div className="footer_devider"/>
                    <div className="me container col-md-12">
                      <p> 2017 by Vlad Melnikov & Mary Vtyurina ™</p>
                    </div>
                </div>
              </section>
          </div>

    );
  }
}
