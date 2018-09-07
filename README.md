# nodjs_CRUD
Node JS simple CRUD application for beginners

NOTE: In this tutorial I'm using https://mlab.com for mongodb. You can use mlab for mongodb database with 50mb free space.

-----------------Details of Functions using in tutorials--------------------------------------
Note: URL : https://zellwk.com/blog/crud-express-mongodb/

$ npm install express --save
We first have to install Express before we can use it in our application

$ npm install nodemon --save-dev
Nodemon restarts the server automatically whenever you save a file that the server uses.

$ npm install body-parser --save
Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called body-parser to gain this functionality.
Express allows us to add middleware like body-parser to our application with the use method. You’ll hear the term middleware a lot when dealing with Express. These things are basically plugins that change the request or response object before they get handled by our application.

npm install mongodb --save
We first have to install MongoDB through npm if we want to use it as our database

app.listen
we want to start our servers only when the database is connected. Hence, let’s move app.listen into the connect method. We’re also going to create a db variable to allow us to use the database when we handle requests from the browser

app.get(path, callback)
It takes two arguments, a request object and a response object.
The first argument, path, is the path of the GET request. It’s anything that comes after your domain name.
The second argument is a callback function that tells the server what to do when the path is matched.

------------------------ Mongo DB Connection Starts -----------------------------------
var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.open(function(err, mongoClient) {
  var db1 = mongoClient.db("mydb");
  mongoClient.close();
});

The URL connection format
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]

Basic parts of the url
mongodb:// is a required prefix to identify that this is a string in the standard connection format.
username:password@ is optional. If given, the driver will attempt to login to a database after connecting to a database server.
host1 is the only required part of the URI. It identifies either a hostname, IP address, or unix domain socket
:portX is optional and defaults to :27017 if not provided.
/database is the name of the database to login to and thus is only relevant if the username:password@ syntax is used. If not specified the “admin” database will be used by default.
?options are connection options. Note that if database is absent there is still a / required between the last host and the ? introducing the options. Options are name=value pairs and the pairs are separated by “&”. For any unrecognized or unsupported option, a driver should log a warning and continue processing. A driver should not support any options that are not explicitly defined in this specification. This is in order to reduce the likelihood that different drivers will support overlapping that differ in small but incompatible ways (like different name, different values, or different default value).

https://docs.mongodb.com/manual/reference/method/db.collection.save/ -- IMPORTANT

------------------------- Mongo DB Connection Ends ------------------------------------

$ npm install ejs --save
We can’t serve our index.html file and expect quotes to magically appear because there’s no way to add dynamic content to a HTML file. What we can do instead, is to use template engines to help us out. Some popular template engines include Jade, Embedded JavaScript and Nunjucks

app.set('view engine', 'ejs')
Once the view engine is set, we can begin generating the HTML with our quotes. This process is also called rendering. We can use the render object built into the response object render to do so. It has the following syntax:

res.render(view, locals)
The first parameter, view, is the name of the file we’re rendering. This file must be placed within a views folder.
The second parameter, locals, is an object that passes data into the view.
