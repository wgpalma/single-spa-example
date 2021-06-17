import React from "react";
import Counter from "./components/Counter";

export default function Root(props) {
  return (
    <React.Fragment>
      <section>{props.name} is mounted!</section>
      <Counter></Counter>
    </React.Fragment>
  );
}
