const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end("Will Send All the promos to you!");
    })

    .post((req, res, next) => {
        res.end('Will add the promos : ' + req.body.name + 'with details ' + req.body.description);

    })

    .post((req, res, next) => {
        res.end('Will add the promos : ' + req.body.name + 'with details ' + req.body.description);
        
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported here");
        
    })

    .delete((req, res, next) => {
        res.end("Deleting All the promoes!");
    });

promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end("Will Send Details of the promos : "+req.params.promoId+" to you");
    })

    .post((req, res, next) => {
        res.end("Post operation not supported here");
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported on promos/"+req.params.promoId);
    })

    .put((req, res, next) => {
        res.write("Updating the promos: " + req.params.promoId);
        res.end("\nWill Update the promos : "+req.body.name+" With details "+ req.body.description);
    })

    .delete((req, res, next) => {
        res.end("Deleting  promos : " + req.params.promoId);
    });

module.exports = promoRouter;