var Router = require('koa-router');
var services = require('../services');

var router = new Router();

// Users service
router.get('/users/:userId', services.users.show);
router.post('/users', services.users.create);

// Posts service
router.get('/posts/:postId', services.posts.show);
router.post('/posts', services.posts.create);

module.exports = router;