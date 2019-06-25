const express = require("express");

const app = express();

const server = app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Running express on port 3000. Hit ctrl+c to kill me.");
  }
});

let connections = [];

server.on("connection", connection => {
  connections.push(connection);
  connection.on(
    "close",
    () => (connections = connections.filter(curr => curr !== connection))
  );
});

process.on("SIGINT", shutDown);

function shutDown() {
  console.log("Received kill signal, shutting down gracefully");
  server.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);

  connections.forEach(curr => curr.end());
  setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}
