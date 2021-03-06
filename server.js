var express = require('express');
var bodyParser = require('body-parser');
// const SERVER_PORT = 8080;
const mongoose = require('mongoose');
const Client = require('./models/clientModel')

mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/clientsDB', function () {
    console.log("DB connection established!!!");
})
var app = express();
app.use(express.static('build'))
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const clientAPI=require('./routes/clientsAPI')
const actionsAPI = require('./routes/actionsAPI')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    next()
})
app.use('/' , clientAPI)
app.use('/' , actionsAPI)
app.get('*' , (req ,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html'))
})


app.listen(process.env.PORT || '8080')


// const data = require('./src/data.json')
// data.forEach(client => {
    //     let c = new Client(client)
    //     c.save()
    // });
    