var fs = require("fs");

module.exports = class SvgGenerator {
  constructor(
    props = {
      height: 200,
      width: 200,
      backgroundColor: "#d6d6d6",
    }
  ) {
    this.props = props;
  }

  generate() {
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.props.width}" height="${this.props.height}">
        <foreignObject width="100%" height="100%" style="background-image:linear-gradient(to right, #ff6e7f, #bfe9ff);">
          <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 40px">
            <span style="color: white; text-shadow: 0 0 2px blue">${this.props.width}x${this.props.height}</span>
          </div>
        </foreignObject>
      </svg>`;
    fs.writeFileSync(
      `${require("path").resolve("./")}/generatedImages/generated.svg`,
      svg
    );
    return true;
  }
};
