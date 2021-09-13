module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };