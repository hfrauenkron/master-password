// create webserver
const http = require("http");
const { get } = require("./lib/commands");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function(request, response) {
  const { pathname } = url.parse(request.url);

  if (pathname === "/favicon.ico") {
    response.writeHead(404);
    return response.end();
  }
  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const content = fs.readFileSync("src/view/index.html", "utf-8");
    return response.end(content);
  }

  try {
    const path = request.url.slice(1);
    const secret = get("abc", path);

    response.write(secret);
  } catch (error) {
    response.write("Can not read secret :-(");
  }
  response.end();
});

server.listen(7000, () => {
  console.log("Server listens on http://localhost:7000");
});
