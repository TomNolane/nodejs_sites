const purify = require("purify-css")

var content = ['**/public/javascripts/*.js', '**/public/views/*.pug'];
var css = ['**/public/stylesheets/common.css','**/public/stylesheets/style.css']; 

var options = {
  minify: false,
  output: './public/stylesheets/min/purified.css',
};

purify(content, css, options, function (purifiedAndMinifiedResult) {
//   console.log(purifiedAndMinifiedResult);
console.log("DONE");
});