var express = require("express");
const PORT = process.env.PORT || 5000;

var app = express();

app.get("/random/:min/:max", function (req, res) {
  var min = parseInt(req.params.min);
  var max = parseInt(req.params.max);

  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({
      error: "Bad request",
    });
    return;
  }

  var result = Math.round(Math.random() * (max - min) + min);
  res.json({
    result: result,
  });
});

app.get("/dummy", function (req, res, next) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.sendFile(__dirname + "/generatedImages/dummy.svg");
});

app.listen(PORT, function () {
  console.log("App started on port " + PORT);
});
