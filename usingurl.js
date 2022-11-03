//var url = require("url");
import url from "url";

var siteUrl = "http://localhost/sample";
var parsedUrl = url.parse(siteUrl);
console.log(parsedUrl);