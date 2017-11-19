import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import {Home} from "./Home";
import {Stuff} from "./Stuff";
import {Contact} from "./Contact";

export class Main extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className=".container-fluid main">
            <div className="nav_container">
              <div className="navbar navbar-default navbar-fixed-top">
                <ul className="nav navbar-nav ">
                  <li><NavLink to="/">HOME</NavLink></li>
                  <li><NavLink to="/stuff">STUFF</NavLink></li>
                  <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
              </div>
            </div>

        <Route exact path="/" component={Home}/>
        <Route path="/stuff" component={Stuff}/>
        <Route path="/contact" component={Contact}/>
      </div>

    </HashRouter>
    );
  }
}
