import React from "react";
import { Link } from "react-router-dom";

export const Dos = () => {
  return (
    <div className="m-5">
      <Link to="/navegacion/uno">
        <h3>Vamos a /navegacion/uno</h3>
      </Link>
      <p>
        Estoy desde <b>/navegacion/dos</b>
      </p>
    </div>
  );
};
