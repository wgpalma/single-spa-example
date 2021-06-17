import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@orgname/accounts",
  app: () => System.import("@orgname/accounts"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
