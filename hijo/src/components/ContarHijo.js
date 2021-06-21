import React from "react";
import { sumar, restar, actual, addToListener } from "@orgname/utils";
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
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{ width: " 18rem" }}>
              <div
                className="card-img-top mx-auto"
                style={{ textAlign: " center" }}
              >
                <h1> {this.state.counter}</h1>
              </div>
              <div className="card-body">
                <h5 className="card-title">Soy la app de accounts</h5>
                <p className="card-text">
                  El contador lo maneja Utils y los metodos de aumentar,
                  disminuir y actualizar estan tambien en utils lo unico que
                  manejo local es el estado
                </p>
                <button
                  className="btn btn-success m-1"
                  onClick={this.sum.bind(this)}
                >
                  aumentame
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={this.res.bind(this)}
                >
                  bajame
                </button>
                <button
                  className="btn btn-warning  m-1"
                  onClick={this.update.bind(this)}
                >
                  actualizame
                </button>
                <button onClick={enClick} className="btn btn-primary">
                  Saluda
                </button>
                <button
                  className="btn btn-outline-success  m-1"
                  onClick={this.realTime.bind(this)}
                >
                  Activar modo tiempo real
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ width: " 18rem" }}>
              <div
                className="card-img-top mx-auto"
                style={{ textAlign: " center" }}
              >
                <Parcel
                  config={() => System.import("@orgname/react-parcel")}
                  wrapWith="div"
                  nombre="Wilson"
                  apellido="Palma"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Soy la app de accounts pero soy un Parcel de react-parcel app
                </h5>
                <p className="card-text">
                  Mando a llamar a una aplicacion parcel que se llama
                  react-parcel a la cual le envio unos props como lo son nombre
                  y apellido Wilson y Palma respectivamente, este parcel es un
                  componente que me provee single-spa el cual entre sus props
                  tiene una configuracion para importar la app de parcel que
                  quiero
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default contarHijo;
