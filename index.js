var express = require("express");
var SvgGenerator = require("./modules/svgGenerator");
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

app.get("/draw/:width/:height", function (req, res) {
  var height = parseInt(req.params.height);
  var width = parseInt(req.params.width);
  res.setHeader("Content-Type", "image/svg+xml");
  var svg = new SvgGenerator({
    height: height,
    width: width,
  });
  var success = svg.generate();
  if (success) {
    res.sendFile(__dirname + "/generatedImages/generated.svg");
  } else {
    res.status(500);
    res.json({
      error: "Unable to generate Svg",
    });
    return;
  }
});

app.listen(PORT, function () {
  console.log("App started on port " + PORT);
});
