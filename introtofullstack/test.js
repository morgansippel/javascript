let http = require("http")

let ourApp = http.createServer(function (req, res){
  if (req.url == "/") {
    res.end("Hello, and welcome to our home page.")
  }
  if (req.url == "/about") {
    res.end("Thank you for your interest in our company")
  }
  res.end("we cannot find the page.")

})
ourApp.listen(5000)