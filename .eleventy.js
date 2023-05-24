module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('styles.css');
    eleventyConfig.addPassthroughCopy('services-detail.css');
    eleventyConfig.addPassthroughCopy('blog.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}