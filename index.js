const express = require("express");
const app = express();
const fs = require("fs");
const { Worker } = require("worker_threads");

if (!fs.readdirSync(__dirname).includes("markdown.html")) new Worker("./worker.js");

app.use("/public", express.static("public"));

app.all("/*", (req, res) => {
  res.sendFile("markdown.html", {
    root: __dirname
  });
});

const listen = app.listen(3000, () => {
  console.log("Server is now ready on port", listen.address().port);
});