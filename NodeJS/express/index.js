//loads the express module.
const express = require("express");
const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionRouter");
const leaderRouter = require("./routes/leaderRouter");

//loads the http module.
const http = require("http");

const app = express();
app.use("/dishes", dishRouter);
app.use("/dishes/:dishId", dishRouter);
app.use("/promotions", promotionRouter);
app.use("/promotions/:promotionId", promotionRouter);
app.use("/leaders", leaderRouter);
app.use("/leaders/:leaderId", leaderRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><p>This is an Express Server</p></body></html>");
});

http.createServer(app).listen(3000, "localhost");
