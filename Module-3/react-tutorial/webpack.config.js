const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point of your application
  entry: "./src/index.js",

  // Output configuration for the bundled files
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true, // Cleans the /dist folder before each build
  },

  // Module rules for transforming files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Allow importing .js and .jsx files without specifying extensions
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // Development server settings
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Supports client-side routing (e.g., React Router)
  },

  // Default mode (can be overridden via CLI flags like --mode production)
  mode: "development",
};
