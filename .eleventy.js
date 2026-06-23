module.exports = function(eleventyConfig) {

  // Static files
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");

  // Collections
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });

  eleventyConfig.addCollection("audit", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_audit/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_content"
    }
  };
};
