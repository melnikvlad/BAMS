import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import {Home} from "./Home";
import {Trips} from "./Trips";
import {Community} from "./Community";

export class Main extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className=".container-fluid main">
            <div className="nav_container">
              <div className=" navbar navbar-default navbar-fixed-top">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                  <li><NavLink to="/trips">ПОХОДЫ</NavLink></li>
                  <li><NavLink to="/community">УЧАСТНИКИ</NavLink></li>
                </ul>
              </div>
            </div>

        <Route exact path="/" component={Home}/>
        <Route path="/trips" component={Trips}/>
        <Route path="/community" component={Community}/>
      </div>

    </HashRouter>
    );
  }
}
