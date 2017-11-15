import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import {Home} from "./Home";
import {Stuff} from "./Stuff";
import {Contact} from "./Contact";

export class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Stuff</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>

              <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
