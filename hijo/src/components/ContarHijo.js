import React from "react";
import { contador, sumar, restar, actual, addToListener } from "@orgname/utils";
import Parcel from "single-spa-react/parcel";
import "./styles.css";
class contarHijo extends React.Component {
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

  realTime() {
    addToListener(() => {
      this.setState({
        counter: actual(),
      });
    });
  }
  render() {
    const enClick = () => {
      alert("Hola mundo desde Hijo");
    };

    return (
      <React.Fragment>
        <h1> APLICACION POR PARCEL</h1>
        <Parcel
          config={() => System.import("@orgname/react-parcel")}
          wrapWith="div"
          nombre="Wilson"
          apellido="Palma"
        />
        <h4>fin del parcel</h4>
        <button onClick={enClick}>Saluda</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.sum.bind(this)}> aumentame </button>
        <button onClick={this.res.bind(this)}>bajame</button>
        <button className="color" onClick={this.realTime.bind(this)}>
          Activar modo tiempo real
        </button>
        <button onClick={this.update.bind(this)}>actualizame</button>
      </React.Fragment>
    );
  }
}

export default contarHijo;
