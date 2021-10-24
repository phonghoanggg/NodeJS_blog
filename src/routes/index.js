const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);
    app.use('/site', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;
