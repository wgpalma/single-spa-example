const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "orgname",
    projectName: "mfp",
    webpackConfigEnv,
    argv,
  });

  const devConfig = {
    plugins: [
      new ModuleFederationPlugin({
        name: "mfp", //nombre solo para uso externo para hacer referencia a este MFE
        filename: "remoteEntry.js",
        exposes: {
          "./devApp": "./src/root.component.js",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };
  return merge(defaultConfig, devConfig);
};
