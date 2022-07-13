const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send you details of all the leaders.");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with description " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT not supported in /leaders.");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the leaders");
  });

leaderRouter
  .route("/:Id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the details of the leader with id: " + req.params.Id);
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader with id: " +
        req.params.Id +
        " name:" +
        req.body.name +
        " with description " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT not supported in /leaders.");
  })
  .delete((req, res, next) => {
    res.end("Deleting the leader with id: " + req.params.Id);
  });

module.exports = leaderRouter;
