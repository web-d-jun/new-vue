// import HtmlWebpackPlugin from "html-webpack-plugin";

// module.exports = {
//   rules: [
//     {
//       test: /\.s(c|a)ss$/,
//       use: [
//         "vue-style-loader",
//         "css-loader",
//         "sass-loader",
//         {
//           loader: "sass-loader",
//           // Requires sass-loader@^8.0.0
//           options: {
//             implementation: require("sass"),
//             sassOptions: {
//               fiber: require("fibers"),
//               indentedSyntax: true, // optional
//             },
//           },
//         },
//         {
//           loader: "sass-resources-loader",
//           options: {
//             resources: "./src/common.scss",
//           },
//         },
//       ],
//     },
//   ],
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: false,
//       hash: true,
//       publicPath: "/",
//       title: "TEST1",
//       showErrors: true,
//     }),
//   ],
// };
