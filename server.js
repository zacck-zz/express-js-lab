var express = require('express');
var app = express();
var path = require('path');


//this takes a route and a functio that takes in a request and response
// app.get('/',(req, res) => {
//   res.send('hello express')
// });
//
// //add another route
// app.get('/about', (req, res) => {
//   res.send('About us')
// });

//lets expose a folder as a webserver
app.use(express.static(__dirname  + '/public'));

//listen give the app an port to listenm to
app.listen(3000);
