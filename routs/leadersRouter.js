const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end("Will Send All the leadere to you!");
    })

    .post((req, res, next) => {
        res.end('Will add the leader : ' + req.body.name + 'with details ' + req.body.description);

    })

    .post((req, res, next) => {
        res.end('Will add the leader : ' + req.body.name + 'with details ' + req.body.description);
        
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported here");
        
    })

    .delete((req, res, next) => {
        res.end("Deleting All the leaderes!");
    });

leaderRouter.route('/:leaderId')
    .get((req, res, next) => {
        res.end("Will Send Details of the leader : "+req.params.leaderId+" to you");
    })

    .post((req, res, next) => {
        res.end("Post operation not supported here");
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported on leaderes/"+req.params.leaderId);
    })

    .put((req, res, next) => {
        res.write("Updating the leader: " + req.params.leaderId);
        res.end("\nWill Update the leader : "+req.body.name+" With details "+ req.body.description);
    })

    .delete((req, res, next) => {
        res.end("Deleting  leader : " + req.params.leaderId);
    });

module.exports = leaderRouter;