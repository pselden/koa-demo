var Router = require('koa-router');
var services = require('../services');

var router = new Router();

// Users service
router.get('/users/:userId', services.users.show);
router.post('/users', services.users.create);

module.exports = router;