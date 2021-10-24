class NewsControllers {
    // GET /news
    index(req, res) {
        res.render('news');
    }
    // GET show
    show(req, res) {
        res.send('NEW SHOW');
    }
}

module.exports = new NewsControllers();
