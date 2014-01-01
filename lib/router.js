var Router = require('koa-router');
var controllers = require('../controllers');

var router = new Router();

router.resource('users', controllers.users);

module.exports = router;