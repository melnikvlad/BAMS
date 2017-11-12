import React from "react";

export const Header = (props) => {
    return(
      <nav className="navbar navbar-default ">
          <div className="container">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">{props.homeLink}</a></li>
            </ul>
          </div>
      </nav>
    );
};
