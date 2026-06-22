const fs = require("fs");
const yaml = require("js-yaml");
const matter = require("gray-matter");

module.exports = function (eleventyConfig) {

  // Copy static files
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");

  // Collections
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("services", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });

  eleventyConfig.addCollection("audit", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_audit/*.md");
  });

  // Global CMS data
  function loadMarkdownData(file) {
    const fileContents = fs.readFileSync(file, "utf8");
    return matter(fileContents).data;
  }

  eleventyConfig.addGlobalData(
    "home",
    loadMarkdownData("./_content/home.md")
  );

  eleventyConfig.addGlobalData(
    "about",
    loadMarkdownData("./_content/about.md")
  );

  eleventyConfig.addGlobalData(
    "contact",
    loadMarkdownData("./_content/contact.md")
  );

  eleventyConfig.addGlobalData(
    "gallery",
    loadMarkdownData("./_content/gallery.md")
  );

  eleventyConfig.addGlobalData(
    "navigation",
    yaml.load(
      fs.readFileSync("./_content/navigation.yml", "utf8")
    )
  );

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
