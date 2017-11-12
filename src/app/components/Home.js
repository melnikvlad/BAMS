import React from "react";


export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      mAge: props.age
    };
  }

  onMakeOlder() {
    this.setState({
      mAge: this.state.mAge + 3
    });
  }
  render() {
    return(
      <div>
          <p>My name is {this.props.name} and I am {this.state.mAge} years old</p>
          <hr/>
          <button className="btn btn-primary" onClick={() => this.onMakeOlder()}> Click me!</button>

      </div>
    );
  }
}
