class NewsController {
  news(req, res) {
    res.render("news");
  }
}

module.exports = new NewsController();
