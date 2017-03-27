var express = require('express');
var app = express();
var path = require('path');

const PORT = 3000;


//build some middleware
var middleware = {
  requireAuthentication: (req, res, next) => { // next tells express to move on
    console.log('private route hit');
    next();
  },
  logger: (req, res, next) => {
    const date = new Date().toString();
    console.log(`Request ${req.method}  ${req.originalUrl} ${date}`);
    next();
  }
}
//this is application level middleware i.e for everyroute
app.use(middleware.logger);

//this takes a route and a functio that takes in a request and response
// app.get('/',(req, res) => {
//   res.send('hello express')
// });
//
// //add another route
//route level middle ware can be called as the second arg
app.get('/about',middleware.requireAuthentication, (req, res) => {
  res.send('About us')
});

//lets expose a folder as a webserver
app.use(express.static(__dirname  + '/public'));

//listen give the app an port to listenm to
//takes in a port and a function to call when the server starts
app.listen(PORT, () =>{
  console.log(`Express Server Running on ${PORT}`);
});
