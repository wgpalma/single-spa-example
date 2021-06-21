import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  //  rootComponent: Root, // asi es la manera facil de hacerlo sin tanta cosa solo exportar el root
  loadRootComponent: (props) =>
    new Promise((resolve, reject) => resolve(() => <Root {...props}></Root>)),
});
export const { bootstrap, mount, unmount } = lifecycles;
