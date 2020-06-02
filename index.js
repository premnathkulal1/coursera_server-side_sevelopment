const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
});

app.get('/dishes', (req, res, next) => {
	res.end("Will Send All the Dishes to you!");
});

app.post('/dishes', (req, res, next) => {
	res.end('Will add the dish : ' + req.body.name + 'with details ' + req.body.description);

});

app.post('/dishes', (req, res, next) => {
	res.end('Will add the dish : ' + req.body.name + 'with details ' + req.body.description);
	
});

app.put('/dishes', (req, res, next) => {
	res.statusCode = 403;
	res.end("PUT operation not supported here");
	
});

app.delete('/dishes', (req, res, next) => {
	res.end("Deleting All the Dishes!");
});

app.get('/dishes/:dishId', (req, res, next) => {
	res.end("Will Send Details of the dish : "+req.params.dishId+" to you");
});

app.post('/dishes/:dishId', (req, res, next) => {
	res.end("Post operation not supported here");
});

app.post('/dishes/:dishId', (req, res, next) => {
	res.statusCode = 403;
	res.end("POST operation not supported on dishes/"+req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
	res.write("Updating the dish: " + req.params.dishId);
	res.end("\nWill Update the dish : "+req.body.name+" With details "+ req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
	res.end("Deleting  Dishe : " + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end("<html><body><h1>Hello from Express</h1></body></html>");
});

const server = http.createServer(app)

server.listen(port, hostname, () => {
	console.log(`Express Server Running at http://${hostname}:${port}`)
})
