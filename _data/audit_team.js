const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

module.exports = () => {
  const folder = "./_audit_team";

  return fs.readdirSync(folder).map(file => {
    const content = fs.readFileSync(path.join(folder, file), "utf8");

    return matter(content).data;
  });
};
