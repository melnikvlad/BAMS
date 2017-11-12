import React from "react";
import {Home} from "./Home";
import {Header} from "./Header";

export class Root extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <Header/>
          </div>
          <div className="col-sm-10">
            <Home/>
          </div>
        </div>
      </div>

    );
  }

}
