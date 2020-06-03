const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end("Will Send All the Dishes to you!");
    })

    .post((req, res, next) => {
        res.end('Will add the dish : ' + req.body.name + 'with details ' + req.body.description);

    })

    .post((req, res, next) => {
        res.end('Will add the dish : ' + req.body.name + 'with details ' + req.body.description);
        
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported here");
        
    })

    .delete((req, res, next) => {
        res.end("Deleting All the Dishes!");
    });

dishRouter.route('/:dishId')
    .get((req, res, next) => {
        res.end("Will Send Details of the dish : "+req.params.dishId+" to you");
    })

    .post((req, res, next) => {
        res.end("Post operation not supported here");
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported on dishes/"+req.params.dishId);
    })

    .put((req, res, next) => {
        res.write("Updating the dish: " + req.params.dishId);
        res.end("\nWill Update the dish : "+req.body.name+" With details "+ req.body.description);
    })

    .delete((req, res, next) => {
        res.end("Deleting  Dish : " + req.params.dishId);
    });

module.exports = dishRouter;