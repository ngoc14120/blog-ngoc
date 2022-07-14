const newsRoute = require("./news");
const siteRoute = require("./site");

function route(app) {
  app.get("/news", newsRoute);
  app.get("/search", siteRoute);
  app.get("/", siteRoute);
}

module.exports = route;
