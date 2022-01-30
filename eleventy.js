/*
 * Building upon Eleventy's default Browsersync configuration:
 * https://github.com/11ty/eleventy/blob/v1.0.0/src/EleventyServe.js#L78-L92
 */
module.exports = {
  serveStatic: ['public'],
  serveStaticOptions: {
    extensions: ['html']
  }
};
