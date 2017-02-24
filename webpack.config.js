module.exports = {
  entry: __dirname + '/dev/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/js/'
  }
//   plugins: [
//     new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
//     "window.jQuery": "jquery"
// })
  // ]
};
