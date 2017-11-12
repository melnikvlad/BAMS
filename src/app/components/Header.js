import React from "react";

export const Header = (props) => {
    return(
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#myPage">Logo</a>
          </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#myPage">HOME</a></li>
            <li><a href="#band">BAND</a></li>
            <li><a href="#tour">TOUR</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">MORE
              <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Merchandise</a></li>
                <li><a href="#">Extras</a></li>
                <li><a href="#">Media</a></li>
              </ul>
            </li>
            <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
