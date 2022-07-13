const express = require("express");
const bodyParser = require("body-parser");
const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you.");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put is not supported in /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotions");
  });

promotionRouter
  .route("/:Id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send promotion with id:" + req.params.Id + " to you.");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion with id: " +
        req.params.Id +
        " with name: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotion");
  })
  .delete((req, res, next) => {
    res.end("Deleting the promotion with id:" + req.params.Id);
  });

module.exports = promotionRouter;
