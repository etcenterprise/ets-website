const fs = require("fs");
const matter = require("gray-matter");

module.exports = () => {
  const file = fs.readFileSync("./_content/contact.md", "utf8");
  return matter(file).data;
};
