var http = require('http');
var fs = require('fs');

const bodyParser= require('body-parser');
const express = require('express');
const app = express()

const MongoClient = require('mongodb').MongoClient
 
MongoClient.connect('mongodb://crudusername:mahara263645@ds245512.mlab.com:45512/crud_node_db', { useNewUrlParser: true }, (err, database) => {
	if (err) return console.log(err)
		db = database.db('crud_node_db') // whatever your database name is
	app.listen(3000, () => {
		console.log('listening on 3000')
	})
})

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {  
	db.collection('quotes').find().toArray(function(err, results) {
		//console.log(results)
		if (err) return console.log(err)
		// renders index.ejs
		res.render('index.ejs', {quotes: results})
	})  
})

app.post('/quotes', (req, res) => {
	console.log('post request');
	db.collection('quotes').insertOne(req.body, (err, result) => {
		if (err) return console.log(err)
			console.log('saved to database')
		res.redirect('/')
	})
})


/* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.ejs')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
}) */

/* app.get("/ajaxcall", function(req, res) {
	var respondWith = "TADA Country";
	return res.end(respondWith);
});

app.get("", function(req, res) {
	fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });	
}); */

//app.listen(3000);