const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  addWebpackAlias,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const path = require("path");

const rewiredMap = () => (config) => {
  config.devtool =
    process.env.NODE_ENV === "production" ? false : "cheap-module-source-map";
  return config;
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src/"),
  }),
  rewiredMap()
);
