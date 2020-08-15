const express = require('express');
const ejs = require('ejs');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

const httpServer = http.createServer( app );
httpServer.listen(8080);

app.get('/', ( req, res ) => {
	res.render('home', {});
});

//MongoClient.connect('')