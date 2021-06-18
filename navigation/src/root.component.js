import React from "react";
import { navigateToUrl } from "single-spa";
import { GlobalHeader } from "@orgname/utils";
import "./styles.css";
//para navegar como SPA y no recargue

export default function Root(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="nav-link pointer link-poibter"
            onClick={() => {
              navigateToUrl("/nav");
            }}
          >
            <GlobalHeader></GlobalHeader>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Hijo Recargar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/accounts">
                  Hijo y accounts Recargar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link pointer link-poibter"
                  onClick={() => {
                    navigateToUrl("/");
                  }}
                >
                  Hijo SPA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/accounts"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToUrl("/accounts");
                  }}
                >
                  Hijo y accounts SPA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
