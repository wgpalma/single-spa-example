import React from "react";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <br></br>
      nombre: {props.nombre}
      <br></br>
      apellido: {props.apellido}
    </section>
  );
}
