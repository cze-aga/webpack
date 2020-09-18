require("../css/bootstrap.css");
require("../css/app.scss");
require("../css/appless.less");

var myImage = document.createElement("img");
myImage.style.height = "25%";
myImage.style.widows = "25%";
myImage.src = require("../images/lilo.jpg");

document.getElementById("img_container").appendChild(myImage);

console.log("index_page");
