import React from "react";
import { Link } from "react-router-dom";

export const Uno = () => {
  return (
    <React.Fragment>
      <div className="m-5">
        <Link to="/navegacion/dos">
          <h3>Vamos a /navegacion/dos</h3>
        </Link>
        <p>
          Estoy desde <b>/navegacion/uno</b>
        </p>
      </div>
    </React.Fragment>
  );
};
