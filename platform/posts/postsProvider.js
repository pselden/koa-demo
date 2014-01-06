var postsPersistence = require('./postsPersistence');

exports.getPost = function *(postId){
    return yield postsPersistence.getPost(postId);
};

exports.createPost = function *(userId, title){
    return yield postsPersistence.createPost(userId, title);
};