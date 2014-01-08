var Router = require('koa-router');
var router = new Router();

require('./users').register(router);
require('./posts').register(router);

module.exports = router.middleware();
