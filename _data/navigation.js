const fs = require("fs");
const yaml = require("js-yaml");

module.exports = () => {
  return yaml.load(
    fs.readFileSync("./_content/navigation.yml", "utf8")
  );
};
