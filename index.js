var express = require('express');
var app = express();
const appRouter = require("./app/routes");
const { StatusCodes,  } = require('http-status-codes');
app.get('/', function (req, res) {
   res.send({message:'Welcome to IMC server',statusCode:StatusCodes.OK,status:ReasonPhrases.OK});
})
app.use('/',appRouter);

var server = app.listen(8081, function () {
   var port = server.address().port 
   console.log(`server running at http://localhost:${port}`)
})