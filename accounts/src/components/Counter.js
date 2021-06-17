import React from "react";
import { contador, sumar, restar, actual } from "@orgname/utils";

class contar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: actual(),
    };
  }
  sum() {
    this.setState({
      counter: sumar(),
    });
  }
  res() {
    this.setState({
      counter: restar(),
    });
  }
  update() {
    this.setState({
      counter: actual(),
    });
  }

  render() {
    const enClick = () => {
      alert("Hola mundo desde accounts");
    };

    return (
      <React.Fragment>
        <button onClick={enClick}>Saluda</button>

        <h1>{this.state.counter}</h1>
        <button onClick={this.sum.bind(this)}> aumentame </button>
        <button onClick={this.res.bind(this)}>bajame</button>
        <button onClick={this.update.bind(this)}>actualizame</button>
      </React.Fragment>
    );
  }
}

export default contar;
