module.exports = function(eleventyConfig) {

  // =========================
  // Static Files
  // =========================

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");


  // =========================
  // Engineering Projects
  // =========================

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });


  // =========================
  // Engineering Services
  // =========================

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });


  // =========================
  // Audit Projects / Services
  // =========================

  eleventyConfig.addCollection("audit", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_audit/*.md");
  });


  // =========================
  // Audit Team
  // =========================

  eleventyConfig.addCollection("audit_team", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_audit_team/*.md");
  });


  // =========================
  // Eleventy Settings
  // =========================

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data"
    }
  };

};
