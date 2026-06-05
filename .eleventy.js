module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
