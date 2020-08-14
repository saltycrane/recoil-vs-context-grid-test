module.exports = {
  // set base path for github pages deploy
  // https://nextjs.org/docs/api-reference/next.config.js/basepath
  basePath:
    process.env.NODE_ENV === "production" ? "/recoil-vs-context-grid-test" : "",
};
