const express = require("express");

const app = express();

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Running express on port 3000. Hit ctrl+c to kill me.");
  }
});