module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("logo.png");

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_projects/*.md");
  });

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_services/*.md");
  });

  eleventyConfig.addCollection("audit", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_audit/*.md");
  });

  eleventyConfig.addGlobalData(
    "navigation",
    require("./_content/navigation.yml")
  );

  eleventyConfig.addGlobalData(
    "home",
    require("./_content/home.md")
  );

  eleventyConfig.addGlobalData(
    "about",
    require("./_content/about.md")
  );

  eleventyConfig.addGlobalData(
    "contact",
    require("./_content/contact.md")
  );

  eleventyConfig.addGlobalData(
    "gallery",
    require("./_content/gallery.md")
  );

  return {
    dir: {
      input: ".",
      includes: "_includes"
    }
  };
};
