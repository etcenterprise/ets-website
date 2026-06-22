module.exports = function(eleventyConfig) {

  // Copy static files
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");
  eleventyConfig.addPassthroughCopy("_content");

  // Projects collection
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  // Services collection
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });

  // Audit collection
  eleventyConfig.addCollection("audit", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_audit/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
