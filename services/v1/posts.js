var platform = require('../../platform');
var parse = require('co-body');

var show = exports.show = function *(){
    var post = yield platform.posts.getPost(this.params.postId);
    if(!post){
        return this.throw(404, 'Post not found');
    }

    this.body = post;
};

var create = exports.create = function *(){
    var body = yield parse(this);
    var post = yield platform.posts.createPost(body.userId, body.title);
    this.body = post;
};

exports.register = function(router){
    router.get('/posts/:postId', show);
    router.post('/posts', create);
};

