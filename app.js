var app = require('koa')();
var middleware = require('./lib/middleware');
var db = require('./platform/db');
var router = require('./lib/router');
var co = require('co');

app.use(middleware.favicon()); // TODO - right now this actually bounces a favicon with a 404
app.use(middleware.logger());
app.use(middleware.responseTime());
app.use(middleware.compress());

app.use(middleware.mount('/v1', router.middleware()));

co(function *(){
    var connection = yield db.sequelize.sync();
    if(connection){
        app.listen(3000);
        console.log('connected to database and listening on port 3000');
    }
})();