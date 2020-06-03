const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routs/dishRouter');
const promoRouter = require('./routs/promotionRouter');
const leaderRouter = require('./routs/leadersRouter');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

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
