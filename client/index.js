// content of index.js
const http = require('http')
const port = 3000
const twtest = require("./twtest.js")
const uuidv4 = require('uuid/v4');


const requestHandler = (request, response) => {
  var result = request.url.toString().split("/");
  if (result.length == 0 || result.length == 1) {
    response.end("Invalid request" + request.url);
    return
  }
  switch (result[1]) {
    case "first":
      var coord = result[2].split(",");
      if (coord.length != 2) {
        response.end("Invalid coords" + coord);
        return
      }
      var latLong = [parseFloat(coord[0]),parseFloat(coord[1])];
      twtest.handleFirst(latLong);
      response.end(uuidv4())
  }
}


const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

