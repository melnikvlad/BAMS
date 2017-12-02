import React from "react";

export class Trips extends React.Component {
  render() {
    return (
      <div className="container-fluid col-md-12 trip_main">

        <div className="container-fluid col-md-10 trip_section_header">
            <p className="trip_header_title">Походы</p>
            <div className="trip_vert_line"/>
            <p className="trip_header_second_title">Маршруты или записки туриста</p>
        </div>

      </div>
    );
  }
}
