module.exports = function(eleventyConfig) {

  // Copy static files
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");

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

  // Navigation data from CMS
  eleventyConfig.addGlobalData(
    "navigation",
    require("./_content/navigation.yml")
  );

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
