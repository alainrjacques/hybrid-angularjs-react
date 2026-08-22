const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/i,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        type: "asset",

        exclude: /index.html$/i,
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        exclude: /index.html$/i,
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  entry: {
    index: "./main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body",
      title: "Development",
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    port: 8090,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
