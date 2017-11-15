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
  const args = result[2];
  switch (result[1]) {
    case "first":
      handleFirst(response,args);
      break;
    case "second":
      handleSecond(response,args);
      break;
  }
}

function handleFirst(response,args) {
  var coord = args.split(",");
  if (coord.length != 2) {
    response.end("Invalid coordinates: " + coord);
    return
  }
  var latLong = [parseFloat(coord[0]),parseFloat(coord[1])];
  const uuid = uuidv4();
  response.end(uuid);
  twtest.handleFirst(latLong,uuid);
}

function handleSecond(response,args) {
  var splits = args.split(",");
  if (splits.length != 3) {
    response.end("Invalid coordinates: " + args);
    return
  }
  const add = splits[0];
  const zip = splits[1];
  const uuid = splits[2];
  response.end("Success");
  twtest.handleSecond(add,zip,uuid);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

