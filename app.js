var app = require('koa')();
var middleware = require('./lib/middleware');
var db = require('./platform/db');
var services = require('./services');
var co = require('co');

app.use(middleware.favicon());
app.use(middleware.logger());
app.use(middleware.responseTime());
app.use(middleware.compress());

app.use(middleware.mount('/v1', services.v1));

co(function *(){
    var connection = yield db.sequelize.client.sync();
    if(connection){
        app.listen(3000);
        console.log('connected to database and listening on port 3000');
    }
})();