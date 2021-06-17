import React from "react";
import { navigateToUrl } from "single-spa";
import { GlobalHeader } from "@orgname/utils";
//para navegar como SPA y no recargue

export default function Root(props) {
  return (
    <header>
      <h2>texto desde utils como un componente</h2>
      <GlobalHeader></GlobalHeader>
      <h2 className="color">fin de texto desde utils como un componente</h2>
      <nav>
        {/* RECARGA LA PAGINA */}
        <a href="/accounts">Mi cuenta</a>
        <a href="/">Home</a>
        <br></br>
        {/*NO  RECARGA LA PAGINA */}
        <a
          href="/accounts"
          onClick={(e) => {
            e.preventDefault();
            navigateToUrl("/accounts");
          }}
        >
          Mi cuenta
        </a>
        <a
          onClick={() => {
            navigateToUrl("/");
          }}
        >
          Home
        </a>
      </nav>
    </header>
  );
}
