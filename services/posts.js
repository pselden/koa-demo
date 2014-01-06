var platform = require('../platform');
var parse = require('co-body');

exports.show = function *(){
    var post = yield platform.posts.getPost(this.params.postId);
    if(!post){
        return this.throw(404, 'Post not found');
    }

    this.body = post;
};

exports.create = function *(){
    var body = yield parse(this);
    var post = yield platform.posts.createPost(body.userId, body.title);
    this.body = post;
};

