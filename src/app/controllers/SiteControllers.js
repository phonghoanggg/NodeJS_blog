class SiteControllers {
    // GET home
    index(req, res) {
        res.render('home');
    }
    // GET /search
    search(req, res) {
        res.render('search');
    }
    connet(req, res) {
        res.send('NEW CONNET');
    }
}

module.exports = new SiteControllers();
