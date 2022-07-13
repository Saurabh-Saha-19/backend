const http = require("http"); //loads the http module of node

const index = function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<html><body><h2> This is http node module</h2></body></html>");
};

http
  .createServer((request, response) => {
    if (request.url === "/") {
      index(request, response);
    } else {
      response.writeHead(404);
      response.end(http.STATUS_CODES[404]);
    }
  })
  .listen(3000); //4. tells the server that what port to be on.
