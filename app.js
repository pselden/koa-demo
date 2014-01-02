var app = require('koa')();
var middleware = require('./lib/middleware');
var db = require('./platform/db');
var router = require('./lib/router');

app.use(middleware.favicon()); // TODO - right now this actually bounces a favicon with a 404
app.use(middleware.logger());
app.use(middleware.responseTime());
app.use(middleware.compress());

app.use(middleware.mount('/v1', router.middleware()));

db
    .sequelize.sync()
    .complete(function (err) { // TODO - figure out how to yield instead of using the promise
        if (err) {
            throw err;
        } else {
            app.listen(3000);
            console.log('listening on port 3000')
        }
    });