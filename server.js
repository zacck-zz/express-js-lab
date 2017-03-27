var express = require('express');
var app = express();
var path = require('path');

const PORT = 3000;


//build some middleware
var middleware = require('middleware');
//this is application level middleware i.e for everyroute
app.use(middleware.logger);

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
