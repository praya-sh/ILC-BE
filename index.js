var express = require('express');
var app = express();
const appRouter = require("./app/routes");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

var cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: true
 }));
 app.use(bodyParser.json());
 
app.get('/', function (req, res) {
   res.send({message:'Welcome to IMC server',statusCode:StatusCodes.OK,status:ReasonPhrases.OK});
})
app.use('/',appRouter);

var server = app.listen(8081, function () {
   var port = server.address().port 
   console.log(`server running at http://localhost:${port}`)
})