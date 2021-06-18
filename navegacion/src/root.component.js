import React from "react";
import { Uno } from "./components/Uno";
import { Dos } from "./components/Dos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <div className="p-3 mb-2 bg-success text-white">
        <Link to="/navegacion/xxx">
          <h1 className="text-white"> => Vamos a una ruta que no existe...</h1>
        </Link>
        <Link to="/accounts">
          <h5>
            <small style={{ color: "black" }}>
              => Vamos a account pero con Link de react-router-dom en evez de
              con la api de Single-spa
            </small>
          </h5>
        </Link>
      </div>

      <Switch>
        <Route exact path="/navegacion/dos">
          <Dos></Dos>
        </Route>
        <Route exact path="/navegacion/uno">
          <Uno></Uno>
        </Route>
        <Route path="/">
          <div className="m-2">
            No hizo Match <br></br>
            <Link to="/navegacion/uno">
              <h4> Regresa a uno</h4>
            </Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
