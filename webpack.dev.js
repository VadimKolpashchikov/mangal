const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    promo: "./web/js/promo.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./web/build/"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "ignore-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!images", "!images/**/*"],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./web/images",
          to: "./images/[path][name].webp",
          toType: "template",
          globOptions: {
            copyUnmodified: true,
            force: false,
            ignore: ["/**/*.svg"],
          },
        },
        {
          from: "./web/images",
          to: "./images",
          globOptions: {
            copyUnmodified: true,
            force: false,
          },
        },
      ],
    }),
  ],
};
