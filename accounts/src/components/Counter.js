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
        <div className="card" style={{ width: " 18rem" }}>
          <div className="card-img-top mx-auto text-center">
            <h1> {this.state.counter}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">Soy la app de accounts</h5>
            <p className="card-text">
              El contador lo maneja Utils y los metodos de aumentar, disminuir y
              actualizar estan tambien en utils lo unico que manejo local es el
              estado
            </p>
            <button
              className="btn btn-success m-3"
              onClick={this.sum.bind(this)}
            >
              aumentame
            </button>
            <button
              className="btn btn-danger m-3"
              onClick={this.res.bind(this)}
            >
              bajame
            </button>
            <button
              className="btn btn-warning  m-3"
              onClick={this.update.bind(this)}
            >
              actualizame
            </button>
            <button onClick={enClick} className="btn btn-primary">
              Saluda
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default contar;
